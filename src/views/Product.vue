<template>
  <div class="product">
    <h1>This is an product page</h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
  components: {
  },
  created() {

  },
  mounted() {
    this.$store.state.routeName = 'Product'
  }
}
</script>

<style scoped>

</style>