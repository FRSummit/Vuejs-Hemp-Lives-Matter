<template>
  <div class="product" id="product">
    <div class="title-section">
      <p class="title">Products</p>
      <p class="sub-title">Remember to activate with each visit</p>
    </div>
    <div class="product-section" v-for="(item, i) in productList" :key="i">
      <div class="product-img-sec">
        <img :src="item.img1_url" alt />
      </div>
      <div class="product-txt-btn">
        <p>{{ item.title }}</p>
        <div class="learn-more-btn">
          <!-- <a href="https://hemplivesmatter.com/products/" target="_blank"> -->
          <a :href="item.productUrl" target="_blank">
            <span class="elementor-button-text">Learn More</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Add Product Section -->
    <div class="add-new-btn" v-if="userIsAuthenticated">
      <a @click="addNewProduct">
        <span class="elementor-button-text">{{ addNewBlogIndex }}</span>
      </a>
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
  name: "Product",
  data() {
    return {
      userIsAuthenticated: false,
      addNewBlogIndex: "Add New Product",
      createNewBlogIndex: false,
      title: null,
      productUrl: null,
      img1_url: null, //For image upload
      picture: null, //For image upload
      imageData: null, //For image upload
      uploadValue: 0, //For image upload
      productList: []
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
      .ref("hlm_product_list")
      .on("value", snapshot => {
        this.productList = snapshot.val();
        // console.log(snapshot.val())
        // console.log(Object.keys(snapshot.val()))
        // for(let i=0; i<Object.keys(snapshot.val()).length; i++) {
        //   console.log(snapshot.val()[Object.keys(snapshot.val())[i]])
        // }
      });
  },
  methods: {
    addNewProduct() {
      if (!this.createNewBlogIndex) {
        this.createNewBlogIndex = true;
        this.addNewBlogIndex = "Close";
        document.querySelector(".add-new-btn a").style.background = "red";
        document.querySelector(".add-new-btn a").style.color = "#fff";
      } else if (this.createNewBlogIndex) {
        this.createNewBlogIndex = false;
        this.addNewBlogIndex = "Add New Product";
        document.querySelector(".add-new-btn a").style.background =
          "transparent";
        document.querySelector(".add-new-btn a").style.color = "#000";
      }
    },
    // Adding new content
    onSubmit() {
      console.log(this.title + " " + this.productUrl + " " + this.img1_url);
      let dbTableName = '';
      if(Object.keys(this.productList).length < 8) {
        dbTableName = "hlm_product_list"
      } else {
        dbTableName = "hlm_product_list_2"
      }
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
          .ref(dbTableName)
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
  position: relative;
}
.title-section {
  background-image: url("../../assets/images/green-leaf-1353938.jpg");
  background-position: 0px -350px;
  background-size: 100% auto;
  padding: 80px 0px;
}
.title {
  color: #26a53a;
  font-family: "Lato", Sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-shadow: -2px 0px 0px #000000;
  margin-bottom: 20px;
}
.sub-title {
  font-size: 22px;
  font-weight: bold;
  color: #ff7400;
  font-family: "Lato", Sans-serif;
}
.logo-leaf {
  margin: 30px 0 0;
}
.product-section {
  width: 22%;
  display: inline-block;
  margin: 20px;
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

/* Add new Button */
.add-new-btn {
  text-align: right;
  margin: 0 40px;
  position: absolute;
  top: 80px;
  left: 70%;
}
.add-new-btn a {
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
#product .v-sheet.v-card {
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 200px;
  left: 10%;
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
</style>