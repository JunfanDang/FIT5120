import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'
import HomePage from '@/components/HomePage'
import Plants from '@/components/Plants'
import Calculator from '@/components/Calculator'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/plants',
      name: 'Plants',
      component: Plants
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
