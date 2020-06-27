'use strict';
const schedule = require('node-schedule');

module.exports = app => {
  app.addSingleton('initSchedule', initSchedule);
};

/**
 * 
 * @param {Object} config 查询的参数
 * @param {*} app 
 */
async function initSchedule(config, app) {
  const params = {};
  const scheduleEmitMessageList = [];
  const socket = app.io.of('/');
  const res = await app.service.message.getMessage(config);
  console.log('getMessage res', res);
  res.forEach(item => {
    const j = schedule.scheduleJob(new Date(item.messageTime), function() {
      app.helper.emitMessage(socket, params);
    });
    const _id = item._id;
    scheduleEmitMessageList.push({ _id, j });
  });
  return scheduleEmitMessageList;
}
