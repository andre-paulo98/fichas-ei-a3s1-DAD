require('./bootstrap')

window.Vue = require('vue')

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AppComponent from './App.vue';
import UsersComponent from './components/users';
import EditUserComponent from './components/edit_user';
import DepartmentsComponent from './components/departments';

//Vue.component('app', AppComponent);
Vue.component('users', UsersComponent);
Vue.component('edit-user', EditUserComponent);

const routes = [
    {path: '/', redirect: '/users'},
    {path: '/users', component: AppComponent},
    {path: '/departments', component: DepartmentsComponent},
];

const router = new VueRouter({routes})

const app = new Vue({
    el: '#app',
    router,
    data: {},
    methods: {},
    mounted() {

    }
})
