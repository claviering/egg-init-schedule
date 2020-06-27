'use strict';

const initSchedule = require('./lib/initSchedule');

module.exports = app => {
  if (app.config.initSchedule.app) initSchedule(app);
};
