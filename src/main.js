// yarn add vue-template-compiler  vue-style-loader css-loader
import Vue from 'vue'
import App from './App.vue'
new Vue({
    el:'#app',
    // data: {
    //     level:'top'
    // },
    render: h => h(App)
})