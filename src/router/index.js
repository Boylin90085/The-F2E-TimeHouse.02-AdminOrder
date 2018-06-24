import Vue from 'vue'
import Router from 'vue-router'
import LineExample from '../components/LineExample.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LineExample',
      component: LineExample
    }
  ]
})
