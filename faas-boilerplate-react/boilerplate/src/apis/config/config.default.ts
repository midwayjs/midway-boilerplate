import { join } from 'path';

module.exports = (appInfo: any) => {
  const exports = {} as any;

  exports.static = {
    prefix: '/',
    dir: join(appInfo.baseDir, '../build'),
  };
  return exports;
};