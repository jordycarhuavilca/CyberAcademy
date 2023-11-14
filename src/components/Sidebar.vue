<template>
  <nav :class="{ open: isOpen }">
    <div class="logo">
      <i @click="enable" class="bx bx-menu menu-icon"></i>
    </div>
    <div class="sidebar">
      <div class="logo d-flex justify-content-between align-items-center">
        <img
          class="logo-name"
          src="https://cdn-icons-png.flaticon.com/512/5246/5246837.png"
          alt=""
          style="height: 1.5rem; width: 1.5rem"
        />
        <div class="pe-4">
          <i
            @click="disable"
            class="bx bxs-x-circle"
            style="
              color: rgba(0, 0, 0, 0.5);
              font-size: 1.5rem;
              cursor: pointer;
            "
          ></i>
        </div>
      </div>
      <div class="sidebar-content">
        <ul class="lists">
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-home-alt icon"></i>
              <span class="link">Dashboard</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-bar-chart-alt-2 icon"></i>
              <span class="link">Revenue</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-bell icon"></i>
              <span class="link">Notifications</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-message-rounded icon"></i>
              <span class="link">Messages</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-pie-chart-alt-2 icon"></i>
              <span class="link">Analytics</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-heart icon"></i>
              <span class="link">Likes</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-folder-open icon"></i>
              <span class="link">Files</span>
            </a>
          </li>
        </ul>
        <div class="bottom-cotent">
          <li class="list">
            <a href="#" class="nav-link">
              <i class="bx bx-cog icon"></i>
              <span class="link">Settings</span>
            </a>
          </li>
          <li class="list">
            <div @click="logOut" class="nav-link" style="cursor: pointer;">
              <i class="bx bx-log-out icon"></i>
              <span class="link">Logout</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  </nav>
  <section @click="disable" class="overlay"></section>
</template>

<script>

import Swal from 'sweetalert2'

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    logOut() {
        Swal.fire({
        title: "¿Estas seguro de salir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
      }).then((result)=>{
        if(result.isConfirmed){
          console.log('Logout confirmed')
        }
      });
    },
    enable() {
      this.isOpen = true;
    },
    disable() {
      this.isOpen = false;
    },
  },
};
</script>
<style>
@import "../assets/sidebar.css";
@import "bootstrap/dist/css/bootstrap.css";

/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"); */
</style>
