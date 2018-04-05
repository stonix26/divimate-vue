<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal"><router-link class="navbar-brand text-white" to="/"><i class="fa fa-cloud"></i> Divimate v3</router-link></h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link class="nav-link text-white" to="/">Dashboard</router-link>
        </nav>
        <router-link class="btn btn-outline-light" to="/">Login <i class="fa fa-sign-in"></i></router-link>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  }
}
</script>