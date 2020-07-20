<template>
  <div class="blog-index">
    <div class="blog-section" v-for="(item, i) in items" :key="i">
      <span class="num">
        <span class="dsq-postid">{{ i + 1 }}</span>
      </span>
      <div class="blog-img-sec">
        <img :src="item.src" alt />
      </div>
      <div class="blog-txt-btn">
        <p class="title">{{ item.title }}</p>
        <p class="description">{{ item.description }}</p>
        <div class="learn-more-btn">
          <a href="https://hemplivesmatter.com/products/" target="_blank">
            <span class="elementor-button-text">Read More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog Index",
  data() {
    return {
      items: [
        {
          src: require("../../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/BathBox6PackOpen-orvmuxqlb24rqpu36c8auib7pfwxtoande4q422xhk.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/FullSpectrum_allC-orviq22utqbsu63aizhkx2swidq0nj968ia3oatr0o.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/valuePackHempworxDirector-orkq5bh2oasr23ijxry6ul5ax4fq5nxhyoeqgy2hoo.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/productsHempGummies-orvmua8mk78logs7zk2mm68out4rh8pcy5tl451rt4.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/BathBox6PackOpen-orvmuxqlb24rqpu36c8auib7pfwxtoande4q422xhk.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/FullSpectrum_allC-orviq22utqbsu63aizhkx2swidq0nj968ia3oatr0o.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/valuePackHempworxDirector-orkq5bh2oasr23ijxry6ul5ax4fq5nxhyoeqgy2hoo.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        },
        {
          src: require("../../assets/images/valuePackHempworxDirector-orkq5bh2oasr23ijxry6ul5ax4fq5nxhyoeqgy2hoo.png"),
          title: "Name of the image",
          description:
            "No, despite its name, the Peter Principle doesn’t have anything to do with Peter Parker, though you could say that it relates to great power and great responsibility. At least tangentially..."
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
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
    background: #3B4D88;
    border: 2px #2F3E6D solid;
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
.learn-more-btn a {
  color: #000;
  padding: 10px 12px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px #000 solid;
}
.learn-more-btn a:hover {
  background: #3c4e86;
  color: #fff;
}
</style>