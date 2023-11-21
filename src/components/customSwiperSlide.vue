<template>
  <div v-if="list.length >= 1">
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
     <swiper-slide v-for="(course,index) of list" :key="index">
      <card_course :course="course"/>
     </swiper-slide>
   </swiper>

  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import card_course from "../components/card_course.vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {ref} from 'vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    card_course
  },
  props : {
    list : Array
  },
  data(){
    return {
      isMaxSize  :false,
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
    };
    const onSlideChange = () => {
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
@import "@splidejs/vue-splide/css/core";
</style>