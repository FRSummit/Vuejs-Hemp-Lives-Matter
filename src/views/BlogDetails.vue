<template>
  <div class="blog-details" id="blog-details">
    <!-- Progressbar -->
    <v-progress-circular
      v-if="!progressBar"
      class="v-progress-circular"
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>

    <!-- Back Button -->
    <div class="blog-list-btn">
      <router-link to="/blog">
        <span class="elementor-button-text">Back To Blog List</span>
      </router-link>
    </div>
    <!-- Blog Content -->
    <h1 class="title">{{ blogTitle }}</h1>
    <div class="blog-section">
      <div class="blog-inner" v-for="(item, i) in blogDetails" :key="i">
        <div class="blog-title-sec">
          <p class="blog-title">{{ item.title }}</p>
        </div>
        <div class="blog-img-sec">
          <img :src="item.img1_url" alt />
        </div>
        <div class="blog-txt-btn">
          <p class="description">{{ item.summery }}</p>
        </div>
      </div>
    </div>
    <!-- Adding new content -->
    <!-- Add/Remove New Content Button -->
    <div class="add-new-btn" v-if="userIsAuthenticated">
      <a @click="addNewBlog">
        <span class="elementor-button-text">{{ addNewBlogIndex }}</span>
      </a>
      <a @click="RemoveBlog">
        <span class="elementor-button-text">Remove This Blog</span>
      </a>
    </div>
    <!-- Content's new input form -->
    <div class="add-content" v-if="userIsAuthenticated && createNewBlogIndex">
      <v-card class="elevation-12 v-card-edit">
        <v-toolbar color="primary" dark flat>
          <v-spacer />
          <v-toolbar-title>New Content</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text class="v-card-text">
          <v-form @submit.prevent="onSubmit">
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
                <img class="preview" :src="picture" />
                <br />
                <span @click="onUpload" class="img-up-btn">Upload</span>
              </div>
            </div>

            <!-- title & summery -->
            <div class="name-field">
              <label class="field-label">Title</label>
              <v-text-field
                class="field-input"
                v-model="title"
                id="title"
                placeholder="Title (Optional)"
                type="text"
              />
            </div>
            <div class="name-field">
              <label class="field-label">Short summery</label>
              <!-- <v-text-field
                class="field-input"
                v-model="summery"
                id="summery"
                placeholder="Short summery"
                type="text"
              />-->
              <v-textarea
                background-color="grey lighten-2"
                color="cyan"
                class="field-input"
                v-model="summery"
                id="summery"
                placeholder="Short summery"
                type="text"
              ></v-textarea>
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
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  // name: "Blog Details",
  data() {
    return {
      userIsAuthenticated: false,
      progressBar: false,
      blogId: null,
      blogTitle: null,
      blogDetails: [],
      addNewBlogIndex: "Add New Content",
      createNewBlogIndex: false,
      // adding content  for blog
      title: null,
      summery: null,
      img1_url: null, //For image upload
      picture: null, //For image upload
      imageData: null, //For image upload
      uploadValue: 0, //For image upload
    };
  },
  created() {
    const usrAuth = localStorage.getItem("admin_info_hlm");
    if (usrAuth) {
      this.userIsAuthenticated = JSON.parse(usrAuth).auth_hlm;
    }

    // Get blog id from localstorage which passed from blog index page
    const blogDetails = localStorage.getItem("hlm_blog_details");
    this.blogId = JSON.parse(blogDetails).hlm_blog_id;
    this.blogTitle = JSON.parse(blogDetails).hlm_blog_title;
    window.scrollTo(0, 0);

    // Get The blog
    firebase
      .database()
      .ref("Blog_" + JSON.parse(blogDetails).hlm_blog_id)
      .on("value", (snapshot) => {
        this.blogDetails = snapshot.val();
        this.progressBar = true;
      });

    // if(document.getElementById('blog-details').clientHeight > 1000) {
    //   document.querySelector('#blog-details .add-content').style.position = 'absolute';
    // }
  },
  methods: {
    addNewBlog() {
      if (!this.createNewBlogIndex) {
        this.createNewBlogIndex = true;
        this.addNewBlogIndex = "Close Form";
        document.querySelector(".add-new-btn a").style.background = "red";
        document.querySelector(".add-new-btn a").style.color = "#fff";
      } else if (this.createNewBlogIndex) {
        this.createNewBlogIndex = false;
        this.addNewBlogIndex = "Add New Content";
        document.querySelector(".add-new-btn a").style.background =
          "transparent";
        document.querySelector(".add-new-btn a").style.color = "#000";
      }
    },
    RemoveBlog() {
      console.log(this.blogId);
      firebase
        .database()
        .ref("index-blog-list/" + this.blogId)
        .remove();
      firebase
        .database()
        .ref("Blog_" + this.blogId)
        .remove();
      this.$router.push("/blog");
    },

    // Adding new content
    onSubmit() {
      console.log(this.title + " " + this.summery + " " + this.img1_url);
      if (
        this.title === "" ||
        this.title === null ||
        this.summery === "" ||
        this.summery === null
      ) {
        console.log("null");
        if (this.title == "" || this.title === null) {
          document.getElementById("title").placeholder =
            "Title must not be empty";
        }
        if (this.summery == "" || this.summery === null) {
          document.getElementById("summery").placeholder =
            "Summery must not be empty";
        }
      } else {
        firebase
          .database()
          .ref("Blog_" + this.blogId)
          .push({
            title: this.title,
            summery: this.summery + "...",
            img1_url: this.img1_url,
          })
          .then((data) => {
            this.createBlogForId(data.path.pieces_[1]);
            console.log(data.path.pieces_[1]);
          })
          .catch((error) => console.log(error));
        this.addNewBlog();
        window.location.reload();
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
          // console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
          // console.log(storageRef.snapshot.ref.getDownloadURL().url);
        }
      );
    },
    previewImage(event) {
      //For image upload
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.blog-details {
  width: 100%;
  padding: 60px 5%;
  clear: both;
  box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, 0.1);
  background: #dbdbdb url("../assets/images/bg.png") repeat;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.v-progress-circular {
  color: purple;
}
.title {
  font-size: 3.125em;
  text-align: center;
  font-weight: 300;
  margin: 30px 0;
}
.blog-section {
  border: 2px solid #cfcfcf;
  width: 80%;
  margin: 0 auto;
}
.blog-inner {
  margin-bottom: 30px;
}
.blog-title {
  font-size: 30px;
  text-align: left;
  width: 100%;
  margin-left: 20px;
  font-weight: bold;
}
.blog-img-sec {
}
.blog-img-sec img {
  width: 40%;
}
.blog-txt-btn {
}
.blog-txt-btn .title {
}
.blog-txt-btn .description {
  font-size: 20px;
  margin-left: 20px;
  text-align: left;
}

/* Adding new content */
.blog-list-btn {
  position: absolute;
  top: 40px;
  left: 40px;
}
.add-new-btn {
  position: absolute;
  top: 40px;
  right: 40px;
}
.add-new-btn a,
.remove-new-btn a,
.blog-list-btn a {
  color: #000;
  padding: 10px 12px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px #000 solid;
  text-align: center;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 20px;
}
.add-new-btn a:hover {
  background: #00ff14;
}
.add-new-btn a:nth-child(2):hover {
  background: red;
}
.add-content {
  width: 60%;
  margin: 0 auto;
  /* position: absolute; */
  top: 100px;
  right: 30px;
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
.add-content .preview {
  width: 200px;
  height: 200px;
}
#summery {
  background: #dedede !important;
}

@media screen and (max-width: 1050px) {
  .add-content {
    width: 100%;
  }
  .blog-section {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 2.125em;
  }
  .blog-title[data-v-2bd0d7f6] {
    font-size: 24px;
  }
  .blog-txt-btn .description {
    font-size: 18px;
  }
}

@media screen and (max-width: 700px) {
  .blog-list-btn {
    position: relative;
    top: 0;
    left: 0;
  }
  .add-new-btn {
    position: relative;
    top: 0;
    left: 0;
    margin-top: 20px;
  }
}

@media screen and (max-width: 700px) {
  .img-sec {
    width: 50%;
  }
}

@media screen and (max-width: 491px) {
  .blog-details {
    padding: 20px 10px;
  }
  .title {
    font-size: 26px;
  }
  .blog-title {
    font-size: 18px;
    margin: 0 0 10px;
  }
  .blog-txt-btn .description {
    font-size: 16px;
    margin: 4px 0;
  }
  .blog-section {
    padding: 0 8px;
  }
}
</style>