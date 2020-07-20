<template>
  <div class="pet-lovers">
    <div class="product-section">
      <div class="product-img-sec">
        <img
          src="../../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"
          alt
        />
      </div>
      <div class="learn-more-btn">
        <a href="https://hemplivesmatter.com/products/" target="_blank">
          <span class="elementor-button-text">Learn More</span>
        </a>
      </div>
    </div>

    <div class="txt">
      <p class="title">PET LOVERS</p>
      <p class="status">
        Only The Best For
        <span>Cat Lovers</span>
      </p>
      <h2>
        <a href="https://www.hempworx.com/dogTreats" target="_blank">BUY NOW</a>
      </h2>
    </div>

    <div class="product-section">
      <div class="product-img-sec">
        <img
          src="../../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"
          alt
        />
      </div>
      <div class="learn-more-btn">
        <a href="https://hemplivesmatter.com/products/" target="_blank">
          <span class="elementor-button-text">Learn More</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pet Lovers"
};
</script>

<style scoped>
.pet-lovers {
  background-image: url("../../assets/images/background-bright-close-up-environment-413195.jpg");
  padding: 80px 0px;
  background-repeat: repeat-y;
  text-align: center;
}
.product-section,
.txt {
  width: 22%;
  display: inline-block;
  margin: 0 20px;
}
.txt {
  margin: 0 auto;
  width: 40%;
  vertical-align: top;
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
  text-align: center;
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
.txt .title {
  color: #feff00;
  font-family: "Lato", Sans-serif;
  font-size: 90px;
  font-weight: 700;
  text-shadow: 0px 0px 12px #000000;
}
.txt .status {
  color: #feff00;
  font-family: "Lato", Sans-serif;
  font-size: 22px;
  font-weight: 900;
  margin: 30px 0;
}
.txt .status span {
  font-size: 40px;
}
.txt h2 a {
  color: #feff00;
  font-family: "Lato", Sans-serif;
  font-size: 70px;
  font-weight: 400;
  text-decoration: underline;
  text-shadow: 0px 0px 10px #000000;
}
</style>