import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component:() =>  import('../views/Home.vue'),
  },
  
  {
    path : '/join/login',
    name : 'login',
    component :() =>  import('../views/Login.vue')
  },
  {
    path: '/courses/search',
    name: 'CourseSearch',
    component: () => import('../views/Courses.vue'),
    props: (route) => ({ query: route.query.q})
  },
  {
    path: '/courses/:category/:subCategory?',
    name: 'CourseDevelopment',
    component: () => import('../views/Courses.vue'),
    props: true
  },
  {
    path: '/topic/:topic',
    name: 'CourseTopic',
    component: () => import('../views/Courses.vue'),
    props: true
  },
  {
    path: '/coursesInfo/:courseId',
    name: 'courseInfo',
    component: () => import('../views/CourseInfo.vue'),
    props: true
  },
  {
    path: '/my-courses/wishlist',
    name: 'wishlist',
    component: () => import('../views/WishList.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
