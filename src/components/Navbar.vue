<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal"><router-link class="navbar-brand text-white" to="/"><i class="fa fa-cloud"></i> Divimate v3</router-link></h5>
        <nav v-if="isLoggedIn" class="my-2 my-md-0 mr-md-3">
            <router-link class="nav-link text-white" to="/">Dashboard</router-link>
        </nav>
        <nav v-if="!isLoggedIn" class="my-2 my-md-0 mr-md-3">
            <router-link class="nav-link text-white" to="/register">Register</router-link>
        </nav>
        <template v-if="!isLoggedIn">
            <router-link class="btn btn-outline-light" to="/login">Login <i class="fa fa-sign-in"></i></router-link>
        </template>
        <button v-if="isLoggedIn" v-on:click="logout" class="btn btn-outline-light">Logout <i class="fa fa-sign-out"></i></button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'navbar',
    data () {
        return {
            isLoggedIn: false,
            currentUser: false
        }
    },
    created() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
    methods: {
        logout: function() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.go({ path: this.$router.path });
                }
            );
        }
    }
}
</script>