const Framework = require('@midwayjs/socketio').Framework;
const socket = new Framework().configure({
  port: 3000,
});

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(socket).run();
