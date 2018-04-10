<template>
  <div id="app">
    <Navbar />
    <div class="container content-container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  min-height: 100vh;
  position: relative;
  margin: 0;
}
#app {
  font-family: 'Raleway', sans-serif;
}
.content-container {
  padding-bottom: 6em;
}
.form-control:focus {
  border-color: #000000;
  box-shadow: none;
}
</style>
