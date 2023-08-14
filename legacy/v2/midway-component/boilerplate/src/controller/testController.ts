import { Get, Inject, Provide, Controller } from '@midwayjs/decorator';
import { BookService } from '../service/bookService';

@Provide()
@Controller('/test')
export class TestControlelr {
  @Inject()
  bookService: BookService; // 这里直接注入了 book 这个作用域下的 bookService

  @Inject()
  ctx;

  @Get('/hello')
  async hello() {
    return this.bookService.getBookById();
  }
}
