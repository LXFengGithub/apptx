// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// v-charts 图标框架
import VeLine from 'v-charts/lib/line.common'
import Bar from 'v-charts/lib/bar.common'
import Histogram from 'v-charts/lib/histogram.common'
import Pie from 'v-charts/lib/pie.common'
Vue.component(VeLine.name, VeLine)
Vue.component(Bar.name, Bar)
Vue.component(Histogram.name, Histogram)
Vue.component(Pie.name, Pie)


// import axios from 'axios'
// Vue.prototype.$axios = axios;

// vant框架
import {
  Tab,
  Tabs,
  List,
  Cell,
} from 'vant';
Vue.use(Tab).use(Tabs).use(List).use(Cell);

// 移动端适配
import './assets/sass/index.scss'
import 'lib-flexible/flexible.js'
import remAndPhoneConfig from './config/remConfig'
remAndPhoneConfig()


// 挂着全局组件-集合
import componentsList from './components'
const {
  MTitle
} = componentsList
Vue.use(MTitle)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // axios,
  components: {
    App
  },
  template: '<App/>'
})
