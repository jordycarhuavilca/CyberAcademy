<template>
  <div v-if="listCourses.length >= 1">
    <swiper
     class="ps-5  d-flex justify-content-center align-items-center"
     :modules="modules"
     :slides-per-view="10"
     :spaceBetween="1"
     :centeredSlides = "isMaxSize"
     :breakpoints="{
       '@0.00': {
         slidesPerView: 1,
        //  spaceBetween: 1,
       },
       '@0.75': {
         slidesPerView: 2,
         spaceBetween: 1,
       },
       '@1.00': {
         slidesPerView: 2,
         spaceBetween: 1,
       },
       '@1.10': {
         slidesPerView: 3,
         spaceBetween: 1,
       },
       '@1.65': {
         slidesPerView: 4,
         spaceBetween: 1,
       },
       '@2.00': {
         slidesPerView: 5,
         spaceBetween: 1,
       },
     }"
     @breakpoint="adjustSize"
     navigation
     @swiper="onSwiper"
     @slideChange="onSlideChange"
   >
     <!-- <swiper-slide class="m-0 pl-5">
       <div class="swiper-slide_body">
           <img
             class="img-fluid"
             :src="listCourses[0].image"
           />
         <div>
          <p>{{listCourses[0].tittle}}</p>
          <span>author</span>
          <div>
            <span>4,6</span>
            <span>estrellita</span>
            <span>(total)</span>
          </div>
         </div>          
       </div>
     </swiper-slide> -->
     <swiper-slide v-for="(list,index) of listCourses" :key="index">
      <div class="swiper-slide_body">
           <img
             class="img-fluid"
             :src="list.image"
           />
         <div>
          <p>{{list.tittle}}</p>
          <span>author</span>
          <div>
            <span>4,6</span>
            <span>estrellita</span>
            <span>(total)</span>
          </div>
         </div>          
       </div>
     </swiper-slide>
   </swiper>

  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {ref} from 'vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props : {
    listCourses : Array
  },
  data(){
    return {
      isMaxSize  :false
    }
  },
  methods: {
    adjustSize(breakpoint) {
      if (breakpoint.currentBreakpoint === "@0.00") this.isMaxSize = true;
      else this.isMaxSize = false
    },
  },
  setup() {
    const isMaxSize = ref(true);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };  
    return {
      isMaxSize,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
}
</script>

<style>
/* @import "../assets/announce.css"; */

@import "../assets/slide.css";
/* @import "bulma/css/bulma.css"; */
@import "@splidejs/vue-splide/css/core";
/* @import "bootstrap/dist/css/bootstrap.css"; */
</style>