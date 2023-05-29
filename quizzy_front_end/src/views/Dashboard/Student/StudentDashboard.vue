<template>
  <DashboardNav />
    <section class="section courses" id="courses">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-heading">
                        <!-- <h6>Latest Courses</h6> -->
                        <h2>Student Dashboard</h2>
                    </div>
                </div>
            </div>
            <ul class="event_filter">
                <li>
                    <a class="is_active" href="/student/dashboard" data-filter="*" default>Dashboard</a>
                </li>
                <li>
                   <router-link to="/student/profile">Profile</router-link> 
                </li>
                <li>
                  <router-link to="/student/viewquiz">View Quiz</router-link> 
                </li>
            </ul>
            
            <div class="image-container">
              <img src="../../../assests/images/50426.jpg" alt="laptop" class="image1">
              </div>

        </div>
    </section>

    <Futer/>
    
</template>
<script>
import { RouterView } from 'vue-router';
import DashboardNav from '../../../components/DashboardNav.vue';
import profile from './Profile.vue';
import Futer from '../../../components/Footer.vue';

export default {
    name: "Dashboard",
    components: { DashboardNav ,profile,Futer}
}
</script>

<style>

.image-container{
  display: flex;
  justify-content: center;
}

.content{
  display: flex;
  justify-content: flex-end;
}
.image1{
  height: 40%;
  width: 40%;
  border-radius: 4rem;
}

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

.event_filter li .event_filter li a.is_active,
.event_filter li a:hover {
    color: #7a6ad8;
}

.section-heading h1 {
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

.main-button {
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




/* 
---------------------------------------------
Footer Style
--------------------------------------------- 
*/

footer {
  margin-top: 150px;
  position: relative;
  background-color: #7a6ad8;
  vertical-align: middle;
  min-height: 150px;
  border-radius: 150px 150px 0px 0px;
}

footer p {
  text-align: center;
  line-height: 150px;
  color: #fff;
  font-weight: 400;
}

footer p a {
  color: #fff;
  transition: all .3s;
  position: relative;
  z-index: 3;
}

footer p a:hover {
  opacity: 0.75;
}

footer::before {
  background: url(../images/contact-dec-01.png);
  position: absolute;
  left: 30px;
  transform: rotate(180deg);
  opacity: 1;
  bottom: 0;
  width: 318px;
  height: 119px;
  content: '';
  z-index: 2;
}

</style>