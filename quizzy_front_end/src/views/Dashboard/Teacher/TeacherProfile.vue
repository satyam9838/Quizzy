<template>
  <DashboardNav />
  <div class="team section" id="team">
    <div class="container profile">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="team-member">
            <div class="main-content">
              <img src="../../../assests/images/teacher.jpg" alt="teacherProfile">
              <span class="category">{{ email }}</span>
              <h4>{{ firstname + " " }} {{ lastname }} </h4>
              <ul class="social-icons">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="goback-btn">
        <router-link class="mybutton" :to="{ path: '/teacher/dashboard' }">Go Back</router-link>
      </div>
      
    </div>
  </div>
  <Futer />
</template>
    
<script>
import Futer from '../../../components/Footer.vue';
import DashboardNav from '../../../components/DashboardNav.vue';
export default {
  name: 'profile',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      contact: ''
    }
  },
  components: { DashboardNav, Futer },
  methods: {
    async getusers() {
      try {
        this.firstname = localStorage.getItem('teacherfirstname');
        this.lastname = localStorage.getItem('teacherlastname');
        this.email = localStorage.getItem('teacheremail');
        this.contact = localStorage.getItem('teachercontact');
        //without using await you will get to see the promise data is returning
        // const teacherdetails = await axios.get("http://localhost:5000/getTeacherdetails",{headers:{Authorization:"bearer " + token}});
        // this.values = user;
        // console.log(user);
      }
      catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getusers();
  }
}
</script>
      
    
<style>
/* Team Styles */

.goback-btn{
  display: flex;
  justify-content: center;
}

.mybutton {
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
  /* text-emphasis-color: white; */

}

.team {
  margin-top: 100px;
  padding-top: 140px;
  /* border: 2px solid red; */
}

.row {
  /* border: 2px solid green; */
  display: flex;
  justify-content: center;
}

.main-content {
  border: 2px solid rgb(36, 36, 78);
}

.team-member:hover img {
  top: -120px;
}

.team-member img {
  max-width: 220px;
  border-radius: 50%;
  position: absolute;
  top: -110px;
  left: 50%;
  transform: translateX(-110px);
  transition: all .3s;
  border: 2px solid rgb(36, 36, 78);
  ;
}

.team-member .main-content {
  border-radius: 25px;
  padding: 140px 30px 40px 30px;
  background-color: #f1f0fe;
  text-align: center;
}

.team-member .main-content span.category {
  color: #7a6ad8;
  font-size: 15px;
}

.team-member .main-content h4 {
  font-size: 22px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 15px;
}

.team-member .main-content ul li {
  display: inline-block;
  margin: 0px 2px;
}

.team-member .main-content ul li a {
  background-color: #fff;
  color: #7a6ad8;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all .3s;
}

.team-member .main-content ul li a:hover {
  background-color: #7a6ad8;
  color: #fff;
}
</style>