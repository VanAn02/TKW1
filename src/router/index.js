import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import ('@/layout/Client/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component:()=>import ('@/layout/Client/Register.vue')
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component:()=>import ('@/layout/Client/Introduce.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component:()=>import ('@/layout/Client/Blog.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component:()=>import ('@/layout/Client/Detail.vue')
  },
 
  {
    path: '/post',
    name: 'Post',
    component:()=>import ('@/layout/Client/Post.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component:()=>import ('@/layout/Client/Forgot.vue')
  },
  {
    path:'/admin',
    component:()=>import ('@/views/AdminView.vue'),
    children:[
      {
        path:'baiviet',
        component:()=>import('@/layout/Admin/BaiViet/BaiViet.vue')
      },
      {
        path:'nguoidung',
        component:()=>import('@/layout/Admin/NguoiDung/NguoiDung.vue')
      },
      {
        path:'tour',
        component:()=>import('@/layout/Admin/Tour/TourView.vue')
      },
     
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
