<template>
   <Splide
      :options="splideOptions"
      aria-label="My Favorite Images"
      class="ps-5 px-5"
    >
      <SplideSlide
        v-for="({ image, razonSocial }, index) in markets"
        :key="index"
      >
        <div
          class="d-flex flex-row justify-content-center gap-2 align-items-center"
        >
          <figure class="image is-64x64">
            <img class="rounded" :src="image" :alt="razonSocial" />
          </figure>
          <div>
            <span style="font-size: 0.8rem">{{ razonSocial }}</span>
          </div>
        </div>
      </SplideSlide>
    </Splide> 
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default{
    components: {
    Splide,
    SplideSlide,
  },
  data(){
    return{
      markets: [
        {
          numImg: 0,
          image:
            "https://images.rappi.pe/marketplace/store_type_1692726265362.png",
          razonSocial: "Holi",
        },
        {
          numImg: 1,
          image:
            "https://images.rappi.pe/marketplace/store_type_1692726530893.png",
          razonSocial: "Flora & Fauna",
        },
        {
          numImg: 2,
          image:
            "https://images.rappi.pe/marketplace/store_type_1686329283463.png",
          razonSocial: "La Cesta",
        },
        {
          numImg: 3,
          image:
            "https://images.rappi.pe/marketplace/store_type_1692726517774.png",
          razonSocial: "Spid",
        },
        {
          numImg: 4,
          image:
            "https://images.rappi.pe/marketplace/store_type_1692715407645.png",
          razonSocial: "Wong",
        },
        {
          numImg: 5,
          image:
            "https://images.rappi.pe/marketplace/store_type_1692726100440.png",
          razonSocial: "Metro",
        },
        {
          numImg: 6,
          image:
            "https://images.rappi.pe/marketplace/almeco_mt_nc-1665068053665.jpeg",
          razonSocial: "Almeco",
        },
        {
          numImg: 7,
          image:
            "https://images.rappi.pe/marketplace/freshmart_mt_nc-1691425932787.jpeg",
          razonSocial: "Freshmart",
        },
      ],
    }
  },
  setup() {
    const splideOptions = {
      rewind: true,
      type: "slide",
      start: 0,
      perPage: 2,
      gap: "1em",
      arrows: false,
      pagination: false,
      mediaQuery: "min",
      breakpoints: {
        1048: {
          perPage: 6,
        },
        600: {
          perPage: 4,
        },
        500: {
          perPage: 3,
        },
      },
    };
    return {
      splideOptions
    }
  }
}

</script>