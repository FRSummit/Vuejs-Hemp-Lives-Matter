<template>
  <div class="hlm-feature" id="hlm-feature">
    <p class="title">H.L.M. FEATURED</p>

    <!-- Progressbar -->
    <v-progress-circular
      v-if="!progressBar"
      class="v-progress-circular"
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>

    <!-- Add Product Section -->
    <div class="add-new-btn-hlm-products" v-if="userIsAuthenticated && productListLength<3">
      <a @click="addNewProduct">
        <span class="elementor-button-text">{{ addNewBlogIndex }}</span>
      </a>
    </div>

    <!-- Products -->
    <div class="product-section" v-for="(item, i) in productList" :key="i">
      <div class="remove-product-section" @click="removeItem(i)" v-if="userIsAuthenticated">
        <img src="../../assets/images/trush.png" alt="trush">
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
    <!-- Form -->
    <v-card class="elevation-12 v-card-edit" v-if="userIsAuthenticated && createNewBlogIndex && productListLength<3">
      <v-toolbar color="primary" dark flat>
        <v-spacer />
        <v-toolbar-title>New Product</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text class="v-card-text">
        <v-form @submit.prevent="onSubmit">
          <!-- title & productUrl -->
          <div class="name-field">
            <label class="field-label">Name of your feature</label>
            <v-text-field
              class="field-input"
              v-model="title"
              id="title"
              placeholder="Name of your feature"
              type="text"
            />
          </div>
          <div class="name-field">
            <label class="field-label">Feature Url</label>
            <v-text-field
              class="field-input"
              v-model="productUrl"
              id="productUrl"
              placeholder="Feature url"
              type="text"
            />
          </div>

          <!-- img 1 -->
          <div class="name-field">
            <label class="field-label img-sec">Upload an image:</label>
            <input
              class="field-input"
              @change="previewImage"
              id="img1"
              type="file"
              accept="image/*"
            />
            <div style="display: inline-block;">
              <p>
                Progress: {{uploadValue.toFixed()+"%"}}
                <progress
                  id="progress"
                  :value="uploadValue"
                  max="100"
                ></progress>
              </p>
            </div>
            <div v-if="imageData!=null">
              <img class="preview" :src="picture" style="width: 200px;" />
              <br />
              <span @click="onUpload" class="img-up-btn">Upload</span>
            </div>
          </div>

          <!-- submit section -->
          <v-card-actions>
            <v-spacer />
            <v-btn type="submit" class="create-btn" color="primary">Create</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- Form -->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  // name: "HLM Feature",
  data() {
    return {
      userIsAuthenticated: false,
      addNewBlogIndex: "Add New Featured",
      createNewBlogIndex: false,
      title: null,
      productUrl: null,
      img1_url: null, //For image upload
      picture: null, //For image upload
      imageData: null, //For image upload
      uploadValue: 0, //For image upload
      productList: [],
      progressBar: false,
      productListLength: null,
      minFeatureReachBtn: true,
    };
  },
  created() {
    const usrAuth = localStorage.getItem("admin_info_hlm");
    if (usrAuth) {
      this.userIsAuthenticated = JSON.parse(usrAuth).auth_hlm;
    }
    // load products
    firebase
      .database()
      .ref("hlm_product_feature_list")
      .on("value", snapshot => {
        this.productList = snapshot.val();
        this.progressBar = true
        this.productListLength = Object.keys(snapshot.val()).length
      });
  },
  methods: {
    addNewProduct() {
      if (!this.createNewBlogIndex) {
        this.createNewBlogIndex = true;
        this.addNewBlogIndex = "Close";
        document.querySelector(".add-new-btn-hlm-products a").style.background = "red";
        document.querySelector(".add-new-btn-hlm-products a").style.color = "#fff";
      } else if (this.createNewBlogIndex) {
        this.createNewBlogIndex = false;
        this.addNewBlogIndex = "Add New Featured";
        document.querySelector(".add-new-btn-hlm-products a").style.background =
          "#F3C12A";
        document.querySelector(".add-new-btn-hlm-products a").style.color = "#000";
      }
    },
    // Adding new content
    onSubmit() {
      if (
        this.title === "" ||
        this.title === null ||
        this.productUrl === "" ||
        this.productUrl === null
      ) {
        console.log("null");
        if (this.title == "" || this.title === null) {
          document.getElementById("title").placeholder =
            "Title must not be empty";
        }
        if (this.productUrl == "" || this.productUrl === null) {
          document.getElementById("productUrl").placeholder =
            "Product url must not be empty";
        }
      } else {
        firebase
          .database()
          .ref("hlm_product_feature_list")
          .push({
            title: this.title,
            productUrl: this.productUrl,
            img1_url: this.img1_url
          })
          .then(data => {
            console.log(data.path.pieces_[1]);
            (this.title = ""), (this.productUrl = "");
          })
          .catch(error => console.log(error));
      }
    },
    onUpload() {
      //For image upload
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            this.img1_url = url;
            console.log(this.img1_url);
          });
        }
      );
    },
    previewImage(event) {
      //For image upload
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    removeItem(key) {
      firebase
        .database()
        .ref("hlm_product_feature_list/" + key)
        .remove();
    }
  }
};
</script>

<style scoped>
.hlm-feature {
  text-align: center;
  position: relative;
}
.v-progress-circular {
  color: purple;
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

/* Add new Button */
.add-new-btn-hlm-products {
  text-align: right;
  margin: 0 40px;
  position: absolute;
    top: 16px;
    right: 20px;
}
.add-new-btn-hlm-products a {
  color: #000;
  padding: 12px 40px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  border-radius: 60px !important;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  background: #F3C12A;
  border: 2px solid #3b8a00;
}

/* Form / v-card */
#hlm-feature .v-sheet.v-card {
    width: 50%;
    margin: 0 auto;
    position: absolute;
    top: 20px;
    left: 40px;
    z-index: 5;
}
.v-card-text {
  width: 100%;
  padding: 20px;
  clear: both;
  box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, 0.1);
  background: #F3C02A;
  position: relative;
  overflow: hidden;
    border: 2px solid #000;
}
.add-new-for-index {
  width: 60%;
  margin: 0 auto;
}
.name-field {
  text-align: left;
}
label {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}
.img-sec {
  width: 30%;
}
input {
  color: #000;
  margin-left: 10px;
  width: 30%;
}
.img-up-btn,
.create-btn {
  color: #000;
  padding: 4px 12px;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px #000 solid;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
.create-btn {
  color: #000 !important;
  padding: 4px 12px !important;
  background: transparent !important;
}

@media screen and (max-width: 1050px) {
}

@media screen and (max-width: 768px) {
  .hlm-feature {
    padding: 10px 0;
  }
  .title {
    margin: 0;
  }
  .add-new-btn-hlm-products {
    position: relative;
    top: 0;
    right: 0;
    width: 50%;
    margin: 10px auto;
  }
  .product-section {
    width: 80%;
    display: block;
    margin: 10px auto;
    border: 2px solid #F3C12A;
    border-radius: 10px;
  }
  .product-txt-btn p {
    margin-bottom: 0;
  }
  #hlm-feature .v-sheet.v-card {
    width: 90%;
    top: 200px;
    left: 5%;
  }
}

@media screen and (max-width: 650px) {
  .img-sec {
    width: 50%;
  }
}
</style>