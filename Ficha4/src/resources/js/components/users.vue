<template>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Department</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody v-if="users">
        <tr v-for="user of users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.department }}</td>
            <td>
                <button class="btn btn-primary" v-on:click.prevent="editUser(user)">Edit</button>
                <button class="btn btn-danger" @click="deleteUser(user)">Delete</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['users'],
    methods: {
        editUser(user) {
            this.$emit('edit-user', user)
        },
        deleteUser(user) {
            this.$emit('delete-user', user)
        }
    }
}
</script>

<style scoped>

</style>
