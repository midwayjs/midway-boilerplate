// 获取框架
const WebFramework = require('@midwayjs/koa').Framework;
// 初始化 web 框架并传入启动参数
const web = new WebFramework().configure({
  port: 7001,
});

const { Bootstrap } = require('@midwayjs/bootstrap');

// 加载框架并执行
Bootstrap.load(web).run();
