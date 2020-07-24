<template>
  <div class="blog">
    <h1 class="title">Freshly Sliced Blog Posts</h1>
    <BlogIndex />
  </div>
</template>

<script>
import BlogIndex from '../components/blog/BlogIndex'

export default {
  name: 'Blog',
  components: {
    BlogIndex
  },
  created() {

  },
  mounted() {
    this.$store.state.routeName = 'Blog'
  }
    
}
</script>

<style scoped>
.blog {
  text-align: center;
}
.title {
    font-size: 3.125em;
    text-align: center;
    font-weight: 300;
    margin: 30px;
}

@media screen and (max-width: 1050px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 491px) {
}
</style>
