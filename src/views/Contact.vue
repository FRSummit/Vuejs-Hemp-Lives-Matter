<template>
  <div class="contact">
    <div class="title">
      <h1>Keep In Touch</h1>
    </div>
    <div class="contact-details">
      <div class="map">
        <iframe
          class="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3868533014947!2d144.9544513153185!3d-37.80440677975401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d33c2519bbf%3A0x6e136e5dd56fc39d!2s121%2F152%20Peel%20St%2C%20North%20Melbourne%20VIC%203051%2C%20Australia!5e0!3m2!1sen!2sbd!4v1594189975462!5m2!1sen!2sbd"
          allowfullscreen
        ></iframe>
      </div>
      <div class="details">
        <div class="info">
          <div class="address">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <h4>Phone</h4>
            <p>+1 (208) 243-2579</p>
          </div>
          <div class="email">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <h4>Mail</h4>
            <p>buildwithcr@gmail.com</p>
          </div>
          <div class="location">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <h4>Location:</h4>
            <p>8840 West Russell Road, Suite 245, Las Vegas, NV 89148</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  created() {},
  mounted() {
    this.$store.state.routeName = "Contact";
  }
};
</script>

<style scoped>
.title {
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
  font-family: "Merriweather", serif;
  font-weight: bold;
}
.contact-details {
  margin: 0 auto;
  width: 80%;
}
.map {
}
.frame {
  border: 2px solid #dedede;
  width: 100%;
  height: 270px;
}
.details {
  margin: 30px 0;
  text-align: center;
}
.info h4 {
  margin: 10px 0;
}
.address,
.email,
.location {
  display: inline-block;
  margin: 2%;
  width: 30%;
  padding: 20px 20px;
  border: 1px solid #dedede;
  min-height: 200px;
  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
}
.address {
  margin-left: 0;
}
.email {
}
.location {
  margin-right: 0;
}
.fa-phone,
.fa-envelope,
.fa-map-marker {
  color: #8bc34a;
  font-weight: bold;
  font-size: 30px;
}
</style>
