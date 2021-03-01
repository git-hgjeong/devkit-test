import Vue from 'vue';

import Page1 from './Page1';
import Header from './WorkHeader';

new Vue(Header).$mount('#header'); 
new Vue(Page1).$mount('#root'); 
