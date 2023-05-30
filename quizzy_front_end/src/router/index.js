import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/home.vue'),
      meta:{
        logingaurd:true
      }
    },
    {
      path: '/student',
      name:'student',
      children:[
        {
          path:'signup',
          name:'StudentSignup',
          component: ()=>import('../views/Signup/StudentSignup.vue'),
          meta:{
            logingaurd:true
          }
        },
        {
          path:'login',
          name:'Studentlogin',
          component: ()=>import('../views/Login/StudentLogin.vue'),
          meta:{
            logingaurd:true
          }
        },
        {
          path:'viewquiz',
          name:'Viewquiz',
          component:()=>import('../views/Dashboard/Student/ViewQuiz.vue'),
          meta:{
            studentgaurd:true,
            
          },
        },
        {
          path:'dashboard',
          name:'Studentdashboard',
          component:()=>import('../views/Dashboard/Student/StudentDashboard.vue'),
          meta:{
            studentgaurd:true,
            
          },
        },
        {
          path:'profile',
          name:'Studentprofile',
          component:()=>import('../views/Dashboard/Student/Profile.vue'),
          meta:{
            studentgaurd:true,
            
          },
        },
        {
          path:'viewquestions',
          name:'ViewQuestions',
          component:()=>import('../views/Dashboard/Student/ViewQuestions.vue'),
          meta:{
            studentgaurd:true,
            
          },
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
          component: ()=>import('../views/Signup/TeacherSignup.vue'),
          meta:{
            logingaurd:true
          }
        },
        {
          path:'login',
          name:'Teacherlogin',
          component: ()=>import('../views/Login/TeacherLogin.vue'),
          meta:{
            logingaurd:true
          }
        },
        {
          path:'dashboard',
          name:'teacherdashboard',
          component: ()=>import('../views/Dashboard/Teacher/TeacherDashboard.vue'),
          meta:{
                teachergaurd:true
              }
        },
        {
          path:'profile',
          name:'teacherprofile',
          component: ()=>import('../views/Dashboard/Teacher/TeacherProfile.vue'),
          meta:{
                teachergaurd:true
              }
        },
        {
          path:'view-quiz',
          name:'viewquiz',
          component: ()=>import('../views/Dashboard/Teacher/ViewQuiz.vue'),
          meta:{
                teachergaurd:true
              }
        },
        {
          path:'add-quiz',
          name:'addquiz',
          component: ()=>import('../views/Dashboard/Teacher/AddQuiz.vue'),
          meta:{
                teachergaurd:true
              }
        },
        {
          path:'add-questions',
          name:'addquestions',
          component: ()=>import('../views/Dashboard/Teacher/AddQuestions.vue'),
          meta:{
                teachergaurd:true
              }
        },
        {
          path:'updatequiz/:id',
          name:'Updatequiz',
          component: ()=>import('../views/Dashboard/Teacher/UpdateQuiz.vue'),
          meta:{
                teachergaurd:true
              }
        },
        {
          path:'viewquestions',
          name:'Viewquestions',
          component: ()=>import('../views/Dashboard/Teacher/ViewQuestions.vue'),
          meta:{
                teachergaurd:true
              }
        },
        {
          path:'updatequestion/:id',
          name:'UpdateQuestion',
          component: ()=>import('../views/Dashboard/Teacher/UpdateQuestion.vue'),
          meta:{
                teachergaurd:true
              }
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404error',
      component: () => import('../components/Notfound.vue')
    },
    
  ]
})




// Securing routing 


router.beforeEach((to,from,next)=>{
  // console.log(to);
  // console.log("from" ,from);
  // next();
    if(to.meta.logingaurd){
      const Isstudent = localStorage.getItem('Isstudent');
      const token = localStorage.getItem('token');
      const Isteacher = localStorage.getItem('Isteacher');
      if(Isstudent=="true"){
        next({name:'Studentdashboard'})
      }
      else if(Isteacher== "true"){
        next({name:'teacherdashboard'})
      }
      else{

        next();
      }
    }
   else if(to.meta.studentgaurd){
      const Isstudent = localStorage.getItem('Isstudent');
      const token = localStorage.getItem('token');
      const Isteacher = localStorage.getItem('Isteacher');
      // if(Isstudent == true && token){
      //   next({name:'studentview'});
      // }
      // else{
      //   next({name:'studentlogin'})
      // }
      // if(token==null){
      //   next({name:'home'})
      // }
      // else if(Isstudent==null && Isteacher == "true" ){
      //   next({name:'home'});
      // }
      // else{
      //   next();
      // }
      if(Isstudent!="true"){
        next({name:'home'})
      }
      else{
        next()
      }
    }
    
    else if(to.meta.teachergaurd){
      const Isteacher = localStorage.getItem('Isteacher');
      const token = localStorage.getItem('token');
      // if(Isteacher == true && token){
      //   next({name:'teacherview'});
      // }
      // else{
      //   next({name:'teacherlogin'});
      // }
      if(Isteacher!="true"){
        next({name:'home'})
      }
      else{
        next();
      }
    }
    else{
      next();
    }
})


export default router;
