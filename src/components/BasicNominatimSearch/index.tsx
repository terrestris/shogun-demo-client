import React from 'react';

import {
  useTranslation
} from 'react-i18next';

import NominatimSearch, {
  NominatimSearchProps
} from '@terrestris/react-geo/dist/Field/NominatimSearch/NominatimSearch';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';

export const BasicNominatimSearch: React.FC<Partial<NominatimSearchProps>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const {
    t
  } = useTranslation();

  if (!map) {
    return <></>;
  }

  return (
    <NominatimSearch
      map={map}
      countryCodes={''}
      allowClear={true}
      nominatimBaseUrl={'https://nominatim.terrestris.de/search.php?'}
      placeholder={t('Nominatim.placeholder')}
      {...restProps}
    />
  );
};

export default BasicNominatimSearch;
