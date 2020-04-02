import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(Buefy, VueRouter);

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');
