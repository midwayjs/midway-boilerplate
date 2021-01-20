import { Inject, Controller, Post, Provide, Query } from '@midwayjs/decorator';
import { IMidwayExpressContext } from '@midwayjs/express';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: IMidwayExpressContext;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query() uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
}
