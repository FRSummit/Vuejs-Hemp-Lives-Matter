<template>
  <div class="blog">
    <h1>This is an blog page</h1>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  components: {
  },
  created() {

  },
  mounted() {
    this.$store.state.routeName = 'Blog'
  }
    
}
</script>

<style scoped>

</style>
