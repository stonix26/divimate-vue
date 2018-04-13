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
                <router-link
                    v-for="author in authors"
                    v-bind:key="author.id"
                    v-bind:to="{name: 'view-author', params: {slug: author.slug}}"
                    class="author-row"
                    tag="tr">
                    <td>{{author.author_name}}</td>
                    <td>{{author.service_type}}</td>
                    <td>{{author.progress_status}}</td>
                    <td>{{author.file_path}}</td>
                    <td>{{author.designer}}</td>
                    <td>{{author.amazon_link}}</td>
                </router-link>
            </tbody>
        </table>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data() {
        return {
            authors: [],
            loading: true
        }
    },

    created() {
        db.collection('authors').orderBy('author_name').get().then(querySnapshot => {
            this.loading = false
            querySnapshot.forEach(doc => {
                const data = {
                    id: doc.id,
                    author_name: doc.data().author_name,
                    service_type: doc.data().service_type,
                    progress_status: doc.data().progress_status,
                    file_path: doc.data().file_path,
                    designer: doc.data().designer,
                    amazon_link: doc.data().amazon_link,
                    slug: doc.data().slug
                }
                this.authors.push(data)
            });
        })
    }
}
</script>
<style scoped>
.btn {
    margin: 25px auto !important;
}
.fa-eye {
    color: #343a40;
}
.author-row {
    cursor: pointer;
}
</style>
