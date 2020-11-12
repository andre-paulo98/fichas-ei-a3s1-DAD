<template>
    <table class="table table-striped">
        <tr>
            <th>Name</th>
            <th>Created</th>
        </tr>
        <tr v-for="department of departments" :key="department.id">
            <td>{{department.name}}</td>
            <td>{{department.date}}</td>
        </tr>
    </table>
</template>

<script>
export default {
    data: function () {
        return {
            departments: null
        }
    },
    mounted() {
        axios.get('/api/departments').then((response) => {
            this.departments = response.data.data;
        })
    }
}
</script>

<style scoped>

</style>
