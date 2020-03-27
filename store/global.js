/*
 * @Description: This is a XX file
 * @Author: JeanneWu
 * @Date: 2020-03-24 22:31:12
 */
// js文件头部注释之后的内容
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment({commit}) {
            commit('increment')
        }
    }
})


store.commit('increment')

console.log(store.state.count)

export default store;