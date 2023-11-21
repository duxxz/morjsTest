import {aPage} from '@morjs/core'

// 获取全局 app 实例
const app = getApp()

aPage({
  // 声明页面数据
  data: {},
  // 监听生命周期回调 onLoad
  onLoad() {
    // 获取用户信息并存储数据
    app.getUserInfo().then(
      (user) => {
        this.setData({
          user
        })
      },
      () => {
        // 获取用户信息失败
      }
    )
    my.request({
      url: 'https://test.xindaoapp.cn/mood-talker/api/bootstrap/aa', method: 'GET'
      , success: (res) => {
        console.log('request--', res)
      }, fail: (err) => {
        console.log('request--', err)
      }, complete: (res) => {
        console.log('request--', res)
      }
    })

    my.authorize({
      scopes: 'scope.userInfo',
      success: (res) => {
        console.log('authorize', res)
      }
    })

    this.httpTest()
  },
  // 监听生命周期回调 onShow
  onShow() {
    // 设置全局数据到当前页面数据
    this.setData({todos: app.todos})
  },
  // 事件处理函数
  onTodoChanged(e) {
    // 修改全局数据
    const checkedTodos = e.detail.value
    app.todos = app.todos.map((todo) => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1
    }))
    this.setData({todos: app.todos})
  },

  addTodo() {
    // 进行页面跳转
    // my.navigateTo({url: '../add-todo/add-todo'})

  },

  httpTest() {
    const {cloud} = app;
    const result = cloud.application.httpRequest({
      'path': 'https://test.xindaoapp.cn/mood-talker/api/bootstrap/aa',
      'method': 'GET'
    })
    console.log('cloudRequestResult', result)
  }
})
