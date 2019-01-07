// 全局注册的组件
Vue.component('hello-world', {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  template: `<p>{{ msg }}</p>`
})