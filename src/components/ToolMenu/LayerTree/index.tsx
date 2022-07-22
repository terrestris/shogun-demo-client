import React, {
  useState
} from 'react';

import {
  faBars
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  getUid
} from 'ol';
import OlBaseLayer from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import OlSource from 'ol/source/Source';
import OlSourceVector from 'ol/source/Vector';

import {
  useTranslation
} from 'react-i18next';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import RgLayerTree, {
  LayerTreeProps as RgLayerTreeProps
} from '@terrestris/react-geo/dist/LayerTree/LayerTree';
import Legend from '@terrestris/react-geo/dist/Legend/Legend';
import LayerTransparencySlider from '@terrestris/react-geo/dist/Slider/LayerTransparencySlider/LayerTransparencySlider';
import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import LayerTreeContextMenu from './LayerTreeContextMenu';

import './index.less';

export type LayerTreeProps = {} & Partial<RgLayerTreeProps>;

export const LayerTree: React.FC<LayerTreeProps> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const {
    t
  } = useTranslation();

  const [visibleLegendsIds, setVisibleLegendsIds] = useState<string[]>([]);

  const treeFilterFunction = (layer: OlLayer<OlSource> | OlLayerGroup) => {
    if (layer instanceof OlLayerGroup) {
      return !layer.get('hideInLayerTree');
    } else {
      return !layer.get('isBackgroundLayer') &&
        !(layer.getSource && layer.getSource() instanceof OlSourceVector);
    }
  };

  const treeNodeTitleRenderer = (layer: OlBaseLayer) => {
    if (!map) {
      return;
    }

    const mapView = map.getView();
    const unit = mapView.getProjection().getUnits() || 'm';
    const resolution = mapView.getResolution();
    const scale = resolution ? MapUtil.getScaleForResolution(resolution, unit) : undefined;

    if (layer instanceof OlLayerGroup) {
      return (
        <div>
          {layer.get('name')}
          <FontAwesomeIcon icon={faBars} />
        </div>
      );
    } else {
      return (
        <>
          <div className="tree-node-header">
            <span>{layer.get('name')}</span>
            <LayerTreeContextMenu
              layer={(layer as WmsLayer)}
              visibleLegendsIds={visibleLegendsIds}
              setVisibleLegendsIds={setVisibleLegendsIds}
            />
          </div>
          {
            layer.get('visible') &&
              <>
                <div className="layer-transparency">
                  <LayerTransparencySlider
                    tipFormatter={val => `${t('LayerTree.transparency')}: ${val}%`}
                    layer={layer}
                  />
                </div>
              </>
          }
          {
            layer.get('visible') && visibleLegendsIds.includes(getUid(layer)) &&
              <Legend
                layer={layer as WmsLayer}
                errorMsg={t('LayerTree.noLegendAvailable')}
                extraParams={{
                  scale,
                  LEGEND_OPTIONS: 'fontAntiAliasing:true;forceLabels:on',
                  TRANSPARENT: true
                }}
              />
          }
        </>
      );
    }
  };

  if (!map) {
    return <></>;
  }

  return (
    <RgLayerTree
      className="layertree"
      map={map}
      nodeTitleRenderer={treeNodeTitleRenderer}
      filterFunction={treeFilterFunction}
      draggable={{
        icon: false
      }}
      {...restProps}
    />
  );
};

export default LayerTree;
