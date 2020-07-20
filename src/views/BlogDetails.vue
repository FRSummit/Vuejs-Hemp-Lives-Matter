<template>
  <div class="blog-details">
    <h1 class="title">{{ blogTitle }}</h1>
    <div class="blog-section">
      <div class="blog-inner" v-for="(item, i) in items" :key="i">
        <div class="blog-title-sec">
          <p class="blog-title">{{ item.title }}</p>
        </div>
        <div class="blog-img-sec">
          <img :src="item.src" alt />
        </div>
        <div class="blog-txt-btn">
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog Details",
  data() {
    return {
      blogTitle: "null",
      items: [
        {
          src: require("../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentiallyNo, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
      ]
    };
  },
  created() {
    const blogDetails = localStorage.getItem("hlm_blog_details");
    this.blogTitle = JSON.parse(blogDetails).hlm_blog_title
    window.scrollTo(0,0);
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
</style>