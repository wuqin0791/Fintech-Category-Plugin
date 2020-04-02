

/*
 * @Description: This is a XX file
 * @Author: JeanneWu
 * @Date: 2020-03-17 09:13:53
 */
import Vue from 'vue'
import App from './app.vue'
import echarts from 'echarts'
import store from '../store/global';
import router from './router';
require('./mock')

// console.log(router);
let root = document.createElement('div');
document.body.appendChild(root);

Vue.prototype.$echarts = echarts;

let app = new Vue({
	store,
	router,
	// App
	render: (h)=> h(App)
});
setTimeout(() => app.$mount(root), 0);
