<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/navigation/header'
import Footer from './components/navigation/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
    font-family: sans-serif;
}
</style>