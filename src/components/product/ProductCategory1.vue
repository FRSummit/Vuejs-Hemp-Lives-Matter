<template>
  <div class="product">
    <div class="title-section">
      <p class="title">Products</p>
      <p class="sub-title">Remember to activate with each visit</p>
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
  name: "Product",
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
        },
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
  }
};
</script>

<style scoped>
.product {
  text-align: center;
  padding: 0px 0 0px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #ffffff 0%, #f8f6f3 100%);
}
.title-section {
  background-image: url("../../assets/images/green-leaf-1353938.jpg");
  background-position: 0px -350px;
  background-size: 100% auto;
  padding: 80px 0px;
}
.title {
  color: #26a53a;
  font-family: "Lato", Sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-shadow: -2px 0px 0px #000000;
  margin-bottom: 20px;
}
.sub-title {
  font-size: 22px;
  font-weight: bold;
  color: #ff7400;
  font-family: "Lato", Sans-serif;
}
.logo-leaf {
  margin: 30px 0 0;
}
.product-section {
  width: 22%;
  display: inline-block;
  margin: 20px;
}
.product-img-sec {
}
.product-img-sec img {
  max-width: 280px;
  max-height: 280px;
  width: 75%;
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
  /* padding: 15px 30px; */
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;

  width: 50%;
  display: block;
  max-height: 80px;
  padding: 12px 0;
  margin: 0 auto;
}
.learn-more-btn a:hover {
  background-color: #5d9b30;
}
</style>