<template>
  <DashboardNav />
 <section class="section courses" id="courses" >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-heading">
            <h2>Quizzes</h2>
          </div>
          <fieldset>
            <button  ><router-link class="mybutton" to="/student/dashboard">Go Back</router-link></button>
          </fieldset>
        </div>
      </div>
      
      <div class="row event_box">
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design" v-for="items in values" :key="items._id">
          <div class="events_item">
            <div class="thumb">
              <a href="#"><img src="../../../assests/images/course-01.jpg" alt=""></a>
              <span class="category">{{ items.title }}</span>
              <span class="price"><h6>10+</h6></span>
            </div>
            <div class="down-content">
              <div class="main-button">
                <button type="button" @click="viewquestions(items.title)">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<Futer/>

</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import DashboardNav from '../../../components/DashboardNav.vue';
import Futer from '../../../components/Footer.vue';
export default {
    name: 'quiz',
    components:{
    DashboardNav,
    Futer,
    DashboardNav
},
    data() {
        return {
            values: [],
            loading:false,
        }
    },
    methods: {
        async getquiz() {
            const token = await localStorage.getItem('token');
            const quizdetails = await axios.get( import.meta.env.VITE_APIURL + '/get-quiz', { headers: { Authorization: "bearer " + token } });
            const title = quizdetails.data.data.title;
            // const questiondetails = await axios.get(import.meta.env.VITE_APIURL + `/get-question`, 
            // {headers:{ Authorization: "bearer " + token}}, {query:{title}})
            // console.log("questions =>" + questiondetails)
            // console.log(quizdetails);
            // console.log(quizdetails.data.data);
            console.log(quizdetails);
            this.values = quizdetails.data.data;
            // value.forEach((item,index )=>{
            //     const detail1 = item.title;
            //     const detail2 = item.description;
            //     console.log(`${item.title} ${item.description}`,index);
            //     return detail1;
            // })
            // return value;
            // console.log(quizdetails.data.data[0]._id);
            // localStorage.setItem('quizId', quizdetails.data.data[0]._id);
            
        },
        async deletequiz(title,id) {
            // this.$router.push({name:'updatequiz',query:{id:id}})
            // const title = this.$router.query.title;
            try{
                const token = await localStorage.getItem('token');
                
                await axios.delete(import.meta.env.VITE_APIURL + `/delete-quiz/${id}`, { headers: { Authorization: "bearer " + token } })
                await axios.delete(import.meta.env.VITE_APIURL + `/delete-questions`, { headers: { Authorization: "bearer " + token }, params: { title } })
                alert("Quiz and their questions deleted");
                this.$router.go();
            }
            catch(err){
                console.log(err);
            }
        },
        async viewquestions(titleOne) {
            // this.loading = true;
            this.$router.push({ name: 'ViewQuestions', query: { title: titleOne } })
            // alert(titleOne)
        },
        async updatequiz(id) {
            console.log(id);
            this.$router.push({ path:`/updatequiz/${id}`, params: { id: id } })
        }
    },
    mounted() {
        this.getquiz();
    }
}
</script>

<style>



/* 
---------------------------------------------
Courses Style
--------------------------------------------- 
*/

.courses {
  margin-top: 160px;
}

.event_filter {
  text-align: center;
}

.event_filter {
  background-color: #f1f0fe;
  border-radius: 50px;
  padding: 15px 40px;
  list-style: none;
  margin: 0 auto 70px;
  max-width: max-content;
}

.event_filter li {
  display: inline-block;
  margin: 0px 20px;
}

.event_filter li a {
  font-size: 14px;
  font-weight: 500;
  color: #1e1e1e;
  transition: all .3s;
}

.event_filter li

.event_filter li a.is_active,
.event_filter li a:hover {
  color: #7a6ad8;
}

.events_item .thumb {
  position: relative;
  border-radius: 25px;
  overflow: hidden;
}

.events_item .thumb img {
  margin-bottom: -5px;
}

.events_item .thumb span.category {
  position: absolute;
  left: 30px;
  top: 30px;
  font-size: 14px;
  text-transform: uppercase;
  color: #7a6ad8;
  background-color: rgba(250, 250, 250, 0.95);
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 500;
  display: inline-block;
}

.events_item .thumb span.price {
  position: absolute;
  right: -30px;
  top: -50px;
  background-color: rgba(122, 106, 216, 0.95);
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: inline-block;
  transition: all .3s;
}

.events_item .thumb span.price h6 {
  margin-top: 72px;
  margin-left: 22px;
  font-size: 28px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
}

.events_item .thumb span.price em {
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  vertical-align: top;
}

.events_item {
  background-color: #f1f0fe;
  border-radius: 25px;
  margin-bottom: 30px;
  position: relative;
  justify-content: center;
  align-items: center;
} 

.events_item .down-content {
  padding: 20px 30px 25px 30px;
}

.events_item .down-content span.author {
  color: #7a6ad8;
  font-size: 15px;
  display: inline-block;
  margin-bottom: 6px;
}

.events_item .down-content h4 {
  font-size: 22px;
  font-weight: 600;
  transition: all .3s;
}

.events_item:hover .down-content h4 {
  color: #7a6ad8;
}

.events_item:hover .thumb span.price {
  transform: scale(1.2);
}

.main-button{
    display: flex;
    justify-content: center;
}

.main-button button {
  display: inline-block;
  background-color: #fff;
  color: #7a6ad8;
  
  height: 40px;
  padding: 0px 25px;
  border-radius: 20px;
  transition: all .3s;
}

.main-button button:hover {
  background-color: #7a6ad8;
  color: #fff;
}

.mybutton{
  background-color: #7a6ad8;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  display: inline-block;
  margin: 4px 2px;
  border-radius: 45%;
  margin-bottom: 1rem;
  /* text-emphasis-color: white; */

}

</style>