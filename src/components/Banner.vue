<template>
  <div class="banner d-flex justify-content-around align-items-center">
    <aside class="banner___aside-left">
      <img id="banner__junkFood" :src="currentImg" alt="" />
    </aside>
    <section
      class="banner__text d-flex flex-column align-items-center text-center"
    >
      <h1>¡30 días de entrega gratis!</h1>
      <p class="h3">a todo el <span>Peru</span></p>
      <a
        href="./html/carrito/comida__china.html"
        class="banner__btn-pedir-ahora"
      >
        pide ahora
      </a>
    </section>
    <aside class="banner___aside-right align-self-end">
      <article class="align-self-end">
        <img
          src="https://ouch-cdn2.icons8.com/Km7duGOEYNVt50aTVN1venNU5G5RfMaD_1R8CdaR5Qo/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzIx/LzlhNDU2Mzc2LTZi/MzctNGFhOS04N2E4/LWVhODdiNjM2MmYw/Ny5zdmc.png"
          alt=""
        />
      </article>
    </aside>
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
