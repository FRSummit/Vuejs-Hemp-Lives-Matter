<template>
  <div class="contact">
    <div class="title">
      <h1>Keep In Touch</h1>
    </div>
    <div class="contact-details">
      <!-- Map -->
      <div class="map">
        <iframe
          class="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3868533014947!2d144.9544513153185!3d-37.80440677975401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d33c2519bbf%3A0x6e136e5dd56fc39d!2s121%2F152%20Peel%20St%2C%20North%20Melbourne%20VIC%203051%2C%20Australia!5e0!3m2!1sen!2sbd!4v1594189975462!5m2!1sen!2sbd"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Details Section -->
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
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
            <h4>Location:</h4>
            <p>8840 West Russell Road, Suite 245, Las Vegas, NV 89148</p>
          </div>
        </div>
      </div>

      <!-- Question Section -->
      <div class="question-section">
        <div class="container">
          <div class="section-title">
            <h1>Frequently Asked Question!</h1>
          </div>
          <div class="question-inner">
            <div class="devider"></div>
            <div class="question q1">
              <div class="ques">
                <span>What is Hemp-Derived CBD?</span>
              </div>
              <div class="answer">
                <span>HempWorx products are made from industrial hemp plants grown on American farms. Cannabidiol (CBD), a constituent that naturally occurs in industrial Hemp, is just one of over 85 cannabinoids that is identified in the cannabis plant. Our oil is CO2 extracted resulting in a solvent free, pure extract.</span>
              </div>
            </div>
            <div class="question q2">
              <div class="ques">
                <span>How much CBD oil should I take?</span>
              </div>
              <div class="answer">
                <span>Use up to a full dropper, twice a day. As a dietary supplement, place 20 drops under the tongue, hold for 60 seconds, then swallow.</span>
              </div>
            </div>
            <div class="question q3">
              <div class="ques">
                <span>How are HempWorx products superior?</span>
              </div>
              <div class="answer">
                <span>There are many categories that really separate HempWorx from the rest. We know that CBD is expensive so we pride ourselves in negotiating the best supply contracts, farming relationships, and vendor relationships to bring the most effective Hemp-Derived CBD products to market, at an affordable price. Not only do we source the highest quality raw materials, we are one of the few companies in the industry who posts our test data on our website readily visible for our customers to see. We give our customers a 60-day money back guarantee so that our Customers always have product they can count on</span>
              </div>
            </div>
            <div class="question q4">
              <div class="ques">
                <span>Are your HempWorx products safe?</span>
              </div>
              <div class="answer">
                <span>Yes. All our hemp crops are grown free of chemical fertilizers, herbicides, and pesticides, so our quality starts with our hemp plants. From the time our hemp oil is harvested to the manufacturing and shipping of our products, we test our hemp oil multiple times to ensure accuracy in potency information and to check for contaminants like pesticides, herbicides, heavy metals, and mold, as well as cannabinoid content. We also use a subcritical CO2 method when we extract our hemp oil, instead of harsh solvents. CO2 is a much healthier choice than other potential solvents.</span>
              </div>
            </div>
            <div class="question q5">
              <div class="ques">
                <span>What's the difference between this and the hemp products I buy in the grocery store?</span>
              </div>
              <div class="answer">
                <span>Hemp products sold in stores are most often made with hemp seed oil, which can contain only trace amounts of CBD. Our Full Spectrum Hemp Oil, however, is extracted from the stalk of specifically selected hemp cultivars, offering higher percentages of CBD by weight and additional nutritional benefits from the contents of our oil</span>
              </div>
            </div>
            <div class="question q6">
              <div class="ques">
                <span>Exactly what's the difference between Hemp and Marijuana?</span>
              </div>
              <div class="answer">
                <span>Cannabis is a family of plants with two primary classifications – Indica and Sativa. While marijuana can be considered a member of either the Indica or Sativa families, Hemp is a member of the Cannabis Sativa family. Because Hemp and Marijuana both derive from the Cannabis Sativa family, they do share certain similarities; however, due to each plant’s biological structure, they have several very distinct and crucial differences. Cannabis contains a variety of different compounds called Cannabinoids, two of the richest and most dominant are Tetrahydrocannabinol (THC) and Cannabidiol (CBD). Both Cannabinoids have shown to provide profound benefits to the human body; however, THC induces psychoactive effects (gets the user “high”), while CBD does not contain any psychoactive properties.</span>
              </div>
            </div>
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
  font-size: 20px;
  font-weight: bold;
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
.fa-map-marker-alt {
  color: #8bc34a;
  font-weight: bold;
  font-size: 30px;
}
/* Question Section */
.question-section {
  text-align: center;
  position: relative;
    min-height: 1400px;
}
.section-title {
  margin-bottom: 40px;
}
.question-inner .devider {
  position: absolute;
    height: 1290px;
    width: 4px;
    color: #222;
    background: #8BC34A;
    left: 50%;
}
.question-inner .question {
    position: absolute;
    width: 45%;
    border: 1px solid #dedede;
    background: #F5F5F5;
    box-shadow: 1px 1px 6px rgba(20, 20, 20, 0.4);
    padding: 30px;
}
.question-inner .question:nth-child(even) {
    left: 0;
}
.question-inner .question:nth-child(odd) {
    right: 0;
}
.question-inner .question.q1 {
  top: 10%;
}
.question-inner .question.q2 {
  top: 10%;
}
.question-inner .question.q3 {
  top: 30%;
}
.question-inner .question.q4 {
  top: 30%;
}
.question-inner .question.q5 {
  top: 60%;
}
.question-inner .question.q6 {
  top: 60%;
}
.ques {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #adadad;
}
.answer {
    font-size: 18px;
    font-weight: normal;
}
</style>
