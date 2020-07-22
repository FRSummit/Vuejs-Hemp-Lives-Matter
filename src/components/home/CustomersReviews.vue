<template>
  <div class="customers-reviews">
    <p class="title">Customers Reviews</p>
    <div class="review-card-one">
      <!-- Add/Remove btns -->
      <div class="add-product-section" @click="addItem()" v-if="userIsAuthenticated && productListLength<1">
        <img src="../../assets/images/edit_icon.png" alt="close-add">
      </div>
      <div class="remove-product-section" @click="removeItem()" v-if="userIsAuthenticated && productListLength>0">
        <img src="../../assets/images/trush.png" alt="trush">
      </div>
      <!-- Data -->
      <div v-for="(item, i) in productList" :key="i">
        <div class="star-icon">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="review-message">
          <p>{{ item.message }}</p>
        </div>
        <div class="profile">
          <img :src="item.img1_url" alt="">
          <p>{{ item.title }}, {{ item.address }}</p>
        </div>
      </div>

      <!-- Form -->
      <div class="add-form" v-if="userIsAuthenticated && createNewBlogIndex">
        <form class="review-form" @submit.prevent="onSubmit">
          <input class="field-input" v-model="title" id="title" placeholder="Name of reviewer" type="text"/>
          <input class="field-input" v-model="address" id="country" placeholder="Country of reviewer" type="text"/>
          <textarea class="field-textarea" v-model="message" id="message" placeholder="Message" type="text"/>
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

          <button class="submit-btn" type="submit">Submit</button>
        </form>
      </div>
      <!-- Form -->
    </div>

    <div class="membership">
      <div class="membership-inner">
        <h1>Deal Of The Day $10 Off With Membership!</h1>
        <p>Become a member today and save.</p>
        <div class="learn-more-btn">
          <a href="https://hemplivesmatter.com/products/" target="_blank">
            <span class="elementor-button-text">Shop Now</span>
            <i aria-hidden="true" class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="review-card-two">
      <!-- Add/Remove btns -->
      <div class="add-product-section" @click="addItem2()" v-if="userIsAuthenticated && productListLength2<1">
        <img src="../../assets/images/edit_icon.png" alt="close-add">
      </div>
      <div class="remove-product-section" @click="removeItem2()" v-if="userIsAuthenticated && productListLength2>0">
        <img src="../../assets/images/trush.png" alt="trush">
      </div>

      <!-- data -->
      <div v-for="(item, i) in productList2" :key="i">
        <div class="star-icon">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="review-message">
          <p>{{ item.message2 }}</p>
        </div>
        <div class="profile">
          <img :src="item.img1_url2" alt="">
          <p>{{ item.title2 }}, {{ item.address2 }}</p>
        </div>
      </div>

      <!-- Form -->
      <div class="add-form" v-if="userIsAuthenticated && createNewBlogIndex2">
        <form class="review-form" @submit.prevent="onSubmit2">
          <input class="field-input" v-model="title2" id="title" placeholder="Name of reviewer" type="text"/>
          <input class="field-input" v-model="address2" id="country" placeholder="Country of reviewer" type="text"/>
          <textarea class="field-textarea" v-model="message2" id="message" placeholder="Message" type="text"/>
          <!-- img 1 -->
          <div class="name-field">
            <label class="field-label img-sec">Upload an image:</label>
            <input
              class="field-input"
              @change="previewImage2"
              id="img1_2"
              type="file"
              accept="image/*"
            />
            <div style="display: inline-block;">
              <p>
                Progress: {{uploadValue2.toFixed()+"%"}}
                <progress
                  id="progress2"
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

          <button class="submit-btn" type="submit">Submit</button>
        </form>
      </div>
      <!-- Form -->
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  // name: "Customers Reviews",
  data() {
    return {
      userIsAuthenticated: false,
      title: null,
      address: null,
      message: null,
      img1_url: null, //For image upload
      picture: null, //For image upload
      imageData: null, //For image upload
      uploadValue: 0, //For image upload
      productList: [],
      progressBar: false,
      createNewBlogIndex: false,
      productListLength: null,
      
      title2: null,
      address2: null,
      message2: null,
      img1_url2: null, //For image upload
      picture2: null, //For image upload
      imageData2: null, //For image upload
      uploadValue2: 0, //For image upload
      productList2: [],
      progressBar2: false,
      createNewBlogIndex2: false,
      productListLength2: null,
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
      .ref("hlm_home_customer_review_1")
      .on("value", snapshot => {
        this.productList = snapshot.val();
        this.progressBar = true
        this.productListLength = Object.keys(snapshot.val()).length;
      });

    // load products 2
    firebase
      .database()
      .ref("hlm_home_customer_review_2")
      .on("value", snapshot => {
        this.productList2 = snapshot.val();
        this.progressBar = true
        this.productListLength2 = Object.keys(snapshot.val()).length;
      });
  },
  methods: {
    addItem() {
      if (!this.createNewBlogIndex) {
        this.createNewBlogIndex = true;
      } else if (this.createNewBlogIndex) {
        this.createNewBlogIndex = false;
      }
    },
    addItem2() {
      if (!this.createNewBlogIndex2) {
        this.createNewBlogIndex2 = true;
      } else if (this.createNewBlogIndex2) {
        this.createNewBlogIndex2 = false;
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
          .ref('hlm_home_customer_review_1')
          .push({
            title: this.title,
            address: this.address,
            message: this.message,
            img1_url: this.img1_url
          })
          .then(data => {
            console.log(data.path.pieces_[1]);
            (this.title = ""), (this.address = ""), (this.message = "");
            this.addItem()
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
    removeItem() {
      firebase
        .database()
        .ref("hlm_home_customer_review_1")
        .remove();
        window.location.reload()
    },

    // Review 2
    
    // Adding new content
    onSubmit2() {
      if (
        this.title2 === "" ||
        this.title2 === null ||
        this.productUrl2 === "" ||
        this.productUrl2 === null
      ) {
        console.log("null");
        if (this.title2 == "" || this.title2 === null) {
          document.getElementById("title2").placeholder =
            "Title must not be empty";
        }
        if (this.productUrl2 == "" || this.productUrl2 === null) {
          document.getElementById("productUrl2").placeholder =
            "Product url must not be empty";
        }
      } else {
        firebase
          .database()
          .ref('hlm_home_customer_review_2')
          .push({
            title2: this.title2,
            address2: this.address2,
            message2: this.message2,
            img1_url2: this.img1_url2
          })
          .then(data => {
            console.log(data.path.pieces_[1]);
            (this.title2 = ""), (this.address2 = ""), (this.message2 = "");
            this.addItem2()
          })
          .catch(error => console.log(error));
      }
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
    previewImage2(event) {
      //For image upload
      this.uploadValue2 = 0;
      this.picture2 = null;
      this.imageData2 = event.target.files[0];
    },
    removeItem2() {
      firebase
        .database()
        .ref("hlm_home_customer_review_2")
        .remove();
        window.location.reload()
    }
  }
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
  position: relative;
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
  background-position: 0;
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
.fa-arrow-right {
  margin-left: 10px;
}

/* Dynamic */
.customers-reviews .add-product-section, 
.customers-reviews .remove-product-section {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.customers-reviews .add-product-section {
  right: 40px;
}
.customers-reviews .add-product-section img, 
.customers-reviews .remove-product-section img {
  width: 25px;
  height: 25px;
}
.add-form {
    position: absolute;
    background-image: url("../../assets/images/bg.png");
    top: 50px;
    text-align: left;
    padding: 4px;
    border-radius: 4px;
    background-size: cover;
}
.review-form {
    font-size: 18px;
    border: 2px solid #000;
    padding: 4px;
    border-radius: 4px;
}
.field-input, .field-textarea {
    border: 1px solid #000;
    border-radius: 4px;
    margin: 6px 0;
    padding: 4px;
    width: 100%;
}
.field-textarea {
    min-height: 100px;
}
.add-form .submit-btn {
    border: 2px solid #000;
    border-radius: 10px;
    padding: 4px;
    width: 50%;
    margin: 0 auto;
    display: block;
    font-weight: bold;
    color: #000;
}
.img-up-btn {
    border: 1px solid #272727;
    border-radius: 10px;
    padding: 4px;
    width: 30%;
    text-align: center;
    display: block;
    font-weight: bold;
    color: #000;
    cursor: pointer;
}
</style>