<template>
  <div class="footer">
      <!-- Footer details -->
      <div class="footer-details-section">
          <div class="icon-image-section">
              <div class="parent-image">
                  <img src="../../assets/images/HempWorx_Affiliate_Logo_Green-Black.png" alt="">
              </div>
              <div class="child-image">
                  <img src="../../assets/images/MyDailyChoice_Affiliate_Logo_Blue-Black-1024x550.png" alt="">
                  <img src="../../assets/images/V2_High-Life-Travel_Affiliate_Logo_Horizontal_Black.png" alt="">
              </div>
          </div>
          <div class="join-movement-section"></div>
          <div class="link-section"></div>
      </div>

      <!-- copyright-section -->
    <div class="copyright-section">
      <div class="copyright-wrapper">
        <span>Copyright © 2020 | Hemp Lives Matter</span>
      </div>
      <div class="social-links">
        <ul>
          <li class="elementor-icon-list-item">
            <router-link to="/">
              <span class="elementor-icon-list-icon">
                <i aria-hidden="true" class="fab fa-facebook-f"></i>
              </span>
            </router-link>
          </li>
          <li class="elementor-icon-list-item">
            <router-link to="/">
              <span class="elementor-icon-list-icon">
                <i aria-hidden="true" class="fab fa-twitter"></i>
              </span>
            </router-link>
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
    color: #FFF;
}

/* footer-details-section */
.footer-details-section {
    background: #002f50;
    padding: 70px 50px;
}
/* icon-image-section */
.icon-image-section {
    width: 45%;
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

/* link-section */

/* copyright-section */
.copyright-section {
    padding: 50px 20px;
    border-top: 1px solid #3D3D3D;
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
    color: #FFF;
}
</style>