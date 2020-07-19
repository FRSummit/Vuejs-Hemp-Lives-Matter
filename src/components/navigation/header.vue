<template>
  <div class="header">
    <div class="title-section">
      <router-link class="title" to="/">Hemp Lives Matter</router-link>
    </div>
    <div class="menu-section">
      <ul>
        <li>
          <router-link to="/" class="router-link home">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="router-link about">About</router-link>
        </li>
        <li>
          <router-link to="/product" class="router-link product">Product</router-link>
        </li>
        <li>
          <router-link to="/blog" class="router-link blog">Blog</router-link>
        </li>
        <li>
          <router-link to="/contact" class="router-link contact">Contact</router-link>
        </li>
      </ul>
      <ul v-if="userIsAuthenticated" class="auth-sec">
        <li>
          <router-link to="/admin/registration" class="router-link">New User Signup</router-link>
        </li>
        <li @click="logout">
          <router-link to="/" class="router-link">Logout</router-link>
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
      userIsAuthenticated: false,
      componentName: null
    };
  },
  created() {
    const usrAuth = localStorage.getItem("admin_info_hlm");
    if (usrAuth) {
      this.userIsAuthenticated = JSON.parse(usrAuth).auth_hlm;
    }
  },
  methods: {
      logout() {
        localStorage.removeItem('admin_info_hlm')
        window.location.reload()
      }
  }
};
</script>

<style scoped>
.header {
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
  font-size: 30px;
  font-weight: bold;
}
.menu-section {
  display: inline-block;
  float: right;
}
.menu-section ul {
  display: inline-block;
}
.menu-section ul.auth-sec li {
  padding: 0px 10px;
}
.menu-section ul.auth-sec a {
  font-size: 16px !important;
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
.menu-section ul li .router-link.active {
  color: #8bc34a;
}
</style>