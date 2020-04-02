

/*
 * @Description: This is a vue.router's file
 * @Author: JeanneWu
 * @Date: 2020-04-02 13:48:02
 */
// js文件头部注释之后的内容

import Vue from 'vue';
import Router from 'vue-router';
import category from './components/category.vue';
import index from './components/index.vue';

// const category = () => require('./components/category.vue');
// const index = () => require('./components/index.vue');


Vue.use(Router);
// console.log(test);
const routes = [{
    path: '/test',
    name: 'category',
    component: category
}, {
    path: '/',
    name: 'index',
    component: index
}];

export default new Router({
    routes
});
