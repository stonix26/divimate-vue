<template>
    <div id="new-author">
        <div class="row">
            <div class="col">
                <h1 class="display-4">New Author</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7">
                <form @submit.prevent="saveAuthor">
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
                    <router-link to="/" class="btn btn-outline-dark btn-lg"><i class="fa fa-arrow-left"></i> Cancel</router-link>
                    <button type="submit" class="btn btn-dark btn-lg"><i class="fa fa-cloud"></i> Submit</button>
                </form>
            </div>
            <div class="col-md-5">
                <div class="card bg-light mb-3">
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
    name: 'new-author',
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
            notes: null
        }
    },

    methods: {
        saveAuthor() {
            db.collection('authors').add({
                author_name: this.author_name,
                service_type: this.service_type,
                progress_status: this.progress_status,
                file_path: this.file_path,
                designer: this.designer,
                amazon_link: this.amazon_link,
                notes: this.notes,
                slug: this.generateUUID()
            })
            .then(docRef => {
                console.log('Author added: ', docRef.id)
                this.$router.push('/')
            })
            .catch(error => {
                console.error('Error adding author: ', error)
            })
        },

        generateUUID() {
            let d = new Date().getTime()
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = (d + Math.random() * 16) % 16 | 0
                d = Math.floor(d / 16)
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
            })
            return uuid
        }
    }
}
</script>