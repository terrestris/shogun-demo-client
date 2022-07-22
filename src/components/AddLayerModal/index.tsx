import React, {
  useState
} from 'react';

import {
  Button,
  Input,
  Modal,
  ModalProps,
  notification,
  Table
} from 'antd';

import {
  getUid
} from 'ol';
import OlLayerGroup from 'ol/layer/Group';

import {
  useTranslation
} from 'react-i18next';

import {
  CapabilitiesUtil,
  MapUtil
} from '@terrestris/ol-util';
import {
  WMSLayer
} from '@terrestris/ol-util/dist/types';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  hide
} from '../../store/addLayerModal';
import {
  unsetSelectedKey
} from '../../store/toolMenu';

import './index.less';

export type AddLayerModalProps = {} & Partial<ModalProps>;

export const AddLayerModal: React.FC<AddLayerModalProps> = ({
  ...restProps
}): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [layers, setLayers] = useState<WMSLayer[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [url, setUrl] = useState(
    'https://sgx.geodatenzentrum.de/wms_topplus_open?request=GetCapabilities&service=wms'
  );

  const isModalVisible = useAppSelector(state => state.addLayerModal.visible);

  const dispatch = useAppDispatch();

  const map = useMap();

  const {
    t
  } = useTranslation();

  const getCapabilities = async (capabilitiesUrl: string) => {
    try {
      setLoading(true);

      const capabilities = await CapabilitiesUtil.getWmsCapabilities(capabilitiesUrl);
      const externalLayers = CapabilitiesUtil.getLayersFromWmsCapabilities(capabilities, 'Title');

      setLayers(externalLayers);
    } catch (error) {
      notification.error({
        message: t('AddLayerModal.errorMessage'),
        description: t('AddLayerModal.errorDescription')
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedRowKeys([]);
    setLayers([]);
    dispatch(hide());
    dispatch(unsetSelectedKey('addLayer'));
  };

  const onAddSelected = () => {
    const layersToAdd = layers.filter(layer => selectedRowKeys.includes(getUid(layer)));
    addLayers(layersToAdd);
  };

  const onAddAll = () => {
    addLayers(layers);
  };

  const addLayers = (layersToAdd: WMSLayer[]) => {
    if (!map) {
      return;
    }

    const targetFolderName = t('AddLayerModal.externalWmsFolder');
    let targetGroup = MapUtil.getLayerByName(map, targetFolderName) as OlLayerGroup;
    if (!targetGroup) {
      targetGroup = new OlLayerGroup();
      targetGroup.set('name', targetFolderName);
      const existingGroups = map.getLayerGroup().getLayers();
      existingGroups.insertAt(existingGroups?.getLength() || 0, targetGroup);
    }

    layersToAdd.forEach(layerToAdd => {
      if (!targetGroup.getLayers().getArray().includes(layerToAdd)) {
        layerToAdd.set('isExternalLayer', true);
        targetGroup.getLayers().push(layerToAdd);
      }
    });

    targetGroup.set('hideInLayerTree', targetGroup.getLayers().getLength() < 1);

    closeModal();
  };

  return (
    <Modal
      className="add-layer-modal"
      title={t('AddLayerModal.title')}
      visible={isModalVisible}
      onCancel={closeModal}
      footer={[
        <Button
          key="add-selected"
          disabled={selectedRowKeys?.length < 1}
          onClick={onAddSelected}
        >
          {t('AddLayerModal.addSelectedLayers')}
        </Button>,
        <Button
          key="add-all"
          disabled={layers?.length < 1}
          onClick={onAddAll}
        >
          {t('AddLayerModal.addAllLayers')}
        </Button>
      ]}
      {...restProps}
    >
      <Input.Search
        placeholder={t('AddLayerModal.inputPlaceholder')}
        value={url}
        onChange={(event) => {
          setUrl(event.target.value);
        }}
        onSearch={getCapabilities}
        enterButton={true}
      />
      <Table
        loading={loading}
        columns={[
          {
            title: t('AddLayerModal.columnTitle'),
            render: (text: any, record: any) => {
              return record.get('title');
            }
          }
        ]}
        rowKey={(record: any) => getUid(record)}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys
        }}
        pagination={false}
        dataSource={layers}
      />
    </Modal>
  );
};

export default AddLayerModal;
