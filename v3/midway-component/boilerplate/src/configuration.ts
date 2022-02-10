import { Configuration } from '@midwayjs/decorator';
import * as DefaultConfig from './config/config.default';

@Configuration({
  namespace: 'book',
  importConfigs: [
    {
      default: DefaultConfig,
    },
  ],
})
export class BookConfiguration {
  async onReady() {
    // TODO something
  }
}
