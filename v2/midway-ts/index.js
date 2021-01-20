'use strict';

module.exports = {
  name: {
    desc: 'project name',
    default: 'my_midway_project'
  },
  description: {
    desc: 'project description',
    default: ''
  },
  author: {
    desc: 'project author',
    default: 'anonymous'
  },
  keys: {
    desc: 'cookie security keys',
    default: Date.now() + '_' + random(100, 10000),
  },
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
