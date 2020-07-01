'use strict';
const schedule = require('node-schedule');

module.exports = app => {
  initSchedule(app);
};

/**
 * 
 * @param {*} app 
 */
function initSchedule(app) {
  const query = app.config.initSchedule.params || {}; // 查询参数
  const update = app.config.initSchedule.update || {}; // 更新参数
  const options = app.config.initSchedule.options || {}; // 查询选项
  const model = app.config.initSchedule.model; // 数据库表名
  const time = app.config.initSchedule.time; // 建立定时器的字段名
  console.log('egg-init-schedule 插件启动');
  app.ready(async () => {
    const socket = app.io.of('/');
    const messages = await app.model[model].find(query, {}, options).exec();
    if (!messages || !messages.length) {
      console.log('所有消息已经推送完成');
    }
    let scheduleEmitMessageList = []; // 推送消息队列
    messages.forEach(item => {
      if (!item[time]) return;
      // 未推送但是已经过时的：立即推送
      if (new Date(item[time]) < new Date()) {
        emitMessage(app, model, socket, item._id, update);
      } else {
        const j = schedule.scheduleJob(new Date(item[time]), function() {
          emitMessage(app, model, socket, item._id, update);
        });
        let _id = item._id;
        scheduleEmitMessageList.push({_id, j});
      }
    });
    app.scheduleEmitMessageList = scheduleEmitMessageList;
  })
}

function emitMessage(app, model, socket, _id, update) {
  app.helper.emitMessage(socket, _id);
  app.model[model].updateOne({_id: _id}, update).exec();
}
