import { Configuration } from '@midwayjs/decorator';

@Configuration({
  conflictCheck: true,
})
export class ContainerLifeCycle {
  async onReady() {}
}
