<template>
  <div class="home">

    <!-- Top section -->
    <div class="section-one">
      <div class="img-sec">
        <img src="../assets/images/valuePackHempworxDirector.png" alt="">
      </div>
      <div class="shop-now-sec-sec">
        <div class="text-sec">
          <p class="quality">Best Quality Products</p>
          <p class="join-cbd">Join The CBD Movement!</p>
          <p class="join-desc">Shown to provide profound benefits to the human body. HempWorx is at the forefront of the next revolution in American history</p>
        </div>
        <div class="shop-now-btn">
          <a href="https://hemplivesmatter.com/products/" target="_blank">
            <i aria-hidden="true" class="fas fa-shopping-cart"></i>
            <span class="elementor-button-text">Start Shopping</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Section 2 - Banner -->

    <!-- Section 3 - Best Selling Products -->

    <!-- Section 4 - Banner (Get A Free Sample Today!) -->

    <!-- Section 5 - Trending Products -->

    <!-- Section 6 - Customers Reviews -->

    <!-- Section 7 - Company logo -->
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

.shop-now-sec-sec .shop-now-btn{
    margin: 30px 0;
    text-align: left;
}
.shop-now-sec-sec .shop-now-btn a {
    background: #8BC34A;
    padding: 15px 30px;
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}
.shop-now-sec-sec .shop-now-btn a span {
  margin-left: 15px;
}
</style>
