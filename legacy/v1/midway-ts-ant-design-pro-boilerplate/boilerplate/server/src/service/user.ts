import { provide } from 'midway';
import { IUserOptions, IUserResult, IUserService } from '../interface/user';

@provide('userService')
export class UserService implements IUserService {

  async getUser(options: IUserOptions): Promise<IUserResult> {
    return {
      id: options.id,
      avatar: 'https://gw.alipayobjects.com/zos/r/171lqk/20191222162345.png',
      username: '侑夕',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
