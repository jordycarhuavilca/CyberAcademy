<template>
  <div class="banner d-flex flex-column justify-content-center align-items-center">
    <h1>¡SE VIENEN LOS DESCUENTOS!</h1>
    <p class="h3">Y TU LO SABES</p>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      listimg: [
        "https://raw.githubusercontent.com/jordycarhuavilca/fast-food/master/img/icon-food/3d-fluency-hamburger.png",
        "https://raw.githubusercontent.com/jordycarhuavilca/fast-food/master/img/icon-food/burger_fast_food_icon_181517.png",
        "https://raw.githubusercontent.com/jordycarhuavilca/fast-food/master/img/icon-food/donut.png",
        "https://raw.githubusercontent.com/jordycarhuavilca/fast-food/master/img/icon-food/french_fries.png",
        "https://raw.githubusercontent.com/jordycarhuavilca/fast-food/master/img/icon-food/soda_drink.png",
      ],
      currentImg:
        "https://raw.githubusercontent.com/jordycarhuavilca/fast-food/master/img/icon-food/3d-fluency-hamburger.png",
      index: 0,
      intervalId: null,
    };
  },
  methods: {
    changeImg() {
      let isNotOutIndex = this.index < this.listimg.length ? true : false;
      if (isNotOutIndex) {
        this.currentImg = this.listimg[this.index];
        this.index++;
      } else this.index = 0;
    },
  },
  mounted() {
    setInterval(() => {
      this.changeImg();
    }, 2000);
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
};
</script>
<style>
@import "../assets/banner.css";
</style>
