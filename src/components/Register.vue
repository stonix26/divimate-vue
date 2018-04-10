<template>
    <div class="row justify-content-md-center justify-content-sm-center">
        <div class="card bg-light mb-3">
            <div class="card-header">
                <img src="./../assets/DNWC-logo-1.png" alt="logo" class="logo-img" >
                <span class="register-desc">Please enter your user information.</span>
            </div>
            <div class="card-body">
                <form action="index.html">
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" v-model="email" class="form-control" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" class="form-control" placeholder="Password">
                    </div>
                    <button type="submit" v-on:click="register" class="btn btn-dark btn-block register-btn">Register <i class="fa fa-user-plus"></i></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'register',
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        register: function(event) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        //   console.log(user);
                        alert(`Account created for ${user.email}`);
                        this.$router.go({ path: this.$router.path });
                    },
                    err => {
                        alert(err.message);
                    }
                );
            event.preventDefault()
        }
    }
}
</script>


<style scoped>
    .row {
        padding-top: 6em;
    }
    .card {
        min-width: 20em;
    }
    .card-header {
        display: flex;
        align-items: center;
        flex-flow: column;
    }
    .logo-img {
        width: 126px;
        height: 80px;
    }
    .register-desc {
        font-size: 14px;
    }
    .register-btn {
        margin-top: 2.2em;
    }
</style>
