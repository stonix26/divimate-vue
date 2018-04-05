<template>
    <div id="view-author">
        <div class="row">
            <div class="col-md-12">
                <router-link to="/" class="btn btn-dark"><i class="fa fa-long-arrow-left"></i> Back</router-link>
                <router-link to="/" class="btn btn-dark float-right"><i class="fa fa-pencil"></i> Update {{author_name}}'s details</router-link>
                <button @click="deleteAuthor" class="btn btn-outline-danger float-right"><i class="fa fa-trash"></i> Delete</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7">
                <div class="card bg-light">
                    <div class="card-header bg-dark text-white display-4"><i class="fa fa-user-circle"></i> {{author_name}}</div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <td><i class="fa fa-server"></i></td>
                                    <td>Service Type</td>
                                    <td>{{service_type}}</td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-thermometer-three-quarters"></i></td>
                                    <td>Progress Status</td>
                                    <td>{{progress_status}}</td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-file"></i></td>
                                    <td>File Path</td>
                                    <td>{{file_path}}</td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-user"></i></td>
                                    <td>Designer</td>
                                    <td>{{designer}}</td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-amazon"></i></td>
                                    <td>Amazon Link</td>
                                    <td>{{amazon_link}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa fa-sticky-note"></i> Notes</h5>
                        <hr>
                        <p class="card-text">{{notes}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
        name: 'view-author',
        data() {
            return {
                author_name: null,
                service_type: null,
                progress_status: null,
                file_path: null,
                designer: null,
                amazon_link: null,
                notes: null,
                slug: null
            }
        },

        beforeRouteEnter(to, from, next) {
            db.collection('authors').where('slug', '==', to.params.slug).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    next(vm => {
                        vm.author_name = doc.data().author_name;
                        vm.service_type = doc.data().service_type;
                        vm.progress_status = doc.data().progress_status;
                        vm.file_path = doc.data().file_path;
                        vm.designer = doc.data().designer;
                        vm.amazon_link = doc.data().amazon_link;
                        vm.notes = doc.data().notes;
                        vm.slug = doc.data().slug;
                    })
                })
            })
        },

        watch: {
            $route: 'fetchData'
        },

        methods: {
            fetchData() {
                db.collection('authors').where('slug', '==', this.$route.params.slug).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.author_name = doc.data().author_name;
                        this.service_type = doc.data().service_type;
                        this.progress_status = doc.data().progress_status;
                        this.file_path = doc.data().file_path;
                        this.designer = doc.data().designer;
                        this.amazon_link = doc.data().amazon_link;
                        this.notes = doc.data().notes;
                        this.slug = doc.data().slug;
                    })
                })
            },

            deleteAuthor() {
                if(confirm('Are you sure you want to delete this?')) {
                    db.collection('authors').where('slug', '==', this.$route.params.slug).get().then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            doc.ref.delete();
                            this.$router.push('/');
                        })
                    })
                }
            }
        }
    }
</script>

<style scoped>
.btn {
    margin: 25px auto !important;
}
.btn-outline-danger {
    margin-right: 10px !important;
}
</style>