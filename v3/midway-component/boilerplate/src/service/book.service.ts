import { Provide } from '@midwayjs/decorator';

@Provide()
export class BookService {
  async getBookById() {
    return 'hello world';
  }
}
