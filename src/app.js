import Vue from 'vue';
import * as SkeComponents from './core/components';
import ColorSwitch from './components/ColorSwitch.vue';

Object.keys(SkeComponents).forEach(c => Vue.component(c, SkeComponents[c]));

Vue.component('ColorSwitch', ColorSwitch);

window.Vue = Vue;
