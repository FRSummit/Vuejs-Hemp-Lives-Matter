<template>
  <div class="about">
    <div class="title">
      <h1>About Us</h1>
    </div>

    <!-- Top -->
    <div class="section-one">
      <div class="description-section">
        <div class="desc-inner-title">
          <h2 class="desc-title">We Are A Brand You Can Trust.</h2>
        </div>
        <div class="desc-inner-desc">
          <p class="desc-details">
            <span class="desc-details-t">T</span>he HempWorx difference is clear. Our products are made from industrial hemp plants grown on American farms. Cannabidiol (CBD) is just one of over 85 cannabinoids that are identified in the (hemp) cannabis plant. Our oil is C02 extracted resulting in a solvent free, pure and potent formula. HempWorx uses minimal ingredients and implements third party testing on each batch to ensure superior quality control.
            <br />
            <br />HempWorx products contain CBD and other cannabinoids which bind to the Endocannabinoid System (ECS), an extension of our Central Nervous System, receptors leading to a positive impact on health and overall well-being.
            <br />
            <br />Join hundreds of thousands of customers around the world who’ve experienced the benefits of HempWorx products. We are so confident that our customers will love our products, we give everyone a 60-day money back guarantee. Try HempWorx today risk-free!
          </p>
        </div>
      </div>
      <div class="img-section">
        <img src="../assets/images/woman-girl-morning-reflection-4046314-1024x683.jpg" alt />
      </div>
    </div>

    <!-- Middle banner -->
    <div class="section-two">
      <div class="section-two-inner">
        <div class="speaker-section">
          <h3 class="speaker-text">Numbers Speak For Themselves!</h3>
        </div>
        <div class="customer-section">
          <div class="counter">
            <div class="counter-number">
              <span>1,000,000</span>
              <span class="number-suffix">+</span>
            </div>
            <div
              class="elementor-counter-title"
            >Customers With My Daily Choice &amp; HempWorx Products</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carosel & Certificate -->
    <div class="section-three">
      <div class="img-section">
        <div class="img-inner">
          <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
        </div>
        <div class="star-icon">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="s3-text-section">
          <p
            class="s3-text"
          >"After trying other CBD companies, and not being satisfied, I was hesitant to give HempWorx a try. But with their 60-day money back guarantee, I felt it was risk free. I was so excited when the product was working more than I expected! A quality CBD product is so important especially when you are giving it to loved ones! HempWorx changed my family's quality of life and gave us peace of mind! HempWorx, a quality product, affordable and sourced from the USA!"</p>
          <span class="s3-writer">Ceally S., Missouri</span>
        </div>
      </div>

      <!-- Certificate section -->
      <div class="desc-section">
        <div class="certificate-section">
          <div class="icon">
            <img src="../assets/images/US-Hemp-Authority-Logo_white.png" alt />
          </div>
          <div class="details">
            <p class="certificate">Certified Products</p>
            <p
              class="certificate-view"
            >Click the seal to view our awarded Hemp Authority Certification</p>
          </div>
        </div>
        <div class="promice-section">
          <p>We Deal With Various Quality Organic Products!</p>
        </div>
        <div class="product-section">
          <div class="product-list">
            <ul>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>Organic Methods</span>
              </li>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>Gluten Free</span>
              </li>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>Vegan</span>
              </li>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>Cruelty Free</span>
              </li>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>Non GMO</span>
              </li>
            </ul>
            <ul>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>Arabica Beans</span>
              </li>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>Chaga Mushrooms</span>
              </li>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>No Artificial Sweeteners</span>
              </li>
              <li>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <span>No Artificial Coloring</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn-section">
          <a href="https://hemplivesmatter.com/products/" target="_blank">
            <i aria-hidden="true" class="fas fa-shopping-cart"></i>
            <span class="elementor-button-text">Start Shopping</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {
      items: [
        {
          src: require("../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
        },
        {
          src: require("../assets/images/BathBox6PackOpen-orvmuxqlb24rqpu36c8auib7pfwxtoande4q422xhk.png"),
        },
        {
          src: require("../assets/images/FullSpectrum_allC-orviq22utqbsu63aizhkx2swidq0nj968ia3oatr0o.png"),
        },
        {
          src: require("../assets/images/valuePackHempworxDirector-orkq5bh2oasr23ijxry6ul5ax4fq5nxhyoeqgy2hoo.png"),
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.$store.state.routeName = "About";
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
  font-weight: bold;
}
.desc-title {
  font-size: 34px;
  margin-bottom: 20px;
}
.desc-details {
  font-size: 16px;
  font-weight: bold;
}
.desc-details-t {
  font-size: 30px;
}
.section-one {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 80px 60px;
}
.section-one .description-section,
.section-one .img-section,
.section-three .desc-section,
.section-three .img-section {
  display: inline-block;
  width: 48%;
  vertical-align: top;
}
.section-one .img-section {
  margin-left: 40px;
}
.section-one .img-section img {
  width: 100%;
}

/* section-two */
.section-two {
  width: 100%;
  background: #fff;
  padding: 80px 0;
}
.section-two-inner {
  background: #001524;
  color: #fff;
  padding: 40px 0;
}
.section-two-inner .speaker-section,
.section-two-inner .customer-section {
  display: inline-block;
  width: 48%;
  text-align: center;
  vertical-align: middle;
}
.speaker-text {
  font-size: 24px;
}
.counter-number {
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 10px;
}
.elementor-counter-title {
  font-size: 20px;
  color: #b9bdbe;
}

/* section three */
.section-three {
  text-align: center;
  padding: 100px 0;
  background: #fff;
}
.section-three .img-section {
  text-align: center;
}
.section-three .desc-section {
  margin-left: 30px;
}
.section-three .img-inner {
  width: 70%;
  margin: 0 auto;
}
.section-three .star-icon {
  color: #f0ad4e;
  margin: 40px 0;
}
.s3-text-section {
  width: 70%;
  margin: 0 auto;
}
.section-three .s3-text {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
}
.section-three .s3-writer {
  font-size: 20px;
  font-weight: bold;
  line-height: 3;
}

/*  */
.certificate-section {
  width: 90%;
  background: #ff7501;
  text-align: left;
}
.certificate-section .icon {
  width: 120px;
  display: inline-block;
}
.certificate-section .icon img {
  width: 120px;
}
.certificate-section .details {
  width: 65%;
  display: inline-block;
  vertical-align: top;
  color: #fff;
  padding: 10px 0px;
  margin-left: 30px;
}
.certificate-section .certificate {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
}
.certificate-section .certificate-view {
  font-size: 20px;
  text-align: left;
  margin-top: 20px;
}
.desc-section .promice-section p {
  font-size: 34px;
  text-align: left;
  font-family: Merriweather, serif;
  font-weight: bold;
  margin: 20px 0;
}
.desc-section ul {
  display: inline-block;
  width: 50%;
  vertical-align: top;
  list-style-type: none;
  text-align: left;
  line-height: 2;
  font-size: 20px;
  font-weight: bold;
}
.desc-section ul li .fa-check-circle {
  color: #8bc34a;
}
.desc-section ul li span {
  margin-left: 10px;
}
.desc-section .btn-section {
  margin: 30px 0;
  text-align: left;
}
.desc-section .btn-section a {
  background: #8bc34a;
  padding: 15px 40px;
  border-radius: 30px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}
.desc-section .btn-section a span {
  margin-left: 15px;
}

@media screen and (max-width: 1050px) {
  .section-one .description-section,
  .section-one .img-section,
  .section-three .desc-section,
  .section-three .img-section {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  .desc-section .btn-section {
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .section-one {
    padding: 10px;
  }
  .section-two-inner .speaker-section[data-v-039c5b43],
  .section-two-inner .customer-section[data-v-039c5b43] {
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .section-three .img-inner,
  .s3-text-section {
    width: 100%;
  }
}

@media screen and (max-width: 550px) {
  .certificate-section {
    width: 100%;
  }
  .certificate-section .icon {
    width: 100%;
    text-align: center;
    margin: 0 auto;
}
  .certificate-section .details {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .certificate-section .certificate,
  .certificate-section .certificate-view {
    text-align: center;
  }
  .desc-title {
    font-size: 26px;
  }
  .speaker-text {
    font-size: 20px;
  }
  .counter-number {
    font-size: 30px;
  }
  .elementor-counter-title {
    font-size: 16px;
  }
  .desc-section .promice-section p {
    font-size: 22px;
  }
  .desc-section ul {
    font-size: 18px;
  }
}

@media screen and (max-width: 491px) {
}
</style>
