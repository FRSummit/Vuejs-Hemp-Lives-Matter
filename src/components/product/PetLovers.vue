<template>
  <div class="pet-lovers" id="pet-lovers">
    <!-- Progressbar -->
    <v-progress-circular
      v-if="!progressBar"
      class="v-progress-circular"
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>

    <!-- Remove Product -->
    <div class="remove-new-btn-pet-lovers" v-if="userIsAuthenticated && productListLength>0">
      <a @click="removeItem">
        <span class="elementor-button-text">Remove Product</span>
      </a>
    </div>

    <!-- Products -->
    <div v-for="(item, i) in productList" :key="i">
      <div class="product-section">
        <div class="product-img-sec">
          <img :src="item.img1_url" alt />
        </div>
        <div class="learn-more-btn">
          <a :href="item.productUrl" target="_blank">
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
          <img :src="item.img1_url2" alt />
        </div>
        <div class="learn-more-btn">
          <a :href="item.productUrl2" target="_blank">
            <span class="elementor-button-text">Learn More</span>
          </a>
        </div>
      </div>

      <!-- <div class="product-section">
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
      </div>-->
    </div>

    <!-- Add Product Section -->
    <div class="add-new-btn-pet-lovers" v-if="userIsAuthenticated && productListLength<1">
      <a @click="addNewProduct">
        <span class="elementor-button-text">{{ addNewBlogIndex }}</span>
      </a>
    </div>
    <!-- Form -->
    <v-card
      class="elevation-12 v-card-edit"
      v-if="userIsAuthenticated && createNewBlogIndex && productListLength<1"
    >
      <v-toolbar color="primary" dark flat>
        <v-spacer />
        <v-toolbar-title>New Product</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text class="v-card-text">
        <v-form @submit.prevent="onSubmit">
          <!-- title & productUrl 1 -->
          <h1>Product 1</h1>
          <!-- <div class="name-field">
            <label class="field-label">Name of your feature</label>
            <v-text-field
              class="field-input"
              v-model="title"
              id="title"
              placeholder="Name of your feature"
              type="text"
            />
          </div> -->
          <div class="name-field">
            <label class="field-label">Feature Url</label>
            <v-text-field
              class="field-input"
              v-model="productUrl"
              id="productUrl"
              placeholder="Product url"
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
          
          <!-- title & productUrl 2 -->
          <h1 style="margin-top: 20px;">Product 2</h1>
          <!-- <div class="name-field">
            <label class="field-label">Name of your Product</label>
            <v-text-field
              class="field-input"
              v-model="title2"
              id="title2"
              placeholder="Name of your feature"
              type="text"
            />
          </div> -->
          <div class="name-field">
            <label class="field-label">Product Url</label>
            <v-text-field
              class="field-input"
              v-model="productUrl2"
              id="productUrl2"
              placeholder="Product url"
              type="text"
            />
          </div>

          <!-- img 1 -->
          <div class="name-field">
            <label class="field-label img-sec">Upload an image:</label>
            <input
              class="field-input"
              @change="previewImage2"
              id="img2"
              type="file"
              accept="image/*"
            />
            <div style="display: inline-block;">
              <p>
                Progress: {{uploadValue2.toFixed()+"%"}}
                <progress
                  id="progress"
                  :value="uploadValue2"
                  max="100"
                ></progress>
              </p>
            </div>
            <div v-if="imageData2!=null">
              <img class="preview" :src="picture2" style="width: 200px;" />
              <br />
              <span @click="onUpload2" class="img-up-btn">Upload</span>
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
import firebase from "firebase";

export default {
  // name: "Pet Lovers"
  data() {
    return {
      userIsAuthenticated: false,
      addNewBlogIndex: "Add New Product",
      createNewBlogIndex: false,
      // title: null,
      // title2: null,
      productUrl: null,
      productUrl2: null,
      img1_url: null, //For image upload
      img1_url2: null, //For image upload
      picture: null, //For image upload
      picture2: null, //For image upload
      imageData: null, //For image upload
      imageData2: null, //For image upload
      uploadValue: 0, //For image upload
      uploadValue2: 0, //For image upload
      productList: [],
      progressBar: false,
      productListLength: null,
      minFeatureReachBtn: true
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
      .ref("hlm_product_pet_lovers_list")
      .on("value", snapshot => {
        this.productList = snapshot.val();
        this.progressBar = true;
        this.productListLength = Object.keys(snapshot.val()).length;
      });
  },
  methods: {
    addNewProduct() {
      if (!this.createNewBlogIndex) {
        this.createNewBlogIndex = true;
        this.addNewBlogIndex = "Close";
        document.querySelector(".add-new-btn-pet-lovers a").style.background = "red";
        document.querySelector(".add-new-btn-pet-lovers a").style.color = "#fff";
      } else if (this.createNewBlogIndex) {
        this.createNewBlogIndex = false;
        this.addNewBlogIndex = "Add New Product";
        document.querySelector(".add-new-btn-pet-lovers a").style.background = "#8aff00";
        document.querySelector(".add-new-btn-pet-lovers a").style.color = "#000";
      }
    },
    // Adding new content
    onSubmit() {
      if (
        this.productUrl === "" ||
        this.productUrl2 === "" ||
        this.productUrl === null ||
        this.productUrl2 === null
      ) {
        console.log("null");
        if (this.productUrl == "" || this.productUrl === null) {
          document.getElementById("productUrl").placeholder =
            "Product url must not be empty";
        }
        if (this.productUrl2 == "" || this.productUrl2 === null) {
          document.getElementById("productUrl2").placeholder =
            "Product url must not be empty";
        }
      } else {
        firebase
          .database()
          .ref("hlm_product_pet_lovers_list")
          .push({
            productUrl: this.productUrl,
            img1_url: this.img1_url,
            productUrl2: this.productUrl2,
            img1_url2: this.img1_url2
          })
          .then(data => {
            console.log(data.path.pieces_[1]);
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
    onUpload2() {
      //For image upload
      this.picture2 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData2.name}`)
        .put(this.imageData2);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue2 =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue2 = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture2 = url;
            this.img1_url2 = url;
            console.log(this.img1_url2);
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
    previewImage2(event) {
      //For image upload
      this.uploadValue2 = 0;
      this.picture2 = null;
      this.imageData2 = event.target.files[0];
    },
    removeItem() {
      firebase
        .database()
        .ref("hlm_product_pet_lovers_list")
        .remove();
        window.location.reload()
    }
  }
};
</script>

<style scoped>
.pet-lovers {
  background-image: url("../../assets/images/background-bright-close-up-environment-413195.jpg");
  padding: 80px 0px;
  background-repeat: repeat-y;
  text-align: center;
  position: relative;
}
.v-progress-circular {
  color: purple;
}
.product-section,
.txt {
  width: 22%;
  display: inline-block;
  margin: 0 20px;
  position: relative;
}
.txt {
  margin: 0 auto;
  width: 40%;
  vertical-align: top;
  margin-top: -40px;
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

/* Add new Button */
.add-new-btn-pet-lovers {
  text-align: right;
  margin: 0 40px;
  position: absolute;
  top: 16px;
  right: 20px;
}
.add-new-btn-pet-lovers a, .remove-new-btn-pet-lovers a {
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
  background: #8aff00;
  border: 2px solid #3b8a00;
}
.remove-new-btn-pet-lovers {
  text-align: right;
  margin: 0 40px;
  position: absolute;
  top: 16px;
  left: 20px;
}
.remove-new-btn-pet-lovers a {
  background: red;
}

/* Form / v-card */
#pet-lovers .v-sheet.v-card {
  width: 50%;
  margin: 0 auto;
  position: absolute;
  top: 20px;
  left: 25%;
  z-index: 5;
}
.v-card-text {
  width: 100%;
  padding: 20px;
  clear: both;
  box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, 0.1);
  background: #f3c02a;
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
</style>