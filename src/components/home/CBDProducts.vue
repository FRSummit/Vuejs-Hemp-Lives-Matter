<template>
  <div class="cbd-products">
    <div class="cbd-card" v-for="(item, i) in items" :key="i">
      <h1>{{ item.title }}</h1>
      <p>{{ item.details }}</p>
      <div class="learn-more-btn">
        <a href="https://hemplivesmatter.com/products/" target="_blank">
          <span class="elementor-button-text">Shop Now</span>
          <i aria-hidden="true" class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="product-img-sec">
        <img :src="item.src" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CBD Products",
  data() {
    return {
      items: [
        {
          title: "CBD Tinctures",
          details: "Try the CBD oils everyone is talking about",
          src: require("../../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png")
        },
        {
          title: "CBD Topicals",
          details: "Potent formulas that gives you the comfort you need",
          src: require("../../assets/images/BathBox6PackOpen-orvmuxqlb24rqpu36c8auib7pfwxtoande4q422xhk.png")
        },
        {
          title: "CBD Coffee & Cream",
          details: "Delicious taste with the health benefits of hemp",
          src: require("../../assets/images/FullSpectrum_allC-orviq22utqbsu63aizhkx2swidq0nj968ia3oatr0o.png")
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.cbd-products {
    text-align: center;
    margin: 80px 0;
}
.cbd-card {
    display: inline-block;
    width: 25%;
    background: #fff;
    margin: 0 30px;
    border-radius: 10px;
    padding: 40px 52px 0;
}
.cbd-card h1 {
    font-size: 24px;
    margin-bottom: 20px;
}
.cbd-card p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
.learn-more-btn {
  padding: 16px 0;
}
.learn-more-btn a {
  background: #6bb038;
  padding: 15px 30px;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
.fa-arrow-right {
    margin-left: 10px;
}
.learn-more-btn a:hover {
  background-color: #5d9b30;
}
.product-img-sec img {
  max-width: 280px;
  max-height: 280px;
}
</style>