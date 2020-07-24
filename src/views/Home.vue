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
    <div class="section-two-banner">
      <div class="shipping-section">
        <div class="img-sec">
          <i aria-hidden="true" class="fas fa-truck"></i>
        </div>
        <div class="txt-sec">
          <h4><a href="/">Free Shipping</a></h4>
          <p>Above $5 Only</p>
        </div>
      </div>
      <div class="certify-test-section">
        <div class="img-sec">
          <i aria-hidden="true" class="far fa-address-book"></i>
        </div>
        <div class="txt-sec">
          <h4><a href="/">Certified &amp; Tested</a></h4>
          <p>100% Guarantee</p>
        </div>
      </div>
      <div class="shaving-section">
        <div class="img-sec">
        <i aria-hidden="true" class="far fa-money-bill-alt"></i>
          <img src="" alt="">
        </div>
        <div class="txt-sec">
          <h4><a href="/">Huge Savings</a></h4>
          <p>At Lowest Price</p>
        </div>
      </div>
      <div class="organic-vegan-section">
        <div class="img-sec">
          <i aria-hidden="true" class="fas fa-recycle"></i>
        </div>
        <div class="txt-sec">
          <h4><a href="/">Organic &amp; Vegan</a></h4>
          <p>A healthy choice</p>
        </div>
      </div>
    </div>

    <!-- Section 3 - Best Selling Products -->
    <BestSellingProducts />
    <CBDProducts />

    <!-- Section 4 - Banner (Get A Free Sample Today!) -->
    <div class="section-four-free-sample">
      <div class="txt-sec">
        <p>Get A Free Sample Today!</p>
      </div>
      <div class="btn-sec">
          <a href="https://www.hempworxsamples.com/cwrhemp" target="_blank">
            <i aria-hidden="true" class="fas fa-shopping-cart"></i>
            <span class="elementor-button-text">Start Shopping</span>
          </a>
      </div>
    </div>
      <div class="trial-sec">
        <p>Try It For Free. No Membership Needed.</p>
      </div>

    <!-- Section 5 - Trending Products -->
    <TrendingProducts />

    <!-- Section 6 - Customers Reviews -->
    <CustomersReviews />

    <!-- Section 7 - Company logo -->
    <div class="company-logo-section">
      <p>Featured Brands:</p>
      <img src="../assets/images/HempWorx_Affiliate_Logo_Green-Black-1024x189.png" alt="">
      <img src="../assets/images/Mantra_Affiliate_Logo_Color.png" alt="">
      <img src="../assets/images/MyDailyChoice_Affiliate_Logo_Blue-Black-1024x550.png" alt="">
      <img src="../assets/images/V2_High-Life-Travel_Affiliate_Logo_Horizontal_Black.png" alt="">
    </div>
  </div>
</template>

<script>
import BestSellingProducts from '../components/home/BestSellingProducts'
import CBDProducts from '../components/home/CBDProducts'
import TrendingProducts from '../components/home/TrendingProducts'
import CustomersReviews from '../components/home/CustomersReviews'

export default {
  name: 'Home',
  components: {
    BestSellingProducts,
    CBDProducts,
    TrendingProducts,
    CustomersReviews
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

/* section-one */
.section-one {
    width: 100%;
    text-align: center;
    color: #333333;
  /* font-family: 'Merriweather', serif; */
}
.section-one .img-sec, .section-one .shop-now-sec-sec {
    display: inline-block;
    width: 49%;
    overflow: hidden;
    vertical-align: top;
    padding: 20px 0;
}
.section-one .img-sec img {
    width: 100%;
}
.section-one .shop-now-sec-sec {
    margin-top: 80px;
}
.section-one .shop-now-sec-sec .text-sec {
  text-align: left;
}
.section-one .shop-now-sec-sec .text-sec .quality {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}
.section-one .shop-now-sec-sec .text-sec .join-cbd {
    font-size: 52px;
    font-weight: bold;
    width: 65%;
    margin-bottom: 20px;
}
.section-one .shop-now-sec-sec .text-sec .join-desc {
    font-size: 20px;
    font-weight: bold;
    width: 75%;
}
.section-one .shop-now-sec-sec .shop-now-btn{
    margin: 70px 0 0;
    text-align: left;
}
.section-one .shop-now-sec-sec .shop-now-btn a {
    background: #8BC34A;
    padding: 15px 30px;
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}
.section-one .shop-now-sec-sec .shop-now-btn a span {
  margin-left: 15px;
}

/* section-two-banner */
.section-two-banner {
    background: #001524;
    text-align: center;
    margin: 40px 0;
    padding: 50px 0;
}
.section-two-banner .shipping-section, .section-two-banner .certify-test-section,
.section-two-banner .shaving-section, .section-two-banner .organic-vegan-section {
    display: inline-block;
    width: 20%;
    background: #1C2F3C;
    margin: 0 20px;
    color: #fff;
    font-size: 20px;
    padding: 16px 0;
    border-radius: 4px;
    line-height: 1.8;
    min-height: 150px;
    vertical-align: middle;
}
.section-two-banner .img-sec {
  display: inline-block;
  width: 20%;
    vertical-align: top;
}
.section-two-banner .img-sec .fa-truck, .section-two-banner .img-sec .fa-address-book, .section-two-banner .img-sec .fa-money-bill-alt, .section-two-banner .img-sec .fa-recycle {
  font-size: 26px;
  color: #8BC34A;
}
.section-two-banner .txt-sec {
  display: inline-block;
  width: 75%;
    text-align: left;
}
.section-two-banner .txt-sec h4 a {
  text-decoration: none;
  color: #fff;
}
.section-two-banner .txt-sec p {
  font-weight: bold;
}

/* Section 4 - Free sample */
.section-four-free-sample {
    width: 100%;
    margin: 40px auto 0;
    padding: 60px 120px;
    background: #1C2F3C;
    color: #fff;
}
.section-four-free-sample .txt-sec, .section-four-free-sample .btn-sec {
  display: inline-block;
}
.section-four-free-sample .txt-sec {
  width: 68%;
  font-size: 34px;
}
.section-four-free-sample .btn-sec {
  width: 30%;
}
.section-four-free-sample .btn-sec{
    margin: 0 0;
    text-align: right;
}
.section-four-free-sample .btn-sec a {
    background: #8BC34A;
    padding: 15px 30px;
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}
.section-four-free-sample .btn-sec a span {
  margin-left: 15px;
}
.trial-sec {
    font-size: 24px;
    text-align: center;
    background: #F2F2F2;
    padding: 30px 0;
    font-weight: bold;
}
.company-logo-section {
    text-align: center;
    padding: 20px 0;
}
.company-logo-section p {
  display: inline-block;
    width: 20%;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    vertical-align: middle;
}
.company-logo-section img {
  display: inline-block;
    width: 20%;
    max-width: 133px;
    margin: 0 50px;
    vertical-align: middle;
}

@media screen and (max-width: 1050px) {
  .section-two-banner .shipping-section,
  .section-two-banner .certify-test-section, 
  .section-two-banner .shaving-section, 
  .section-two-banner .organic-vegan-section {
    display: inline-block;
    width: 40%;
    margin: 10px 20px;
    min-height: auto;
  }
}
@media screen and (max-width: 768px) {
  .section-one .img-sec, .section-one .shop-now-sec-sec {
    display: block;
    width: 100%;
    text-align: center;
    margin: 0;
  }
  .section-one .shop-now-sec-sec .text-sec {
    display: block;
    width: 100%;
    text-align: center;
  }
  .section-one .shop-now-sec-sec .text-sec .join-cbd {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 30px;
  }
  .section-one .shop-now-sec-sec .text-sec .join-desc {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  .section-one .shop-now-sec-sec .shop-now-btn {
    display: block;
    width: 100%;
    text-align: center;
  }
  /* shipping-section */
  .section-two-banner .shipping-section,
  .section-two-banner .certify-test-section, 
  .section-two-banner .shaving-section, 
  .section-two-banner .organic-vegan-section {
    display: block;
    width: auto;
    margin: 10px 20px;
  }

  /* section 4 - get a free  sample */
  .section-four-free-sample .txt-sec,
  .section-four-free-sample .btn-sec {
    width: 100%;
    text-align: center;
  }

  /* Company logo */
  .company-logo-section p {
    width: 100%;
    text-align: center;
  }
}
@media screen and (max-width: 491px) {
  .section-four-free-sample {
    padding: 40px 0;
  }
  .section-four-free-sample .txt-sec {
    font-size: 20px;
    overflow: hidden;
  }
}
</style>
