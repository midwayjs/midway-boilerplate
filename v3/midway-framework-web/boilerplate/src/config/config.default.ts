import { EggAppConfig, PowerPartial } from 'egg';
import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_{{keys}}',
    egg: {
      port: 7001,
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig & DefaultConfig;
};
