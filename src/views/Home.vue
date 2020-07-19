<template>
  <div class="home">
    <div>This is home page</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  created() {

  },
  mounted() {
    this.$store.state.routeName = 'Home'
  }
}
</script>

<style scoped>
.home {
}
</style>
