import Vue from 'vue'
import Router from 'vue-router'
import demo01 from './components/myt1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo01',
      component: demo01
    }
  ]
})
