<template>
    <div v-if="course.length >= 1" class="courseInfo_container">
        <div class="d-flex top-container ">
            <div v-for="(c,index) of course" :key="index" class="d-flex flex-column top-container-rightSide">
                <div class="topic-menu d-flex align-items-center gap-1">
                    <div @click="goToCourses(category)">
                        {{category}}
                    </div>
                    <i class='bx bx-chevron-right'></i>
                    <div @click="goToCourses(category,subCategory)">
                        {{subCategory}}
                    </div>
                    <i class='bx bx-chevron-right'></i>
                    <div @click="goToCoursesByTopic(topic)">
                        {{topic}}
                    </div>
                </div>
                <div class="h2 top_container_title">{{c.tittle}}</div>
                <div class="top_container_description">{{c.description}}</div>
                <div class="">
                    <div class="d-flex gap-1 align-items-center">
                        <span class="body_qualification">{{qualification(c)}}</span>
                        <i v-for="(star, index) in 5" :key="index" style="font-size: .8rem;color: #f69c08;" class="bx" :class="{ 'bxs-star': index < filledStars1(c), 'bx-star': index >= filledStars1(c)}"></i>
                        <span @click="scrollToBottom"  class="body_quantityPeople">({{c.comments.length}} calificaciones)</span>
                        <span  class="top_container_totalStudents">{{c.comments.length}} estudiantes</span>
                    </div>
                    <div class="course_creator">
                        Creado por {{c.user.nameUser}} {{c.user.family_name}}
                    </div>
                    <div class="d-flex gap-3 clp-lead__element-meta">
                        <div  class="d-flex gap-2 align-items-center">
                            <i class='bx bx-error-alt'></i>
                            <span>Última actualización: {{getFormatTime(c.updatedAt)}}</span>
                        </div>
                        <div  class="d-flex gap-2 align-items-center">
                            <i class='bx bx-globe'></i>
                            <span>Español</span>
                        </div>
                        <div  class="d-flex gap-2 align-items-center">
                            <i class='bx bxs-captions' ></i> 
                            <span>Español [automático]</span>               
                        </div>
                    </div>
                </div>
            </div>
            <div class="courseDetails">
                <div>
                    <div class="courseDetails_img">
                        <img class="" :src="course[0].image" alt="">
                    </div>
                    <div class="courseDetail_info">
                        <div class="d-flex flex-column">
                            <span class="courseDetail_info_price h5 m-0">{{course[0].precio}} S/</span>
                            <span v-if="course[0].oferta > 0" class="descuento">{{parseFloat(course[0].oferta) * 100}}% de descuento</span>
                        </div>
                        <div class="d-flex flex-column gap-2 mt-3">
                            <div class="d-flex gap-2 align-items-center">
                                <button class="btn_addToCart">Añadir a la cesta</button>
                                <button class="btn_heart d-flex align-items-center" @click="addwishlist(course[0].courseId)">
                                    <i class="bx" :class='{"bx-heart": !isLike,"bxs-heart": isLike} ' style="font-size: 1.5rem;"></i>
                                </button>
                            </div>
                            <div>
                                <button class="btn-buy">Comprar ahora</button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center garantyInfo pt-4">
                            <span>Garantía de reembolso de 30 días</span>
                        </div>
                        <div class="courseDetail mt-4">
                            <span class="top_title">Este curso incluye:</span>
                            <div class="pt-2">
                                <ul class="d-flex flex-column gap-1">
                                    <li class="d-flex align-items-center gap-1 detailItems">
                                        <i class='bx bx-play-circle' ></i>
                                        <span>
                                            {{course[0].courseDetail['hours']}}
                                        </span>
                                        <span>
                                            horas de vídeo bajo demanda
                                        </span>
                                    </li>
                                    <li class="d-flex align-items-center gap-1 detailItems">
                                        <i class='bx bxs-book-alt'></i>
                                        <span>
                                            {{course[0].courseDetail['numExercise']}}
                                            Exercicios
                                        </span>
                                    </li>
                                    <li class="d-flex align-items-center gap-1 detailItems">
                                        <i class='bx bx-file-blank'></i>
                                        <span>
                                            {{course[0].courseDetail['articulos']}}
                                            artículos
                                        </span>
                                    </li>
                                    <li class="d-flex align-items-center gap-1 detailItems">
                                        <i class='bx bx-download'></i>
                                        <span>
                                            {{course[0].courseDetail['recursosDescargable']}} recursos descargables
                                        </span>
                                    </li>
                                    <li class="d-flex align-items-center gap-1 detailItems">
                                        <i class='bx bx-infinite' ></i>
                                        <span>
                                            Acceso de por vida
                                        </span>
                                    </li>
                                    <li class="d-flex align-items-center gap-1 detailItems">
                                        <i class='bx bxs-trophy'></i>
                                        <span v-if="course[0].courseDetail['certificacion']">
                                            Certificado de finalización
                                        </span>
                                        <span v-else>
                                             Certificado de finalización
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="botton-container">
            <div class="">
                <div class="d-flex flex-column mb-5 mt-5">
                    <div class="h4"><span>Instructor</span></div>
                    <div class="intructorName h5"><span>{{course[0].user.nameUser}}</span></div>
                    <div class="carrier optional"><span></span></div>
                </div>
                <div class="intructorInfo d-flex">
                    <div>
                        <figure class="image is-128x128">
                            <img class="is-rounded" :src="course[0].user.image" >
                        </figure>
                    </div>
                    <div class="mx-3 d-flex align-items-center">
                        <ul>
                            <li class="d-flex align-items-center gap-4">
                                <i class='bx bxs-star'></i>
                                <span>
                                    Calificacion del instructor: {{totalRate}}
                                </span>
                            </li>
                            <li class="d-flex align-items-center gap-4">
                                <i class='bx bxs-medal'></i>
                                <span>
                                    {{totalComments}} reseñas
                                </span>
                            </li>
                            <li class="d-flex align-items-center gap-4">
                                <i class='bx bx-group'></i>
                                <span>
                                    {{totalStudents}} estudiantes
                                </span>
                            </li>
                            <li class="d-flex align-items-center gap-4"> 
                                <i class='bx bx-play-circle' ></i>
                                <span>
                                    {{totalCourse}} cursos
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div class="d-flex align-items-center gap-2 mt-5 mb-5">
                    <div class="d-flex align-items-center gap-2">
                        <i class='bx bxs-star' style="font-size: 1.5rem;color: #b4690e;"></i>
                        <span class="h5 m-0">{{qualification(course[0])}} valoración del curso</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class='bx bxs-circle' style="font-size: .5rem; color: dimgrey;"></i>
                        <span  class="h5 m-0">{{course[0].comments.length}} valoraciones</span>  
                    </div>
                </div>
                <div ref="bottomDiv"  class=" gap-5 containerComment">
                    <div class="comment-top" v-for="(comment ,index) of listComents" :key="index">
                        <div class="commentsh">
                            <div class="comment_header d-flex gap-3 pt-4">
                                <div class="">
                                    <figure class="image is-48x48">
                                       <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                </div>
                                <div>
                                    <div>
                                        <span>{{comment.user.nameUser}} {{comment.user.family_name.charAt(0)}}.</span>
                                    </div>
                                    <div  class="d-flex align-items-center gap-2">
                                        <div>
                                            <i v-for="(star, index) in 5" :key="index" style="font-size: .7rem;color: #b4690e;" class="bx" :class="{ 'bxs-star': index < comment.starts, 'bx-star': index >=comment.starts }"></i>
        
                                        </div>
                                        <span class="commenteDate">{{comment.CommentDated}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="comment_body pt-5">
                                    <span>{{ comment.description }}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div class="otherAuthorCourse pt-5" v-if="listOtherCourse.length > 1">
                <div class="otherCourses">
                    <div class="otherCoursesInfo">
                        <span class="h4" >Más cursos de </span>
                        <span class="h4 otherCourseName"> {{course[0].user.nameUser}} {{course[0].user.family_name}}</span>
                    </div>
                    <div class="d-flex gap-3 mt-5">
                        <div v-for="(course,index) of listOtherCourse" :key="index">
                            <card_course :course="course"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import {filledStars,formatTime,limit} from '../helper/dataManagment.js'
import card_course from "../components/card_course.vue"
import axios from 'axios'
export default{
    props : ['courseId'],
    components : {
        card_course
    },
    computed : {
        computedProp(){
            return this.courseId
        }
    },
    watch : {
        computedProp(){
            this.getCourse()
        }
    },
    data(){
        return {
            course : [],
            totalRate : 0,
            totalComments : 0,
            totalStudents : 0,
            totalCourse : 0,
            listOtherCourse :[],
            category : '',
            subCategory : '',
            topic : '',
            listComents : [],
            isLike : false
        }
    },
    methods : {
        
        async addwishlist(courseId){
        try {
            let payload = JSON.parse(localStorage.getItem('payload'))
            if (payload) {
                let userId = payload.sub
                let body = {
                    userId : userId,
                    courseId : courseId
                } 
                const res = await axios.post('http://localhost:3000/payment/wishlist/add',body,{withCredentials : true})
                this.isLike = !this.isLike
            } else{
                this.$router.push('/join/login')

            }
        } catch (error) {   
            this.$router.push('/join/login')
        }
       },

        goToCoursesByTopic(topic){
            this.$router.push(`/topic/${topic}`)
        },
        scrollToBottom() {
        this.$refs.bottomDiv.scrollIntoView({ behavior: 'smooth' });
        },
        goToCourses(category,subCategory){
            let params = `/${category}`
            if (subCategory) params = `/${category}/${subCategory}`
            this.$router.push(`/courses${params}`)
        },
        getTotalFirstRow(list,key){
            let suma = 0 
            for (let i = 0; i < list.length; i++) {
                suma += list[i][key].length
            }
            return suma
        },
        getTotalRate(list){
            const listRate = []
            let total = 0 
            for (let i = 0; i < list.length; i++) {
                let rate = filledStars(list[i])
                if (rate > 0) {
                    listRate.push(rate)
                }
            }
            for (let index = 0; index < listRate.length; index++) {
                total += listRate[index]
            }
            let result = ((total / listRate.length).toFixed(2))
             if(isNaN(result)) return 0
            return result

        },
        getFormatTime(date){
            return formatTime(date)
        },
        async getCourse(){
            try {
                const res =await axios.get(`http://localhost:3000/course/info/${this.courseId}`)
                this.course = [...res.data.data]
                console.log("1")
                const res2 =await axios.get(`http://localhost:3000/user/${this.course[0].user.userId}/list-courses`)        
                let dataRes2 = res2.data.data
                this.listOtherCourse =limit(dataRes2.filter((course)=> course.courseId !== this.course[0].courseId),3)
                this.totalRate = this.getTotalRate(dataRes2)
                this.totalComments = this.getTotalFirstRow(dataRes2,'comments')
                this.totalStudents = this.getTotalFirstRow(dataRes2,'userCourses')
                this.totalCourse = dataRes2.length
                this.category =this.course[0].topic.subCategory_topics[0].subCategory.category.description
                this.subCategory = this.course[0].topic.subCategory_topics[0].subCategory.description
                this.topic = this.course[0].topic.description
                this.listComents = limit(this.course[0].comments)
            } catch (error) {
                console.log(error)
                this.course={}
            }
        },
        qualification(course){
            let result = filledStars(course)
            return Number(result.toFixed(1));
        },
        filledStars1(course){
            let result = this.qualification(course)
            return result
        }
    },
   
    async created(){
        this.getCourse()
        
    }
}
</script>
<style>
@import "bulma/css/bulma.css";
@import "../assets/CourseInfo.css";
</style>