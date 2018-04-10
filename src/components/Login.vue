<template>
    <div class="row justify-content-md-center justify-content-sm-center">
        <div class="card bg-light mb-3">
            <div class="card-header">
                <img src="./../assets/DNWC-logo-1.png" alt="logo" class="logo-img" >
                <span class="login-desc">Please enter your user information.</span>
            </div>
            <div class="card-body">
                <form action="index.html">
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" id="email" v-model="email" class="form-control" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="password" v-model="password" class="form-control" placeholder="Password">
                    </div>
                    <button type="submit" v-on:click="login" class="btn btn-dark btn-block signin-btn">Login <i class="fa fa-sign-in"></i></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login: function(e) {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                user => {
                    alert(`You are logged in as ${user.email}`);
                    this.$router.go({ path: this.$router.path });
                },
                err => {
                    alert(err.message);
                }
            );
        e.preventDefault();
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
    .login-desc {
        font-size: 14px;
    }
    .signin-btn {
        margin-top: 2.2em;
    }
</style>
