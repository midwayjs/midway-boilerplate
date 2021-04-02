/**
 * 如果是编写 Runtime 的扩展
 */
import { RuntimeEngine, ServerlessBaseRuntime } from '@midwayjs/runtime-engine';

export = (engine: RuntimeEngine) => {
  // Runtime 层面的扩展
  engine.addRuntimeExtension({
    /**
     * 执行用户代码之前
     */
    async beforeInvokeHandler(context, args, meta) {},
    /**
     * 执行了用户代码之后
     */
    async afterInvokeHandler(context, args, meta) {},
    /**
     * runtime 关闭之前
     */
    async beforeClose(runtime: ServerlessBaseRuntime) { }
  });

  /**
   * 扩展上下文
   */
  engine.addContextExtension(async (context, runtime: ServerlessBaseRuntime) => {
    context.hello = 'world';
  });

};
