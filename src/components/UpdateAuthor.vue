<template>
    <div id="new-author">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Update Author</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7">
                <form @submit.prevent="updateAuthor">
                    <div class="form-group">
                        <label>Author's Name</label>
                        <input type="text" v-model="author_name" class="form-control" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Service Type</label>
                            <select v-model="service_type" class="form-control">
                                <option value="" selected disabled>Choose...</option>
                                <option>Basic</option>
                                <option>Deluxe</option>
                                <option>Premium</option>
                                <option>Silver</option>
                                <option>Platinum</option>
                                <option>Gold</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Progress Status</label>
                            <select v-model="progress_status" class="form-control">
                                <option value="" selected disabled>Choose...</option>
                                <option>Template (Design Draft Creation)</option>
                                <option>Demo (Mockup and Contents Creation)</option>
                                <option>Live</option>
                                <option>Launched</option>
                                <option>End of Service</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label>File Path</label>
                            <input type="text" v-model="file_path" class="form-control" required>
                        </div>
                        <div class="form-group col-md-4">
                            <label>Designer</label>
                            <select v-model="designer" class="form-control">
                                <option value="" selected disabled>Choose...</option>
                                <option>Jess</option>
                                <option>Randy</option>
                                <option>Roy</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label>Amazon Link</label>
                            <input type="text" v-model="amazon_link" class="form-control" required>
                        </div>
                        <div class="form-group col-md-12">
                            <label>Notes</label>
                            <vue-editor v-model="notes" required></vue-editor>
                        </div>
                    </div>
                    <router-link v-if="slug" v-bind:to="{ name: 'view-author', params: { slug: slug } }" class="btn btn-outline-dark btn-lg"><i class="fa fa-arrow-left"></i> Cancel</router-link>
                    <button type="submit" class="btn btn-dark btn-lg"><i class="fa fa-cloud"></i> Save</button>
                </form>
            </div>
            <div class="col-md-5">
                <div v-if="notes" class="card bg-light mb-3">
                    <div class="card-header"><i class="fa fa-search"></i> Notes Live Preview</div>
                    <div class="card-body">
                        <div v-html="notes"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import { VueEditor } from 'vue2-editor'
export default {
    name: 'update-author',
    components: {
        VueEditor
    },
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
            querySnapshot.forEach( doc => {
                next(vm => {
                    vm.author_name = doc.data().author_name
                    vm.service_type = doc.data().service_type
                    vm.progress_status = doc.data().progress_status
                    vm.file_path = doc.data().file_path
                    vm.designer = doc.data().designer
                    vm.amazon_link = doc.data().amazon_link
                    vm.notes = doc.data().notes
                    vm.slug = doc.data().slug
                })
            })
        })
    },

    watch: {
        '$route': 'fetchData'
    },

    methods: {
        fetchData() {
            db.collection('authors').where('slug', '==', this.$route.params.slug).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.author_name = doc.data().author_name
                    this.service_type = doc.data().service_type
                    this.progress_status = doc.data().progress_status
                    this.file_path = doc.data().file_path
                    this.designer = doc.data().designer
                    this.amazon_link = doc.data().amazon_link
                    this.notes = doc.data().notes
                    this.slug = doc.data().slug
                })
            })
        },
        updateAuthor() {
            db.collection('authors').where('slug', '==', this.$route.params.slug).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        author_name: this.author_name,
                        service_type: this.service_type,
                        progress_status: this.progress_status,
                        file_path: this.file_path,
                        designer: this.designer,
                        amazon_link: this.amazon_link,
                        notes: this.notes,
                        slug: this.slug
                    })
                    .then(() => {
                        this.$router.push({ name: 'view-author', params: { slug: this.slug } })
                    })
                })
            })
        }
    }
}
</script>