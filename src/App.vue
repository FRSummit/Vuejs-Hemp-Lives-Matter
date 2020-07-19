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
    /* font-family: sans-serif; */
    font-family: serif;
    background: #F8F6F3;
}
.v-application--wrap {
    min-height: auto !important;
    padding: 50px 0;
}
</style>