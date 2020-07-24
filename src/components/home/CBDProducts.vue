<template>
  <div class="cbd-products" id="cbd-products">
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
    <div class="add-new-btn-home-cbd-products" v-if="userIsAuthenticated">
      <a @click="addNewProduct">
        <span class="elementor-button-text">{{ addNewBlogIndex }}</span>
      </a>
    </div>

    <!-- Products -->
    <div class="cbd-card" v-for="(item, i) in productList" :key="i">
      <div class="remove-product-section" @click="removeItem(i)" v-if="userIsAuthenticated">
        <img src="../../assets/images/trush.png" alt="trush" />
      </div>
      <h1>{{ item.title }}</h1>
      <p>{{ item.details }}</p>
      <div class="learn-more-btn">
        <a :href="item.productUrl" target="_blank">
          <span class="elementor-button-text">Shop Now</span>
          <i aria-hidden="true" class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="product-img-sec">
        <img :src="item.img1_url" alt />
      </div>
    </div>

    <!-- Form -->
    <v-card class="elevation-12 v-card-edit" v-if="userIsAuthenticated && createNewBlogIndex">
      <v-toolbar color="primary" dark flat>
        <v-spacer />
        <v-toolbar-title>New Product</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text class="v-card-text">
        <v-form @submit.prevent="onSubmit">
          <!-- title & productUrl -->
          <div class="name-field">
            <label class="field-label">Name of your product</label>
            <v-text-field
              class="field-input"
              v-model="title"
              id="title"
              placeholder="Name of your product"
              type="text"
            />
          </div>
          <div class="name-field">
            <label class="field-label">Product description</label>
            <v-text-field
              class="field-input"
              v-model="details"
              id="details"
              placeholder="Product description"
              type="text"
            />
          </div>
          <div class="name-field">
            <label class="field-label">Product Url</label>
            <v-text-field
              class="field-input"
              v-model="productUrl"
              id="productUrl"
              placeholder="Porduct url"
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
import firebase from "firebase";

export default {
  // name: "CBD Products",
  data() {
    return {
      userIsAuthenticated: false,
      addNewBlogIndex: "Add New CBD Product",
      createNewBlogIndex: false,
      title: null,
      details: null,
      productUrl: null,
      img1_url: null, //For image upload
      picture: null, //For image upload
      imageData: null, //For image upload
      uploadValue: 0, //For image upload
      productList: [],
      progressBar: false,
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
      .ref("hlm_home_cbd_products")
      .on("value", (snapshot) => {
        this.productList = snapshot.val();
        this.progressBar = true;
      });
  },
  methods: {
    addNewProduct() {
      if (!this.createNewBlogIndex) {
        this.createNewBlogIndex = true;
        this.addNewBlogIndex = "Close";
        document.querySelector(
          ".add-new-btn-home-cbd-products a"
        ).style.background = "red";
        document.querySelector(".add-new-btn-home-cbd-products a").style.color =
          "#fff";
      } else if (this.createNewBlogIndex) {
        this.createNewBlogIndex = false;
        this.addNewBlogIndex = "Add New CBD Product";
        document.querySelector(
          ".add-new-btn-home-cbd-products a"
        ).style.background = "transparent";
        document.querySelector(".add-new-btn-home-cbd-products a").style.color =
          "#000";
      }
    },
    // Adding new content
    onSubmit() {
      if (
        this.title === "" ||
        this.title === null ||
        this.details === "" ||
        this.details === null ||
        this.productUrl === "" ||
        this.productUrl === null
      ) {
        console.log("null");
        if (this.title == "" || this.title === null) {
          document.getElementById("title").placeholder =
            "Title must not be empty";
        }
        if (this.details == "" || this.details === null) {
          document.getElementById("details").placeholder =
            "Details must not be empty";
        }
        if (this.productUrl == "" || this.productUrl === null) {
          document.getElementById("productUrl").placeholder =
            "Product url must not be empty";
        }
      } else {
        firebase
          .database()
          .ref("hlm_home_cbd_products")
          .push({
            title: this.title,
            details: this.details,
            productUrl: this.productUrl,
            img1_url: this.img1_url,
          })
          .then((data) => {
            console.log(data.path.pieces_[1]);
            (this.title = ""), (this.details = ""), (this.productUrl = "");
            this.addNewProduct();
          })
          .catch((error) => console.log(error));
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
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
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
        .ref("hlm_home_cbd_products/" + key)
        .remove();
    },
  },
};
</script>

<style scoped>
.cbd-products {
  text-align: center;
  margin: 80px 0;
  position: relative;
}
.v-progress-circular {
  color: purple;
}
.cbd-card {
  display: inline-block;
  width: 25%;
  min-height: 600px;
  vertical-align: middle;
  background: #fff;
  margin: 0 10px;
  border-radius: 10px;
  padding: 40px 52px 0;
  position: relative;
  height: auto;
    vertical-align: top;
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
.cbd-card h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
.cbd-card p {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.learn-more-btn {
  padding: 16px 0;
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
.fa-arrow-right {
  margin-left: 10px;
}
.learn-more-btn a:hover {
  background-color: #5d9b30;
}
.product-img-sec img {
  max-width: 280px;
  max-height: 280px;
    width: 100%;
}

/* Add new Button */
.add-new-btn-home-cbd-products {
  width: 25%;
  text-align: right;
  margin: 0 auto;
}
.add-new-btn-home-cbd-products a {
  color: #000 !important;
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
  /* background-color: #6bb038 !important; */
  border: 4px solid #00ff32;
}

/* Form / v-card */
#cbd-products .v-sheet.v-card {
  width: 60%;
  margin: 0 auto;
  position: absolute;
  top: 60px;
  left: 15%;
}
.v-card-text {
  width: 100%;
  padding: 20px;
  clear: both;
  box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, 0.1);
  background: #dbdbdb url("../../assets/images/bg.png") repeat;
  position: relative;
  overflow: hidden;
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
  .add-new-btn-home-cbd-products {
    width: 80%;
  }
}

@media screen and (max-width: 900px) {
  .cbd-card {
    display: block;
    width: 80%;
    margin: 10px auto;
    overflow: hidden;
    height: auto;
    border: 2px solid #dedede;
  }
}

@media screen and (max-width: 768px) {
  .add-new-btn-home-cbd-products {
    width: 50%;
  }
  .cbd-card {
    display: block;
    width: 80%;
    margin: 10px auto;
    overflow: hidden;
    height: auto;
    border: 2px solid #dedede;
  }
}

@media screen and (max-width: 650px) {
  .add-new-btn-home-cbd-products {
    width: 80%;
  }
  .add-new-btn-home-cbd-products a {
    font-size: 14px;
  }
  .cbd-card h1 {
    font-size: 20px;
  }
  .cbd-card p {
    font-size: 16px;
  }
}
</style>