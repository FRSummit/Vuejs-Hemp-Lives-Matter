<template>
  <div class="activity-banner">
    <div class="top-back-color"></div>
    <div class="activity-inner">
      <div class="activate-section">
        <img src="../../assets/images/HempWorx_Affiliate_Logo_Green-Black-1024x189.png" alt />
        <p class="txt-activate">Step One : Activate</p>
        <div class="learn-more-btn">
          <a href="https://www.hempworx.com/cwrhemp" target="_blank">
            <span class="elementor-button-text">Step One</span>
          </a>
        </div>
        <p class="txt-shop-product">First Activate Then Return &amp; Shop Products Here</p>
      </div>
      <div class="keyboard-img-sec">
        <img src="../../assets/images/person-using-white-apple-keyboard-3740878-1024x509.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity Banner"
};
</script>

<style scoped>
.top-back-color {
  background-color: #e5f6e8;
  width: 100%;
  height: 70px;
}
.activity-inner {
  width: 100%;
  text-align: center;
  padding: 10px 0px;
}
.activity-inner .activate-section {
  display: inline-block;
  width: 49%;
  vertical-align: top;
}
.activity-inner .activate-section img {
  max-width: 270px;
}
.activity-inner .keyboard-img-sec {
  display: inline-block;
  width: 49%;
}
.keyboard-img-sec img {
  max-height: 270px;
  max-width: 550px;
}
.txt-activate {
  color: #26a53a;
  font-family: "Lato", Sans-serif;
  font-size: 32px;
  font-weight: 900;
  text-shadow: -2px 0px 0px #000000;
  margin: 10px 0;
}
.learn-more-btn {
  padding: 16px 0;
}
.learn-more-btn a {
  background: #ff1700;
  padding: 15px 30px;
  border-radius: 60px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
.learn-more-btn a:hover .learn-more-btn a span::after {
  background-color: #ff1700;
  content: "Activate Now!";
}
.txt-shop-product {
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
  font-family: "Lato", Sans-serif;
}
</style>