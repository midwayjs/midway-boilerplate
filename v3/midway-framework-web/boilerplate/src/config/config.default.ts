import { EggAppConfig, PowerPartial } from 'egg';
import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: MidwayAppInfo) => {
  const config = {} as MidwayConfig & DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1642666875064_7261';

  config.egg = {
    port: 7001,
  };

  // config.security = {
  //   csrf: false,
  // };
  return config;
};
