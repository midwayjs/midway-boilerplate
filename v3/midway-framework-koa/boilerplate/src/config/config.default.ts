import { MidwayConfig } from '@midwayjs/core';

const config: MidwayConfig = {};

// use for cookie sign key, should change to your own and keep security
config.keys = '{{keys}}';

config.koa = {
  port: 7001,
};

export default config;
