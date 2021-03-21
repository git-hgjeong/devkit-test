import Vue from 'vue';
import Work from './Work.vue';
import TreeMenu from './TreeMenu';

//좌측메뉴 컴포넌트
Vue.component('tree-item', TreeMenu);

//new Vue(Work).$mount('#root'); 
new Vue({
    //App.vue 연결
    render: h => h(Work)
  }).$mount('#root');


//https://velog.io/@nabb00/Vue.jsRouter
