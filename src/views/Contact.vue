<template>
  <div class="contact">
    <h1>This is an contact page</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {
  },
  created() {

  },
  mounted() {
    this.$store.state.routeName = 'Contact'
  }
}
</script>

<style scoped>

</style>
