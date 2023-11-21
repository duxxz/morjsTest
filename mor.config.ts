import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'taobao-miniprogram',
    sourceType: 'alipay',
    target: 'taobao',
    compileType: 'miniprogram',
    compileMode: 'bundle'
  },
])
