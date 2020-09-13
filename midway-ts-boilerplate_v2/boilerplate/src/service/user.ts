import { Provide } from '@midwayjs/decorator';
import { IUserOptions, IUserResult } from '../interface';

@Provide()
export class UserService {

  async getUser(options: IUserOptions): Promise<IUserResult> {
    return {
      id: options.id,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
