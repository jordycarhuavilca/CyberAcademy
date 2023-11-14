<script>
import Menu from "./components/Menu.vue";
export default{
  components : {
    Menu
  },
  data() {
    return {
      isMenuVisible: true, // Set to true to initially show the menu
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

  }
  }
}
</script>

<template>
  <div>
    <header v-if="isMenuVisible">
      <Menu />
    </header>
    <router-view></router-view>
  </div>
  <div></div>
</template>
