<template>
  <div class="blog-index">
    <!-- Add Blog section -->
    <div class="add-new-btn" v-if="userIsAuthenticated">
      <a @click="addNewBlog" target="_blank">
        <span class="elementor-button-text">{{ addNewBlogIndex }}</span>
      </a>
    </div>
    <!-- Add Blog Component -->
    <NewIndexBlogItem v-if="createNewBlogIndex" />

    <!-- Progressbar -->
    <v-progress-circular
      v-if="!progressBar"
      class="v-progress-circular"
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>

    <!-- Blog Index -->
    <div class="blog-section" v-for="(item, i) in indexBlogList" :key="i">
      <!-- <span class="num">
        <span class="dsq-postid">{{ i + 1 }}</span>
      </span>-->
      <div class="blog-img-sec">
        <img :src="item.img1_url" alt />
      </div>
      <div class="blog-txt-btn">
        <p class="title">{{ item.title }}</p>
        <p class="description">{{ item.summery }}</p>
        <div class="learn-more-btn">
          <a @click="readBlog(i, item.title)" target="_blank">
            <span class="elementor-button-text">Read More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewIndexBlogItem from "./create/AddBlogForIndex";
import firebase from "firebase";

export default {
  // name: "Blog Index",
  components: {
    NewIndexBlogItem
  },
  data() {
    return {
      userIsAuthenticated: false,
      createNewBlogIndex: false,
      progressBar: false,
      addNewBlogIndex: "Add New",
      indexBlogList: []
    };
  },
  created() {
    const usrAuth = localStorage.getItem("admin_info_hlm");
    if (usrAuth) {
      this.userIsAuthenticated = JSON.parse(usrAuth).auth_hlm;
    }
    // load index blog list
    firebase
      .database()
      .ref("index-blog-list")
      .on("value", snapshot => {
        this.indexBlogList = snapshot.val();
        this.progressBar = true;
        // console.log(Object.keys(this.indexBlogList));
        // for(let i=0; i<Object.keys(this.indexBlogList).length; i++) {
        // console.log(Object.keys(this.indexBlogList)[i])
        // }
      });
  },
  mounted() {},
  methods: {
    readBlog(id, title) {
      console.log(id);
      let blogDetails = { hlm_blog_id: id, hlm_blog_title: title };
      localStorage.setItem("hlm_blog_details", JSON.stringify(blogDetails));
      this.$router.push("/blog-details");
    },
    addNewBlog() {
      if (!this.createNewBlogIndex) {
        this.createNewBlogIndex = true;
        this.addNewBlogIndex = "Close";
        document.querySelector(".add-new-btn a").style.background = "red";
        document.querySelector(".add-new-btn a").style.color = "#fff";
      } else if (this.createNewBlogIndex) {
        this.createNewBlogIndex = false;
        this.addNewBlogIndex = "Add New";
        document.querySelector(".add-new-btn a").style.background =
          "transparent";
        document.querySelector(".add-new-btn a").style.color = "#000";
      }
    }
  }
};
</script>

<style scoped>
.blog-index {
  width: 100%;
  padding: 60px 10%;
  clear: both;
  box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, 0.1);
  background: #dbdbdb url("../../assets/images/bg.png") repeat;
  position: relative;
  overflow: hidden;
}
.v-progress-circular {
  color: purple;
}
.blog-section {
  width: 45%;
  display: inline-block;
  margin: 20px;
  padding: 4px 0;
  border: 2px solid #cfcfcf;
  position: relative;
}
.num {
  border-radius: 100%;
  background: #3b4d88;
  border: 2px #2f3e6d solid;
  text-align: center;
  color: #fff;
  font-weight: 300;
  font-size: 13px;
  width: 48px;
  height: 48px;
  padding: 15px 5px;
  position: absolute;
  left: -17px;
  top: -10px;
  z-index: 5;
}
.num:after {
  content: "";
  bottom: -3px;
  left: 3px;
  background: url("../../assets/images/comment-arrow.png");
  width: 10px;
  height: 12px;
  position: absolute;
  display: block;
  float: left;
}
.blog-img-sec {
  width: 36%;
  display: inline-block;
}
.blog-img-sec img {
  border: 2px #fff solid;
  max-width: 100%;
  float: left;
  display: block;
  font-size: 11px;
  position: relative;
  width: 175px;
  height: 175px;
}
.blog-txt-btn {
  width: 60%;
  display: inline-block;
  vertical-align: top;
}
.blog-txt-btn .title {
  font-family: "Lato", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  left: 40%;
  top: 5px;
  text-align: left;
}
.blog-txt-btn .description {
  font-family: "Lato", Sans-serif;
  font-size: 14px;
  position: absolute;
  left: 40%;
  top: 15%;
  text-align: left;
}
.learn-more-btn {
  position: absolute;
  bottom: 10px;
  left: 40%;
}
.learn-more-btn a,
.add-new-btn a {
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
}
.learn-more-btn a:hover {
  background: #3c4e86;
  color: #fff;
}
.add-new-btn {
  text-align: right;
  margin: 0 40px;
}
.add-new-btn a {
  border-radius: 6px;
  width: 10%;
  font-weight: bold;
  cursor: pointer;
}
</style>