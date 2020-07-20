<template>
  <div class="blog-details">
    <!-- Back Button -->
    <div class="blog-list-btn">
      <router-link to="/blog">
        <span class="elementor-button-text">Back To Blog List</span>
      </router-link>
    </div>
    <!-- Blog Content -->
    <h1 class="title">{{ blogId }}</h1>
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
    <div class="add-content" v-if="userIsAuthenticated">
      <v-card class="elevation-12 v-card-edit">
        <v-toolbar color="primary" dark flat>
          <v-spacer />
          <v-toolbar-title>New Blog</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text class="v-card-text">
          <v-form @submit.prevent="onSubmit">
            <!-- title & summery -->
            <div class="name-field">
              <label class="field-label">Name of your blog</label>
              <v-text-field
                class="field-input"
                v-model="title"
                id="title"
                placeholder="Name of your blog"
                type="text"
              />
            </div>
            <div class="name-field">
              <label class="field-label">Short summery</label>
              <v-text-field
                class="field-input"
                v-model="summery"
                id="summery"
                placeholder="Short summery"
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
      blogId: "null",
      blogDetails: [],
      addNewBlogIndex: "Add New Content"
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
    window.scrollTo(0, 0);

    // Get The blog
    firebase.database().ref("Blog_" + JSON.parse(blogDetails).hlm_blog_id).on("value", snapshot => {
        this.blogDetails = snapshot.val();
      });
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
      firebase.database().ref("index-blog-list/" + this.blogId).remove();
      firebase.database().ref("Blog_" + this.blogId).remove();
      this.$router.push("/blog");
    }
  }
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
.title {
  font-size: 3.125em;
  text-align: center;
  font-weight: 300;
  margin-bottom: 30px;
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
  top: 5%;
  left: 5%;
}
.add-new-btn {
  position: absolute;
  top: 5%;
  right: 5%;
}
.remove-new-btn {
  position: absolute;
  top: 10%;
  right: 5%;
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
</style>