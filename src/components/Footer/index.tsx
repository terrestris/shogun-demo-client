import React, {
  useEffect
} from 'react';

import {
  Button,
  Divider
} from 'antd';

import OlControlMousePosition from 'ol/control/MousePosition';
import OlControlScaleLine from 'ol/control/ScaleLine';
import {
  createStringXY
} from 'ol/coordinate';

import {
  useTranslation
} from 'react-i18next';

import ScaleCombo from '@terrestris/react-geo/dist/Field/ScaleCombo/ScaleCombo';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';
import { useVersion } from '../../hooks/useVersion';

export interface FooterProps extends React.ComponentProps<'div'> { }

export const Footer: React.FC<FooterProps> = ({
  ...restProps
}): JSX.Element => {
  const {
    t
  } = useTranslation();

  const map = useMap();

  useEffect(() => {
    if (!map) {
      return;
    }

    const existingControl = map.getControls().getArray()
      .find(control => control instanceof OlControlScaleLine);

    if (existingControl) {
      return;
    }

    map.addControl(
      new OlControlScaleLine({
        target: 'scale-line-container'
      })
    );
  }, [map]);

  useEffect(() => {
    if (!map) {
      return;
    }

    const existingControl = map.getControls().getArray()
      .find(control => control instanceof OlControlMousePosition);

    if (existingControl) {
      return;
    }

    map.addControl(
      new OlControlMousePosition({
        coordinateFormat: createStringXY(2),
        projection: 'EPSG:25832',
        undefinedHTML: '&nbsp;',
        target: 'mouse-position'
      })
    );
  }, [map]);

  const openContactModal = (): void => {
    window.open('https://www.terrestris.de/de/kontakt/', '_blank');
  };

  const openImprintModal = (): void => {
    window.open('https://www.terrestris.de/de/impressum/', '_blank');
  };

  const openPrivacyModal = (): void => {
    window.open('https://www.terrestris.de/de/datenschutzerklaerung/', '_blank');
  };

  if (!map) {
    return <></>;
  }

  return (
    <div
      className="footer"
      {...restProps}
    >
      <div
        className="item-container left-items"
      >
        <div
          id="scale-line-container"
        />
        <Divider
          type="vertical"
        />
        {t('Footer.scale')}:
        <ScaleCombo
          map={map}
        />
        <Divider
          type="vertical"
        />
        <div>
          {t('Footer.refSystem')}: {map.getView().getProjection().getCode()}
        </div>
        <Divider
          type="vertical"
        />
        <div>
          {t('Footer.version')}: {useVersion()}
        </div>
        <Divider
          type="vertical"
        />
        <div>
          {t('Footer.mousePosition')}:
        </div>
        <div
          id="mouse-position"
          className="mouse-position"
        />
      </div>
      <div className="item-container right-items">
        <Button
          onClick={openContactModal}
          type="link"
        >
          {t('Footer.contact')}
        </Button>
        <Button
          onClick={openImprintModal}
          type="link"
        >
          {t('Footer.imprint')}
        </Button>
        <Button
          onClick={openPrivacyModal}
          type="link"
        >
          {t('Footer.privacypolicy')}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
