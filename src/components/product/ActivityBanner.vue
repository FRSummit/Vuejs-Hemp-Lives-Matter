<template>
  <div class="activity-banner">
    <div class="top-back-color"></div>
    <div class="activity-inner">
      <div class="activate-section">
        <img src="../../assets/images/HempWorx_Affiliate_Logo_Green-Black-1024x189.png" alt />
        <p class="txt-activate">Step One : Activate</p>
        <div class="learn-more-btn">
          <!-- <a href="https://www.hempworx.com/cwrhemp" target="_blank">
            <span class="elementor-button-text">Step One</span>
          </a> -->
          <button @click="activeNow" class="button" type="button" data-hover="Active Now" data-active="I'M ACTIVE">
            <span>Step One</span>
          </button>
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
  // name: "Activity Banner"
  methods: {
    activeNow() {
      window.open('https://www.hempworx.com/cwrhemp', '_blank')
    }
  }
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

/* hover effect */

.button {
  display: inline-block;
  position: relative;
  margin: 1em;
  padding: 15px 30px;
  font-weight: bold;
  /* border: 2px solid #000; */
  overflow: hidden;
  text-decoration: none;
  font-size: 16px;
  outline: none;
  color: #fff;
  background: #ff1700;
  font-family: "raleway", sans-serif;
  border-radius: 60px;
}

.button span {
  -webkit-transition: 0.6s;
  -moz-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.button:before,
.button:after {
  content: "";
  position: absolute;
  top: 0.67em;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  -webkit-transition: 0.4s, opacity 0.6s;
  -moz-transition: 0.4s, opacity 0.6s;
  -o-transition: 0.4s, opacity 0.6s;
  transition: 0.4s, opacity 0.6s;
}

/* :before */

.button:before {
  content: attr(data-hover);
  -webkit-transform: translate(-150%, 0);
  -moz-transform: translate(-150%, 0);
  -ms-transform: translate(-150%, 0);
  -o-transform: translate(-150%, 0);
  transform: translate(-150%, 0);
}

/* :after */

.button:after {
  content: attr(data-active);
  -webkit-transform: translate(150%, 0);
  -moz-transform: translate(150%, 0);
  -ms-transform: translate(150%, 0);
  -o-transform: translate(150%, 0);
  transform: translate(150%, 0);
}

/* Span on :hover and :active */

.button:hover span,
.button:active span {
  opacity: 0;
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  -ms-transform: scale(0.3);
  -o-transform: scale(0.3);
  transform: scale(0.3);
}

/*  
    We show :before pseudo-element on :hover 
    and :after pseudo-element on :active 
*/

.button:hover:before,
.button:active:after {
  opacity: 1;
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
  -webkit-transition-delay: 0.4s;
  -moz-transition-delay: 0.4s;
  -o-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

/* 
  We hide :before pseudo-element on :active
*/

.button:active:before {
  -webkit-transform: translate(-150%, 0);
  -moz-transform: translate(-150%, 0);
  -ms-transform: translate(-150%, 0);
  -o-transform: translate(-150%, 0);
  transform: translate(-150%, 0);
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}

@media screen and (max-width: 1050px) {
}

@media screen and (max-width: 768px) {
  .activity-inner .activate-section {
    display: block;
    width: 100%;
  }
  .activity-inner .keyboard-img-sec {
    display: block;
    width: 100%;
  }
}

@media screen and (max-width: 491px) {
}
</style>