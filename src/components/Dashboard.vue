<template>
    <div id="dashboard">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Authors</h1>
            </div>
            <div class="col">
                <router-link to="/new-author" class="btn btn-dark float-right"><i class="fa fa-plus"></i> Add New</router-link>
            </div>
        </div>
        <table class="table table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Author Name</th>
                    <th scope="col">Service Type</th>
                    <th scope="col">Progress Status</th>
                    <th scope="col">File Path</th>
                    <th scope="col">Designer</th>
                    <th scope="col">Amazon Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark Otoo</td>
                    <td>Basic</td>
                    <td>Launched</td>
                    <td>\\file-02</td>
                    <td>Jess Muana</td>
                    <td>amazon.com</td>
                </tr>
                <tr>
                    <td>Mark Otoo</td>
                    <td>Basic</td>
                    <td>Launched</td>
                    <td>\\file-02</td>
                    <td>Jess Muana</td>
                    <td>amazon.com</td>
                </tr>
                <tr>
                    <td>Mark Otoo</td>
                    <td>Basic</td>
                    <td>Launched</td>
                    <td>\\file-02</td>
                    <td>Jess Muana</td>
                    <td>amazon.com</td>
                </tr>
                <tr>
                    <td>Mark Otoo</td>
                    <td>Basic</td>
                    <td>Launched</td>
                    <td>\\file-02</td>
                    <td>Jess Muana</td>
                    <td>amazon.com</td>
                </tr>
                <tr>
                    <td>Mark Otoo</td>
                    <td>Basic</td>
                    <td>Launched</td>
                    <td>\\file-02</td>
                    <td>Jess Muana</td>
                    <td>amazon.com</td>
                </tr>
                <tr>
                    <td>Mark Otoo</td>
                    <td>Basic</td>
                    <td>Launched</td>
                    <td>\\file-02</td>
                    <td>Jess Muana</td>
                    <td>amazon.com</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {}
    }
}
</script>
<style scoped>
.btn {
    margin: 25px auto !important;
}
</style>