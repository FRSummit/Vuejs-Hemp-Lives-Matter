<template>
  <div class="footer">
    <!-- Footer details -->
    <div class="footer-details-section">
      <!-- icon-image-section -->
      <div class="icon-image-section">
        <div class="parent-image">
          <img src="../../assets/images/HempWorx_Affiliate_Logo_Green-Black.png" alt />
        </div>
        <div class="child-image">
          <img src="../../assets/images/MyDailyChoice_Affiliate_Logo_Blue-Black-1024x550.png" alt />
          <img
            src="../../assets/images/V2_High-Life-Travel_Affiliate_Logo_Horizontal_Black.png"
            alt
          />
        </div>
      </div>

      <!-- join-movement-section -->
      <div class="join-movement-section">
        <div class="movement-img">
          <img src="../../assets/images/valuePackHempworxDirector.png" alt />
        </div>
        <div class="movement-text">
          <p>Join The CBD Movement</p>
        </div>
      </div>

      <!-- link section -->
      <div class="link-section">

        <!-- quick links -->
        <div class="quick-links">
          <h5 class="quick-links-title">Quick Links</h5>
          <ul class="elementor-icon-list-items">
            <li class="elementor-icon-list-item">
              <a href="https://hemplivesmatter.com/about/" target="_blank">
                <span class="elementor-icon-list-text">Know More about Us</span>
              </a>
            </li>
            <li class="elementor-icon-list-item">
              <a href="https://hemplivesmatter.com/products/" target="_blank">
                <span class="elementor-icon-list-text">Visit Store</span>
              </a>
            </li>
            <li class="elementor-icon-list-item">
              <a href="https://hemplivesmatter.com/contact/" target="_blank">
                <span class="elementor-icon-list-text">Let's Connect</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- site links -->
        <div class="site-links">
          <h5 class="site-links-title">Site Links</h5>
          <ul class="elementor-icon-list-items">
            <li class="elementor-icon-list-item">
              <a href="/" target="_blank">
                <span class="elementor-icon-list-text">Privacy Policy</span>
              </a>
            </li>
            <li class="elementor-icon-list-item">
              <a href="/" target="_blank">
                <span class="elementor-icon-list-text">Offers Coupons</span>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <!-- copyright-section -->
    <div class="copyright-section">
      <div class="copyright-wrapper">
        <span>Copyright © 2020 | Hemp Lives Matter</span>
      </div>
      <div class="social-links">
        <ul>
          <li class="elementor-icon-list-item">
            <a href="/" target="_blank">
              <span class="elementor-icon-list-icon">
                <i aria-hidden="true" class="fab fa-facebook-f"></i>
              </span>
            </a>
          </li>
          <li class="elementor-icon-list-item">
            <a href="/" target="_blank">
              <span class="elementor-icon-list-icon">
                <i aria-hidden="true" class="fab fa-twitter"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  /* position: absolute;
    bottom: 0; */
  background: #001524;
  color: #fff;
}

/* footer-details-section */
.footer-details-section {
  padding: 70px 50px;
}
/* icon-image-section */
.icon-image-section {
  width: 38%;
  display: inline-block;
    overflow: hidden;
}
.parent-image img {
  width: 80%;
  max-width: 380px;
}
.child-image {
  margin-top: 10px;
}
.child-image img {
  width: 80%;
  max-width: 150px;
  vertical-align: middle;
}
.child-image img:nth-child(2) {
  margin-left: 30px;
}

/* join-movement-section */
.join-movement-section {
  width: 30%;
  display: inline-block;
  text-align: center;
    overflow: hidden;
}
.movement-img {
}
.movement-img img {
  width: 180px;
}
.movement-text {
  font-size: 20px;
  font-weight: bold;
}

/* link-section */
.link-section {
  width: 30%;
  display: inline-block;
  text-align: center;
    overflow: hidden;
    vertical-align: top;
    font-size: 20px;
    font-weight: bold;
}
.link-section li {
  list-style-type: none;
    line-height: 2.5;
}
.link-section li a {
  cursor: pointer;
}
.link-section li a {
  color: #fff;
  text-decoration: none;
}
.quick-links-title, .site-links-title {
  font-family: 'Merriweather',serif;;
}
.quick-links {
  display: inline-block;
    margin-right: 20px;
}
.site-links {
  display: inline-block;
  vertical-align: top;
}


/* copyright-section */
.copyright-section {
  padding: 50px 20px;
  border-top: 1px solid #3d3d3d;
}
.copyright-wrapper {
  display: inline-block;
}
.copyright-wrapper span {
  font-size: 20px;
  font-weight: bold;
}
.social-links {
  display: inline-block;
  float: right;
}
.social-links ul li {
  list-style-type: none;
  display: inline-block;
  padding: 0 20px;
}
.elementor-icon-list-icon {
  color: #fff;
}
</style>