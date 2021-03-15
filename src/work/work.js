import Vue from 'vue';
import Work from './Work.vue';
import TreeMenu from './TreeMenu';

//좌측메뉴 컴포넌트
Vue.component('tree-item', TreeMenu);

new Vue(Work).$mount('#root'); 
