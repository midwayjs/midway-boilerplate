import { Inject, Controller, Post, Provide, Query } from '@midwayjs/decorator';
import { IMidwayWebContext } from '@midwayjs/web';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {

  @Inject()
  ctx: IMidwayWebContext;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query('uid') id) {
    const user = await this.userService.getUser({id});
    return {success: true, message: 'OK', data: user};
  }
}
