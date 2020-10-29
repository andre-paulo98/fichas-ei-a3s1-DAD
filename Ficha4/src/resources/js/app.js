require('./bootstrap')

window.Vue = require('vue')

const app = new Vue({
    el: '#app',
    data: {
        title: 'List Users',
        editingUser: false,
        showSuccess: false,
        showFailure: false,
        successMessage: '',
        failMessage: '',
        currentUser: {},
        users: [],
        departments: []
    },
    methods: {
        editUser: function (user) {

        },
        deleteUser: function (user) {

        },
        saveUser: function () {

        },
        cancelEdit: function () {

        }
    },
    mounted () {

    }
})
