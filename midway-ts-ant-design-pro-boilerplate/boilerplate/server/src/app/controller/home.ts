import { Context, controller, get, inject, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async index() {
    await this.ctx.render('index.tpl');
  }
}
