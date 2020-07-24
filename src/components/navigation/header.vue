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
          <router-link to="/admin/registration" class="router-link">Signup</router-link>
        </li>
        <li @click="logout">
          <router-link to="/" class="router-link">Logout</router-link>
        </li>
      </ul>
    </div>

    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Hemp Lives Matter</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
    </nav>-->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userIsAuthenticated: false,
      componentName: null,
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
      localStorage.removeItem("admin_info_hlm");
      window.location.reload();
    },
  },
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
  font-size: 22px;
  text-decoration: none;
  font-weight: bold;
}
.menu-section ul li .router-link:hover {
  color: #8bc34a;
}
.menu-section ul li .router-link.active {
  color: #8bc34a;
}

@media screen and (max-width: 1050px) {
  .header {
    padding: 10px 20px;
    height: auto;
  }
  .title {
    font-size: 22px;
  }
  .menu-section ul li {
    padding: 0 10px;
  }
  .menu-section ul li .router-link {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: 10px 20px;
  }
  .title-section {
    display: block;
    width: 100%;
  }
  .menu-section {
    display: block;
    width: 100%;
    float: none;
  }
  .menu-section ul li {
    /* display: block; */
  }
  .menu-section ul li:nth-child(1) {
    padding-left: 0;
  }
}

@media screen and (max-width: 491px) {
  .menu-section ul {
    margin-bottom: 0;
  }
  .menu-section ul li .router-link {
    font-size: 16px;
  }
}
</style>