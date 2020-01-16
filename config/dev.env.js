'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  //后台接口地址（开发环境）
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8080"'
})
