<template>
  <div id="app">
    <Navbar />
      <div class="container content-container">
        <transition name="router-anim">
            <router-view/>
        </transition>
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
  padding-top: 6em;
  padding-bottom: 6em;
}
.form-control:focus {
  border-color: #000000;
  box-shadow: none;
}
.router-anim-enter-active {
  animation: coming .5s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .5s;
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
