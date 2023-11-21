<template>
    <div class="coursesContainer">
        <div class="search-header-title h1 ">
            <span v-if="query">{{list.length}} resultados para {{query}}</span>
            <span v-else-if="subCategory" >{{list.length}} resultados para {{subCategory}}</span>
            <span v-else-if="category" >{{list.length}} resultados para {{category}}</span>
        </div>
        <main>
            <div class="optionsCommands d-flex gap-2">
                <div class="btnOpenClose d-flex gap-2 justify-content-center align-items-center" >
                    <div>
                        <i class='bx bx-transfer-alt' style="font-size: 1.5rem;"></i>                        </div>
                    <span>Filtrar</span>
                </div>
                 
                <div class=" btnFilter d-flex justify-content-between" @click="showSelectOptions">
                    <div class="d-flex flex-column">
                        <span class="title_sortBy">Ordenar Por</span>
                        <div class="select_filter">
                            <div class="selected-option">{{ selectedOption }}</div>
                            <div v-if="showOptions" class="options">
                                <div 
                                class="option" 
                                v-for="(option, index) in options" 
                                :key="index"
                                @click="selectOption(option,index)"
                                >
                                    {{ option }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container_iconChevron">
                    <i class='bx bx-chevron-down' style="font-size: 1.5rem;"></i>
                </div>
            </div>
            </div>
            <div class="d-flex">
                <aside>
                    <div class="valoracionByStarts" >
                        <div>
                            <span>Valoraciones</span>
                        </div>
                        <div class="valoraciones d-flex flex-column gap-2">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="container_listCourses">
                    <div class="d-flex flex-column gap-2">
                        <div  v-for="(course,index) of list" :key="index" @click="goToCourseInfo(course.courseId)" >
                            <div class="card_body d-flex gap-2"> 
                                <img
                                class="img-fluid courseImg"
                                :src="course.image"
                                />
                                <div class="d-flex " style="width: 100%;">
                                    <div class="bodyInfo">
                                        <p class="body_title">{{course.tittle}}</p>
                                        <p class="body_description">{{course.description}}</p>
                                        <span class="body_userInfo">{{course.user.nameUser }} {{course.user.family_name}}</span>
                                        <div>
                                            <div>
                                                <span class="qualification">{{qualification(course)}}</span>
                                                <span>
                                                <!-- <i class='bx '></i> -->
                                                <i v-for="(star, index) in 5" :key="index" style="font-size: .8rem;color: #ffd700;" class="bx" :class="{ 'bxs-star': index < filledStars1(course), 'bx-star': index >= filledStars1(course)}"></i>
                                                <span  class="body_quantityPeople">({{course.comments.length}})</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="precio d-flex justify-content-end">
                                        <span class="body_coursePrice" >{{course.precio}} S/</span>
                                    </div>
                                </div>          
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pagination">
                       <ul> 
                        <li class="btn prev" @click="createPagination(totalPages, page - 1)"><span><i class="fas fa-angle-left"></i> Prev</span></li>
                        <li class="btn prev" @click="createPagination(totalPages, page - 1)"><span><i class="fas fa-angle-left"></i> Prev</span></li>
                       </ul>
                    </div> -->
                </div>
            </div>
        </main>
      <Footer/>
    </div>

</template>
<script>
import axios from 'axios';
import {filledStars} from '../helper/dataManagment'
import Footer from "../components/Footer.vue";

export default{
    name: "Courses",
    components: {
    Footer,   
    },
    props : ['category', 'subCategory','query','topic'],
    data(){
        return {
            list  : [],
            totalPages: 20,
            page : 10,
            showOptions: false,
            options: ['Más relevante', 'Los más comentados', 'Más recientes'],
            selectedOption: 'Más relevante' ,
        }
    },
    computed : {
        computedProp(){
            return {
                query : this.query,
                category : this.category,
                subCategory : this.subCategory,
                topic : this.topic
            }
            // return this.query
        },
    },
    watch : {
        computedProp() {
        if (this.query) {
            this.searchByQuery()
        }else{
            this.searchByParams()
        }
       },
    },
    methods : {
        goToCourseInfo(courseId){
            this.$router.push(`/coursesInfo/${courseId}`)
        },
        showSelectOptions() {            
            this.showOptions = !this.showOptions;
            
        },
        async selectOption(option,index) {
            this.selectedOption = option;
            this.showOptions = false;
            this.showSelectOptions()
            console.log("index "+index)
            switch (this.options[index]) {
                case this.options[0]:
                break;
                case this.options[1]:
                const res1 =await axios.get(`http://localhost:3000/course/search?q=${this.query}`)
                this.list = [...res1.data.data].sort((a,b)=> b.comments.length-a.comments.length)
                break;
                case this.options[2]:
                    
                break;
            }
        },
        async searchByQuery(){
            try {
                const res =await axios.get(`http://localhost:3000/course/search?q=${this.query}`)
                this.list = [...res.data.data]
                console.log(this.list.length)
            } catch (error) {
                console.log(error)
                this.list=[]
            }
        },
        qualification(course){
            let result = filledStars(course)
            return Number(result.toFixed(1));
        },
        filledStars1(course){
            let result = this.qualification(course)
            return result
        },
        async searchByParams(){
           
            const url = 'http://localhost:3000/course/options'
            let params = `${this.category}`
            try {
                console.log(this.topic)
                if (this.topic){
                    const res = await axios.get(`http://localhost:3000/course/topic/${this.topic}`)
                    this.list = [...res.data.data]
                }else{
                    if (this.subCategory) params = `${this.category}/${this.subCategory}`
                    const res =await axios.get(`${url}/${params}`)
                    this.list = [...res.data.data]
                }
            } catch (error) {
                this.list=[]
            }
        }
    },
    created(){
        // this.list = []
        if (this.query) {
            this.searchByQuery()
        }else{
            this.searchByParams()
        }
        
    }
}
</script>
<style>
@import'../assets/courses.css';
</style>