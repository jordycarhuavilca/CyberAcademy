<template>
    <div>
        <div class="my-courses__app">
            <div class="my-courses__app_title">
                Mi aprendizaje
            </div>  
            <div class="listOptions">
                <ul  class="d-flex gap-3">
                    <li class="item" :class="{'active':isActive}" @click="addStyle">Todos los cursos</li>
                    <li class="item" :class="{'active': !isActive}" @click="addStyle">Lista de deseos</li>
                </ul>
            </div>
        </div>
        <div class="containerMid">
            <div class="searchBar_wishlist d-flex justify-content-end">
                <div class="">
                    <input class="searchInput" type="text" placeholder="Buscar mis cursos">
                    <button class="btn-search">
                        <i class='bx bx-search' style="color : #f1f1f1;" ></i>
                    </button>
                </div>
            </div>
            <div  class="containerWishLIst">
                <div v-for="(fav,index) of  list" :key="index">
                    <card_course :course="fav.course"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import card_course from '../components/card_course.vue'
export default {
    components : {
        card_course
    },
    data(){
        return {
            isActive : false,
            list : []
        }
    },
    methods : {
        addStyle(){
            this.isActive = !this.isActive
        }
    },
    async created(){
        let payload = JSON.parse(localStorage.getItem('payload'))
        const res = await axios.get(`http://localhost:3000/payment/wishlist/${payload.sub}`)
        this.list = res.data.data   
        console.log(JSON.stringify(this.list)) 
   }
}
</script>
<style>
@import '../assets/wishlist';
</style>