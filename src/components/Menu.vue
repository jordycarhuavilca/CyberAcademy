<template>
  <div class="row pt-2 m-0 d-flex align-items-center flex-nowrap">
    <div class="d-flex flex-nowrap align-items-center justify-content-center">
      <Sidebar />
      <div id="icon-list" class="col-auto">
        <a @click="this.$router.push('/')" id="hamburgerIcon">
          <i class="bi bi-list" style="font-size: 1.5em"></i>
        </a>
      </div>
      <div class="col-auto d-flex d-none d-md-block align-items-center">
        <a class="logo-tittle" @click="this.$router.push('/')">Cyber Academy</a>
      </div>
      <div class="style-container-location col-1 d-none d-lg-block">
        <div>
          <a
            href="#"
            class="ps-4 d-flex flex-nowrap align-items-center text-decoration-none"
          >
            <i class="bx bxs-map" style="font-size: 1.3em; color: #0071e3"></i>
            <span class="container-location_lima">Lima</span>
          </a>
        </div>
      </div>
      <!-- Search-bar -->
      <div class="menuPrincipal col container-search-bar">
        <div
          class="search-bar d-flex align-items-center justify-content-center"
        >
      
          <img
            src="https://cdn-icons-png.flaticon.com/512/5246/5246837.png"
            alt=""
            style="height: 1.5rem; width: 1.5rem"
          />
          <input type="text" @keyup="search()" @keypress.enter="goToCourse"  v-model="query" placeholder="Buscar en Cyber Academy " class="search" />
            <i class="bx bx-search" @click="goToCourse"  style="font-size: 1.3rem; cursor: pointer;"></i>
          <div class="searchOptions" v-if="list.length >= 1">
            <ul>
              <div class="ListOptions d-flex flex-column gap-2 ">
              <li v-for="(course,index) in list" :key="index"  @click="goToCourseInfo(course.courseId)"  class="p-4 option d-flex align-items-center">
                  <div class="containOptions d-flex gap-2">
                    <img
                    class="img-fluid"
                    :src="course.image"
                    />
                    <div class="d-flex flex-column">
                      <span class="tittleOption">{{course.tittle}}</span>
                      <span class="authorOption">{{course.user.nameUser}} {{course.user.family_name}}</span>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
     
      <!--User-->
      <div class="container-user-carrito col-auto d-flex align-items-center">
        <div class="d-flex align-items-center" @click="this.$router.push('/join/login')" style="cursor: pointer">
          <div v-if="userInfo" class="">
            <figure class="image is-24x24">
              <img class="is-rounded" :src=" userInfo.picture">
            </figure>
          </div>
          <i v-else class="bx bx-user-circle" style="font-size: 24px"></i>
        </div>
        <div
          class=" container-user-carrito_txt_usuario d-none d-xl-block txt_font2_menuDespleagable text-decoration-none"
          @click="this.$router.push('/my-courses/wishlist')"
          style="cursor: pointer"
        >
        <i style="font-size: 1.5rem;" class='bx bx-heart' ></i>
        </div>
        <a href="./html/carrito/carrito.html">
          <i class="bx bx-cart" style="font-size: 24px"></i>
          <!-- <span id="numerito" class="numerito">0</span> -->
        </a>
      </div>
    </div>
  </div>
  
</template>
<script>
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import {limit} from '../helper/dataManagment'
export default {
  name: "Menu",
  components: {
    Sidebar,
  },
  data(){
    return{
      query : '',
      list : [],
      userInfo : ''
      // isFull : false
    }
  },
  methods : {
    goToCourseInfo(courseId){
      this.list = []
      this.$router.push(`/coursesInfo/${courseId}`)
    },
    goToCourse(){
      localStorage.setItem('courseName',this.query)
      this.$router.push(`/courses/search?q=${this.query}`)
      this.list = []
      this.query=''
    },
    async search(){
      try {
        if (this.query) {
          const res =await axios.get(`http://localhost:3000/course/search?q=${this.query}`)
          if (res.data.data.length >= 1) {
            let listValues = limit(res.data.data,5)
            this.list = [...listValues]
          }
          else{
            this.list = []
          }
        }else{
          this.list=[]
        }
        
      } catch (error) {
        this.list=[]
      }
    }
  },
  updated(){
    this.userInfo =JSON.parse(localStorage.getItem('payload'))
  },
  mounted(){
    this.userInfo =JSON.parse(localStorage.getItem('payload'))
  },
  created(){
    this.userInfo =JSON.parse(localStorage.getItem('payload'))
  }
};
</script>
<style>
@import "../assets/menu.css";
@import url("https://fonts.googleapis.com/css2?family=Erica+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@700&display=swap");
@import "bootstrap/dist/css/bootstrap.css";
</style>
