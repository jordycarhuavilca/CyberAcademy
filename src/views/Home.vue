<template>
  <div class="annou" id="annou" v-if="isActive">
    <div class="annou__content">
      <img
        class="annou__icon3dFrench-fries"
        src="https://raw.githubusercontent.com/jordycarhuavilca/fast-food/master/img/icon-food/french_fries.png"
        alt=""
      />
      <p class="annou__text d-none d-md-block">
        ¿Nuevo en Fast Food? Disfuta de...
      </p>
      <span class="annou__text-span">¡Entrega gratis por 30 dias!</span>
      <a href="./html/Login-ux-design.html h1 text-sm" class="btn-Registar"
        >Registrarme</a
      >
      <a
        href="./html/Condiciones.html"
        class="annou__text-terms d-none d-md-block"
        >Terminos y condiciones</a
      >
      <i
        @click="isActive = !isActive"
        class="bx bxs-x-circle"
        style="
          color: rgba(222, 213, 213, 0.5);
          font-size: 1.5rem;
          cursor: pointer;
        "
      ></i>
    </div>
  </div>
  
  <div>
    <Banner />
  </div>
  <main>
    <div
      class="my-4 d-flex justify-content-center align-items-center d-sm-block"
    >
      <p class="h4 ms-sm-5 pt-3 pb-3">Top restaurantes cerca de ti</p>
    </div>
    <div class="ps-4">
      <Swiper :listCourses="listCourses"/>
    </div>
  </main>

  <div class="pb-5 pt-5">
    <div
      class="my-4 d-flex justify-content-center align-items-center d-sm-block"
    >
      <p class="h4 ms-sm-5 pt-3 pb-3">Top mercados cerca de ti</p>
    </div>
    <Splide/>
  </div>
  <Footer />
</template>

<script>
import Banner from "../components/Banner.vue";
import Footer from "../components/Footer.vue";
import Splide from "../components/customSplideSlide.vue";
import Swiper from "../components/customSwiperSlide.vue";
import axios from 'axios';
export default {
  name: "Home",
  components: {
    Banner,
    Footer,
    Splide,
    Swiper
  },
  data() {
    return {
      isActive: false,
      listCourses : [],
      listPurchases: []
    };
  },
  async beforeCreate(){
    try {
      const listCourses = await axios.get('http://localhost:3000/course/list-courses')
      const getAllPurchases = await axios.get('http://localhost:3000/payment/getAllPurchases')      
      this.listCourses = listCourses.data.data
      this.listPurchases = getAllPurchases.data.data
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        
      }
    }
  }
};
</script>|


<style>
@import "../assets/announce.css";
@import "bulma/css/bulma.css";
@import "@splidejs/vue-splide/css/core";

</style>
