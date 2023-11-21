<script>
import Menu from "./components/Menu.vue";
export default{
  components : {
    Menu
  },
  data() {
    return {
      isMenuVisible: true, // Set to true to initially show the menu
      userInfo : {}
    };
  },
  watch : {
    $route(to, from){
      // Check the current route and hide the menu if needed
      console.log(to.name)
      if (to.name === "login") {
        this.isMenuVisible = false;
      } else {
        this.isMenuVisible = true;
      }
      if (to.name ==='home') {        
        const payload = this.$route.query;
        if (Object.keys(payload).length > 0) {
          
          localStorage.setItem('payload',JSON.stringify(payload))
          this.userInfo = payload
      }
      }
  }
  }
}
</script>

<template>
  <div>
    <header v-if="isMenuVisible"  >
      <Menu :payload="userInfo"/>
    </header>
    <router-view></router-view>
  </div>
  <div></div>
</template>

<style scoped>

body {
  overflow: hidden;
  position: relative;
}
</style>
