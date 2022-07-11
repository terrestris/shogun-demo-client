import * as packageInfoClient from '../../package.json';

export const useVersion = () => {
  // @ts-ignore
  if (packageInfoClient.default.version !== typeof (undefined) && packageInfoClient.default.version !== '') {
    // @ts-ignore
    return packageInfoClient.default.version;
  } else {
    console.warn('can not identify versionnumber');
    return 'Error';
  }
};
