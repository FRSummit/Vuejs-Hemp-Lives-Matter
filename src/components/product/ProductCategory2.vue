<template>
  <div class="product">
    <div class="product-section" v-for="(item, i) in productList" :key="i">
      <div class="remove-product-section" @click="removeItem(i)" v-if="userIsAuthenticated">
        <img src="../../assets/images/trush.png" alt="trush" />
      </div>
      <div class="product-img-sec">
        <img :src="item.img1_url" alt />
      </div>
      <div class="product-txt-btn">
        <p>{{ item.title }}</p>
        <div class="learn-more-btn">
          <a :href="item.productUrl" target="_blank">
            <span class="elementor-button-text">Learn More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Product",
  data() {
    return {
      productList: []
    };
  },
  created() {
    // load products
    firebase
      .database()
      .ref("hlm_product_list_2")
      .on("value", snapshot => {
        this.productList = snapshot.val();
      });
  },
  methods: {
    removeItem(key) {
      firebase
        .database()
        .ref("hlm_product_list_2/" + key)
        .remove();
    }
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
.logo-leaf {
  margin: 30px 0 0;
}
.product-section {
  width: 22%;
  display: inline-block;
  margin: 20px;
  position: relative;
}
.remove-product-section {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.remove-product-section img {
  width: 20px;
  height: 20px;
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