<template>
  <div class="customers-reviews">
    <p class="title">Customers Reviews</p>
    <div class="review-card-one">
      <div class="star-icon">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
      <div class="review-message">
        <p>"Like many woman, I battled dark moments in my life. For years nothing worked for me, so I began my research on CBD. This research led me to HempWorx 750 Natural CBD oil. For the first time in my life I felt alive, happy, and free from the pressures of life!"</p>
      </div>
      <div class="profile">
        <img
          src="../../assets/images/valuePackHempworxDirector-orkq5bh2oasr23ijxry6ul5ax4fq5nxhyoeqgy2hoo.png"
          alt
        />
        <p>Candace D., Pennsylvania</p>
      </div>
    </div>

    <div class="membership">
      <div class="membership-inner">
        <h1>Deal Of The Day $10 Off With Membership!</h1>
        <p>Become a member today and save.</p>
        <div class="learn-more-btn">
          <a href="https://hemplivesmatter.com/products/" target="_blank">
            <span class="elementor-button-text">Learn More</span>
          </a>
        </div>
      </div>
    </div>

    <div class="review-card-two">
      <div class="star-icon">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
      <div class="review-message">
        <p>"I'm someone who rarely gets sick which I attribute to supplementation, healthy food, and lifestyle choices. HempWorx CBD Oil is one of the products I use daily to maintain overall wellness. HempWorx CBD Oil allows me to continue living my best life. I can't imagine a day without it. Thank you HempWorx!"</p>
      </div>
      <div class="profile">
        <img
          src="../../assets/images/valuePackHempworxDirector-orkq5bh2oasr23ijxry6ul5ax4fq5nxhyoeqgy2hoo.png"
          alt
        />
        <p>David G., Canada</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customers Reviews",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.customers-reviews {
  text-align: center;
  padding: 0px 0 50px;
  color: #000;
}
.title {
  font-size: 34px;
  font-weight: bold;
}
.review-card-one,
.review-card-two {
  width: 25%;
  background: #fff;
  border-radius: 10px;
  padding: 30px 50px;
  display: inline-block;
  margin: 20px;
  height: 450px;
}
.membership {
  display: inline-block;
  width: 26%;
  background: #fff;
  height: 550px;
  border-radius: 10px;
  margin: 20px;
  vertical-align: bottom;
  background-image: url("../../assets/images/productsHempTreats.png");
  background-size: cover;
  background-position: -94px 0px;
  box-shadow: 0px 0px 10px 0px rgba(40, 40, 40, 0.38);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}
.membership-inner {
  background-color: rgba(0, 21, 36, 0.68);
  height: 100%;
  width: 100%;
  padding: 80px 50px;
  border-radius: 10px;
}
.review-message p {
  font-size: 18px;
  font-weight: bold;
}
.star-icon {
  color: #f0ad4e;
  margin: 20px 0;
}
.profile {
  margin-top: 20px;
}
.profile img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.profile p {
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
  width: 65%;
  vertical-align: middle;
}
.learn-more-btn {
  padding: 16px 0;
  margin-top: 100px;
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
.membership h1 {
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}
.membership p {
  font-size: 22px;
  font-weight: bold;
  color: #c4ccc6;
}
</style>