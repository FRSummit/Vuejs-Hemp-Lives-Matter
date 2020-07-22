<template>
  <div class="trending-product">
    <p class="title">Trending Products</p>
    <div class="logo-leaf">
      <img src="../../assets/images/logo-leaf-new.png" alt />
    </div>
    <div class="product-section" v-for="(item, i) in items" :key="i">
      <div class="product-img-sec">
        <img :src="item.src" alt />
      </div>
      <div class="product-txt-btn">
        <p>{{ item.details }}</p>
        <div class="learn-more-btn">
          <a href="https://hemplivesmatter.com/products/" target="_blank">
            <span class="elementor-button-text">Learn More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "Trending Products",
  data() {
    return {
      items: [
        {
          src: require("../../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          details: "Name of the image"
        },
        {
          src: require("../../assets/images/BathBox6PackOpen-orvmuxqlb24rqpu36c8auib7pfwxtoande4q422xhk.png"),
          details: "Name of the image"
        },
        {
          src: require("../../assets/images/FullSpectrum_allC-orviq22utqbsu63aizhkx2swidq0nj968ia3oatr0o.png"),
          details: "Name of the image"
        },
        {
          src: require("../../assets/images/valuePackHempworxDirector-orkq5bh2oasr23ijxry6ul5ax4fq5nxhyoeqgy2hoo.png"),
          details: "Name of the image"
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
.trending-product {
  text-align: center;
  padding: 100px 0 20px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #ffffff 0%, #f8f6f3 100%);
}
.title {
  font-size: 34px;
  font-weight: bold;
}
.logo-leaf {
  margin: 30px 0 0;
}
.product-section {
  width: 22%;
  display: inline-block;
  margin: 50px 20px;
}
.product-img-sec {
}
.product-img-sec img {
  max-width: 280px;
  max-height: 280px;
}
.product-txt-btn {
}
.product-txt-btn p {
  font-family: "Lato", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 16px 0 20px;
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
.learn-more-btn a:hover {
  background-color: #5d9b30;
}
</style>