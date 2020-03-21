

/*
 * @Description: This is a XX file
 * @Author: JeanneWu
 * @Date: 2020-03-17 09:13:53
 */
import Vue from 'vue'
import App from './app.vue'
import echarts from 'echarts'
require('./mock')


let root = document.createElement('div');
document.body.appendChild(root);

Vue.prototype.$echarts = echarts;

new Vue({
	render: (h)=> h(App)
}).$mount(root)
