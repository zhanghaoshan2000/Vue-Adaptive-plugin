/*
 * @Author: xiangyang
 * @Date: 2023-01-26 08:14:21
 * @LastEditors: xiangyang
 * @LastEditTime: 2023-01-26 10:42:06
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import ScaleBox from 'xiangyang-ui'
import 'xiangyang-ui/xiangyang-ui.css'
Vue.config.productionTip = false

Vue.use(ScaleBox)

new Vue({
  render: h => h(App),
}).$mount('#app')
