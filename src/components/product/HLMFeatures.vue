<template>
  <div class="hlm-feature">
    <p class="title">H.L.M. FEATURED</p>
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
  name: "HLM Feature",
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
        }
      ]
    };
  }
};
</script>

<style scoped>
.hlm-feature {
  text-align: center;
}
.title {
  font-family: "Montserrat", Sans-serif;
  font-size: 36px;
  font-weight: 800;
  padding: 20px 0;
}
.hlm-feature {
  background-color: transparent;
  background-image: radial-gradient(
    at center center,
    rgba(247, 255, 3, 0.77) 0%,
    #f2be29 100%
  );
  min-height: 450px;
}
.product-section {
  width: 22%;
  display: inline-block;
  margin: 0 60px;
}
.product-img-sec {
  width: 100%;
}
.product-img-sec img {
  max-width: 280px;
  max-height: 280px;
  width: 75%;
}
.product-txt-btn {
  width: 100%;
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
    background: #ff1700;
    /* padding: 15px 30px; */
    border-radius: 60px;
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
  background-color: #ff1700;
}
</style>