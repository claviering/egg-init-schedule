'use strict';

const initSchedule = require('./lib/initSchedule');

module.exports = app => {
  console.log('egg-init-schedule 插件加载');
  if (app.config.initSchedule.params) initSchedule(app);
};
