<!-- MySliderComponent.vue -->
<template>
    <div class="slider-container">
      <div class="slider" :style="{ transform: 'translateX(' + translateValue + ')' }">
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.src" :alt="slide.alt" />
        </div>
      </div>
    </div>
    <button class="prev-button" @click="prevSlide">Previous</button>
    <button class="next-button" @click="nextSlide">Next</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          { src: 'https://th.bing.com/th/id/OIP.zc50QULDr7w0E6vkJO1ATgHaE7?pid=ImgDet&rs=1', alt: 'Slide 1' },
          { src: 'https://thumbs.dreamstime.com/b/beautiful-river-mountain-landscape-scenery-glen-coe-scottish-highlands-scotland-mystic-146371153.jpg.jpg', alt: 'Slide 2' },
          { src: 'https://th.bing.com/th/id/OIP.oOX19piRiq1H7IbWgqaEzwHaE7?pid=ImgDet&rs=1', alt: 'Slide 3' },
          { src: 'https://th.bing.com/th/id/OIP.G0pz_hM5WRcBDLooMTJ_lgHaEl?pid=ImgDet&rs=1', alt: 'Slide 4' },
          { src: 'https://th.bing.com/th/id/OIP.fUMN8bgVHrMCkm4stBcOJgHaE7?pid=ImgDet&rs=1', alt: 'Slide 5' },
          // Add more slides as needed
        ],
        currentIndex: 0,
        slideWidth: 0,
      };
    },
    computed: {
      translateValue() {
        return `-${this.currentIndex * this.slideWidth}px`;
      },
    },
    mounted() {
      this.slideWidth = this.$el.querySelector('.slide').offsetWidth;
    },
    methods: {
      nextSlide() {
        if (this.currentIndex < this.slides.length - 3) {
          this.currentIndex += 3; // Move to the next group of three slides
        } else {
          this.currentIndex = 0; // Loop back to the first group of three slides
        }
      },
      prevSlide() {
        if (this.currentIndex >= 3) {
          this.currentIndex -= 3; // Move to the previous group of three slides
        } else {
          // If at the beginning, loop to the last group of three slides
          const lastGroupIndex = this.slides.length - (this.slides.length % 3) - 3;
          this.currentIndex = lastGroupIndex;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  