<template>
  <div class="header">
    <div class="title-section">
      <router-link class="title" to="/">Hemp Lives Matter</router-link>
    </div>
    <div class="menu-section">
      <ul>
        <li>
          <router-link to="/" class="router-link">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="router-link">About</router-link>
        </li>
        <li>
          <router-link to="/product" class="router-link">Product</router-link>
        </li>
        <li>
          <router-link to="/blog" class="router-link">Blog</router-link>
        </li>
        <li>
          <router-link to="/contact" class="router-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      componentName: null
    };
  },
  created() {

  },
  mounted() {
      console.log(this.$route.name)
  },
  updated() {
      console.log(this.$route.name)
  }
};
</script>

<style scoped>
.header {
  /* position: absolute;
    top: 0; */
  height: 70px;
  width: 100%;
  padding: 20px 40px;
  border-bottom: 1px solid #dedede;
}
.title-section {
  display: inline-block;
}
.title {
  color: #000;
  text-decoration: none;
  font-size: 26px;
  font-weight: bold;
}
.menu-section {
  display: inline-block;
  float: right;
}
.menu-section ul {
}
.menu-section ul li {
  list-style-type: none;
  display: inline-block;
  padding: 0px 20px;
}
.menu-section ul li .router-link {
  color: #000;
  font-size: 26px;
  text-decoration: none;
  font-weight: bold;
}
.menu-section ul li .router-link:hover {
  color: #8bc34a;
}
</style>