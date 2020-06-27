# egg-init-schedule

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-init-schedule.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-init-schedule
[travis-image]: https://img.shields.io/travis/eggjs/egg-init-schedule.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-init-schedule
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-init-schedule.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-init-schedule?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-init-schedule.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-init-schedule
[snyk-image]: https://snyk.io/test/npm/egg-init-schedule/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-init-schedule
[download-image]: https://img.shields.io/npm/dm/egg-init-schedule.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-init-schedule


<!--
Description here.
-->

eggjs 启动或者重启的时候，读取 MongoDB 数据库查找出未完成的定时任务，重新建立定时任务


## Install

```bash
$ npm i egg-init-schedule --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.initSchedule = {
  enable: true,
  package: 'egg-init-schedule',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.initSchedule = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
