<template>
    <div>
        <div class="jumbotron">
            <h1></h1>
        </div>
        <users :users="users" @edit-user="editUser" @delete-user="deleteUser"></users>

        <div class="alert" :class="{'alert-success': successMessage.length>0, 'alert-danger': failMessage.length>0}">
            <button type="button" class="close-btn" @click="successMessage = failMessage = ''">&times;</button>
            <strong>{{ failMessage || successMessage }}</strong>
        </div>

        <edit-user v-if="editingUser" :current_user="currentUser" :departments="departments" @cancelEdit="cancelEdit" @saveUser="saveUser"/>

    </div>
</template>

<script>
export default {
    data : function () {
        return {
            title: 'List Users',
            editingUser: false,
            showSuccess: false,
            showFailure: false,
            successMessage: '',
            failMessage: '',
            currentUser: {},
            users: [],
            departments: []
        };
    },
    methods: {
        editUser: function (user) {
            this.currentUser = Object.assign({}, user);
            this.editingUser = true;
        },
        deleteUser: function (user) {
            axios.delete(`/api/users/${user.id}`).then(r => {
                this.users.splice(this.users.indexOf(user), 1);
            }).catch(reason => {
                console.error(reason);
            })
        },
        saveUser: function (user) {
            Object.assign(this.currentUser, user);
            axios.put(`/api/users/${this.currentUser.id}`, this.currentUser).then(r => {
                this.cancelEdit();
                const user = r.data.data;
                Object.assign(this.users.find(u => u.id == user.id), user);
                this.successMessage = "User updated";
                this.failMessage = '';
            }).catch(reason => {
                this.failMessage = '';
                this.successMessage = '';
                for (const error of Object.entries(reason.response.data.errors)) {
                    this.failMessage += error[1] + " ";
                }
            })
        },
        cancelEdit: function () {
            this.currentUser = {};
            this.editingUser = false;
        }
    },
    mounted() {

        axios.get('/api/users').then(response => {
            this.users = response.data.data;
        })
        axios.get('/api/departments').then(response => {
            this.departments = response.data.data;
        })
    }
}
</script>

<style>

</style>
