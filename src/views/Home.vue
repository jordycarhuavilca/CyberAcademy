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

  <div class="partnerCompanies p-sm-5 p-lg-0">
    <div class="listCompanies  gap-5 d-flex flex-column align-items-center justify-content-center">
      <h1>Más de 200 empresas y millones de estudiantes en todo latinoamerica confían en nosotros</h1>
      <ul class="listaItems d-flex gap-sm-5 flex-wrap justify-content-evenly">
        <li v-for="(img,index) of listPartnerComp" :key="index">
          <img :src="img" alt="">
        </li>
      </ul>
    </div>
  </div>

  <div class="discovery-units">
    <div>
      <h1 class="h2">Una amplia selección de cursos</h1>
      <p>Elige entre más de 210.000 cursos de vídeo en linea con nuevo contenido cada mes</p>
      
      <div>
        <div class="CategoriasOpciones">
          <div>
            <ul class="listCategorias d-flex gap-4">
              <li v-for="(option,index) of listOptions" @click="chooseOption(option)" :key="index">{{option.name}}</li>
            </ul>
          </div>

          <div class="containerCategory">
            <div class="descriptionCategory">
              <h1 class="h4">Amplía tus oportunidades profesionales</h1>
              <p class="description">Tanto si trabajas en el segmento del aprendizaje automático o de las finanzas como si deseas desarrollar tu carrera en ciencias de datos o desarrollo web, Python es una de las habilidades más importantes que puedes aprender. La sencilla sintaxis de Python es especialmente adecuada para equipos de escritorio, web y...</p>
              <!-- <button class="btn-explorer">Explorar {{otio}}</button>             -->
              <br>
            </div>
            <div>
              <Swiper :list="listCourseByCate"/>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>


  <main class=" container-mostPopularCourses">
    <div
      class="my-4 d-flex justify-content-center align-items-center d-sm-block"
    >
      <p class="h4 ms-sm-5 pt-3 pb-3">Los cursos mas populares</p>
    </div>
    <div class="ps-4">
      <Swiper :list="listMostPurchases"/>
    </div>

    <div v-if="listSearchedCourse.length > 1">
        <div
        class="my-4 d-flex justify-content-center align-items-center d-sm-block"
        >
        <div class="h4 d-flex gap-2 ms-sm-5 pt-3 pb-3">
          <span class="">Por que buscaste </span>
          <span style="color : #5624d0;font-weight: 800;" > "{{searchedWord}}" </span>

        </div>
        </div>
        <div class="ps-4">
          <Swiper :list="listSearchedCourse"/>
        </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import {getMostPopularId} from '../helper/dataManagment'
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
      listMostPurchases: [],
      listCourseByCate : [],
      listPartnerComp : [
        "https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg",
        "https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg",
        "https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg",
        "https://s.udemycdn.com/partner-logos/ou-v1/att.svg",
        "https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg",
        "https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg",
        "https://s.udemycdn.com/partner-logos/ou-v1/citi.svg",
        "https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg",

      ],
      listOptions : [
        {name :'Python',type : 'topic' },
        {name :'Excel',type : 'topic' },
        {name :'Desarrollo Web',type : 'subcate' },
        {name :'Javascript',type : 'topic'},
        {name :'Ciencias de la información',type : 'subcate'},
        {name :'Amazon AWS' ,type : 'topic'}
      ],
      listSearchedCourse : [],
      searchedWord : ''
    };
  },
  methods : {
    async chooseOption(option){
      if (option.type !== 'subcate') {
        let list= await axios.get(`http://localhost:3000/course/topic/${option.name}`)
        this.listCourseByCate = list.data.data
      }else{
        let list= await axios.get(`http://localhost:3000/course/options/Desarrollo/${option.name}`)
        this.listCourseByCate = list.data.data
      }
    }
  },
  async created(){
   
    try {
      let courseName = localStorage.getItem('courseName')
      if(courseName){
        const res =await axios.get(`http://localhost:3000/course/search?q=${courseName}`)
        this.listSearchedCourse =res.data.data 
        this.searchedWord = courseName
      }
      const userCourse = await axios.get('http://localhost:3000/user/get/purchaseCourses')         
      let listCourses = await axios.get('http://localhost:3000/course/info')
      let listData = await axios.get(`http://localhost:3000/course/options/Desarrollo/Desarrollo Web`)
      this.listCourseByCate = listData.data.data
      // let listCategory = await axios.get('http://localhost:3000/course/category')
      // listCategory.data.data
      const listId = getMostPopularId(userCourse.data.data,8)
      listCourses = listCourses.data.data
      this.listMostPurchases =  listCourses.reduce((a,b)=>{
        
        if (Object.keys(listId).includes(b.courseId.toString())) {
          a.push(b)
        }
        return a
      },[])
      
    } catch (error) {
      console.log(error)
      if (error.code === 'ERR_NETWORK') {
        
      }
    }
  }
};
</script>|


<style>
@import "../assets/announce.css";
@import "../assets/home.css";
@import "bulma/css/bulma.css";
@import "@splidejs/vue-splide/css/core";

</style>
