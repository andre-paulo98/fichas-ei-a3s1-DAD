<template>
    <div class="jumbotron">
        <h2>Edit User</h2>
        <form>
            <div class="form-group">
                <label for="">Nome</label>
                <input type="text" class="form-control" v-model="current_user.name">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" v-model="current_user.email">
            </div>
            <div class="form-group">
                <label for="">Age</label>
                <input type="text" class="form-control" v-model="current_user.age">
            </div>
            <div class="form-group">
                <label for="">Department</label>
                <select name="" id="" v-model="current_user.department_id">
                    <option v-for="department of departments" :value="department.id" :key="department.id">{{ department.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-secondary" @click.prevent="cancelEdit()">Cancel</button>
                <button class="btn btn-primary" @click.prevent="saveUser()">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['current_user', 'departments'],
    methods: {
        cancelEdit() {
            this.$emit('cancelEdit');
        },
        saveUser() {
            this.$emit('saveUser', this.current_user);
        }
    }
}
</script>

<style scoped>

</style>
