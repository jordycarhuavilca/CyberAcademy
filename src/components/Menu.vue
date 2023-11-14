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
        <a class="logo-tittle" @click="this.$router.push('/')">FastFood</a>
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
        <form
          action=""
          method="dialog"
          class="search-bar d-flex align-items-center justify-content-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5246/5246837.png"
            alt=""
            style="height: 1.5rem; width: 1.5rem"
          />
          <input type="text" placeholder="Buscar en Fast Food" class="search" />
          <i class="bx bx-search" style="font-size: 1.3rem"></i>
        </form>
      </div>
      <!--User-->
      <div class="container-user-carrito col-auto d-flex align-items-center">
        <div @click="this.$router.push('/login')" style="cursor: pointer">
          <i class="bx bx-user-circle" style="font-size: 24px"></i>
        </div>
        <div
          class="container-user-carrito_txt_usuario d-none d-xl-block txt_font2_menuDespleagable text-decoration-none"
          @click="this.$router.push('/login')"
          style="cursor: pointer"
        >
          Usuario
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
export default {
  name: "Menu",
  components: {
    Sidebar,
  },
};
</script>
<style>
@import "../assets/menu.css";
@import url("https://fonts.googleapis.com/css2?family=Erica+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@700&display=swap");
@import "bootstrap/dist/css/bootstrap.css";
</style>
