import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/home.vue')
    },
    {
      path: '/student',
      name:'student',
      children:[
        {
          path:'signup',
          name:'StudentSignup',
          component: ()=>import('../views/Signup/StudentSignup.vue')
        },
        {
          path:'login',
          name:'Studentlogin',
          component: ()=>import('../views/Login/StudentLogin.vue')
        },
        {
          path:'viewquiz',
          name:'Viewquiz',
          component:()=>import('../views/Dashboard/Student/ViewQuiz.vue')
        },
        {
          path:'dashboard',
          name:'Studentdashboard',
          component:()=>import('../views/Dashboard/Student/StudentDashboard.vue')
        },
        {
          path:'profile',
          name:'Studentprofile',
          component:()=>import('../views/Dashboard/Student/Profile.vue')
        },
        {
          path:'viewquestions',
          name:'ViewQuestions',
          component:()=>import('../views/Dashboard/Student/ViewQuestions.vue')
        }
      ]
    },
    {
      path: '/teacher',
      name:'teacher',
      children:[
        {
          path:'signup',
          name:'TeacherSignup',
          component: ()=>import('../views/Signup/TeacherSignup.vue')
        },
        {
          path:'login',
          name:'Teacherlogin',
          component: ()=>import('../views/Login/TeacherLogin.vue')
        },
        {
          path:'dashboard',
          name:'teacherdashboard',
          component: ()=>import('../views/Dashboard/Teacher/TeacherDashboard.vue')
        },
        {
          path:'profile',
          name:'teacherprofile',
          component: ()=>import('../views/Dashboard/Teacher/TeacherProfile.vue')
        },
        {
          path:'view-quiz',
          name:'viewquiz',
          component: ()=>import('../views/Dashboard/Teacher/ViewQuiz.vue')
        },
        {
          path:'add-quiz',
          name:'addquiz',
          component: ()=>import('../views/Dashboard/Teacher/addquiz.vue')
        },
        {
          path:'add-questions',
          name:'addquestions',
          component: ()=>import('../views/Dashboard/Teacher/addquestions.vue')
        },
        {
          path:'updatequiz/:id',
          name:'Updatequiz',
          component: ()=>import('../views/Dashboard/Teacher/UpdateQuiz.vue')
        },
        {
          path:'viewquestions',
          name:'Viewquestions',
          component: ()=>import('../views/Dashboard/Teacher/ViewQuestions.vue')
        },
        {
          path:'updatequestion/:id',
          name:'UpdateQuestion',
          component: ()=>import('../views/Dashboard/Teacher/UpdateQuestion.vue')
        },
      ]
    }
    
  ]
})

export default router;
