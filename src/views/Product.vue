<template>
  <div class="product">
    
    <!-- Section 1 - Hero Image -->
    <HeroImage />

    <!-- Section 2 Activity Banner -->
    <ActivityBanner />

    <!-- Section 3 Shop here -->
    <ShopHere />

    <!-- Section 4 product -->
    <Product1 />

    <!-- Section 5 HLM Features -->
    <HLMFeature />

    <!-- Section 6 Product -->
    <Product2 />

    <!-- Section 7 Pet Lovers -->
    <PetLovers />
  </div>
</template>

<script>
import HeroImage from '../components/product/HeroImage'
import ActivityBanner from '../components/product/ActivityBanner'
import ShopHere from  '../components/product/ShopHere'
import Product1 from  '../components/product/ProductCategory1'
import HLMFeature from  '../components/product/HLMFeatures'
import Product2 from  '../components/product/ProductCategory2'
import PetLovers from  '../components/product/PetLovers'

export default {
  name: 'Product',
  components: {
    HeroImage,
    ActivityBanner,
    ShopHere,
    Product1,
    HLMFeature,
    Product2,
    PetLovers
  },
  created() {

  },
  mounted() {
    this.$store.state.routeName = 'Product'
  }
}
</script>

<style scoped>

</style>