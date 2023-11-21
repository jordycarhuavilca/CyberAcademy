<template>
    <div class="card_body" @click="goToCourseInfo(course.courseId)">
           <img
             class="img-fluid"
             :src="course.image"
           />
         <div>
          <p class="body_title">{{course.tittle}}</p>
          <span class="body_userInfo">{{course.user.nameUser }} {{course.user.family_name}}</span>
          <div>
            <div>
              <span class="body_qualification">{{qualification(course)}}</span>
              <span>
                <!-- <i class='bx '></i> -->
                <i v-for="(star, index) in 5" :key="index" style="font-size: .8rem;color: #ffd700;" class="bx" :class="{ 'bxs-star': index < filledStars1(course), 'bx-star': index >= filledStars1(course)}"></i>
                <span  class="body_quantityPeople">({{course.comments.length}})</span>
              </span>
            </div>
            <span class="body_coursePrice" >{{course.precio}} S/</span>
          </div>
         </div>          
    </div>
</template>
<script>
import {filledStars} from '../helper/dataManagment'

export default {
    props : ['course'],
    methods : {
        goToCourseInfo(courseId){
            this.$router.push(`/coursesInfo/${courseId}`)
        },
        qualification(course){
            let result = filledStars(course)
            return Number(result.toFixed(1));
        },
        filledStars1(course){
            let result = this.qualification(course)
        return result
        }
    }
}
</script>
<style scoped>
.card_body{
    cursor: pointer;
    width: clamp(198.93px,217.93px,218.93px);
    height: clamp(239.89px,280.14px,280.14px);
}
.body_title{
    display: flex;
    align-items: flex-end;
    margin-top: .5rem;
    font-weight: 800;
    font-size: clamp(.5rem,.88rem,1rem);
    height: 2.7rem;
    overflow: hidden;
}

.body_userInfo,.body_quantityPeople{
    font-size: clamp(.6rem,.7rem,1rem);
}
.body_qualification{
    font-size: clamp(.6rem,.9rem,1rem);
    margin-right: .3rem;
}
.body_coursePrice{
    font-weight: 600;
}
</style>