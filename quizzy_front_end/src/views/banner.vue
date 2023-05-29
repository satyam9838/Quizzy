<template>
   <!-- ***** Header Area End ***** -->

   <div class="main-banner" id="top">
    <!-- <img src="../assests/images/banner-item-03.jpg" alt=""> -->
    <div class="container-banner">
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assests/images/banner-item-01.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Learning opens endless possibilities.</h5>
        <!-- <p>Some representative placeholder content for the first slide.</p> -->
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assests/images/banner-item-02.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Knowledge empowers future generations.</h5>
        <!-- <p>Some representative placeholder content for the second slide.</p> -->
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assests/images/banner-item-03.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Lets grow with "Quizzy"</h5>
        <!-- <p>Some representative placeholder content for the third slide.</p> -->
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  </div>

  <!-- <h1>Hels</h1> -->
  <!-- <v-carousel cycle hide-delimiter-background
   show-arrows="hover">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel> -->
  
</template>


<script>
export default{
  name:'banner'
}

</script>


<style>


/* 
---------------------------------------------
Banner Style
--------------------------------------------- 
*/

.container-banner{
  /* border: 2px solid black; */
  width: 70%;
  margin-left: 300px;
  border-radius: 50px;
}
.carousel-inner{
  border: 2px solid #ddd;
  border-radius: 50px;
}


.main-banner {
  background-image: url(../assests/images/banner-bg.jpg);
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 170px 0px 120px 0px;
  border: 0px solid black;
}

/* .owl-carousel {
    width: 100%;
    display: block !important;
    position: relative;
    background-color: red !important;
    z-index: 1; 
  } */
  
.main-banner .item-1 {
  background-image: url(../assests/images/banner-item-01.jpg);
}

.main-banner .item-2 {
  background-image: url(../assests/images/banner-item-02.jpg);
}

.main-banner .item-3 {
  background-image: url(../assests/images/banner-item-03.jpg);
}

.main-banner .item {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 25px;
  border: 0px solid red;
  width: 70%;
  padding: 100px 100px;
  margin-left: 130px;
}

.main-banner .item span.category {
  background-color: #7a6ad8;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 15px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 50px;
}

.main-banner .item h2 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  line-height: 70px;
  width: 60%;
  margin-bottom: 40px;
}

.main-banner .item p {
  color: #fff;
  width: 65%;
}

.main-banner .item .buttons {
  display: flex;
  margin-top: 50px;
  border: 0px solid red;
}

.main-banner .item .buttons .main-button {
  margin-right: 30px;
}

.main-banner .item .buttons .main-button a {
  font-size: 14px;
  color: #7a6ad8;
  background-color: #fff;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding: 0px 25px;
  border-radius: 25px;
  font-weight: 500;
}

.main-banner .item .buttons .icon-button i {
  color: #7a6ad8;
  background-color: #fff;
  display: inline-block;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 16px;
}

.main-banner .item .buttons .icon-button a {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.main-banner .owl-nav {
  position: absolute;
  max-width: 1320px;
  bottom: 23px;
  left: 0;
  text-align: right;
}

.main-banner .owl-nav .owl-prev i,
.main-banner .owl-nav .owl-next i {
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  display: inline-block;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 1;
  transition: all .3s;
}

.main-banner .owl-nav .owl-prev i {
  position: absolute;
  bottom: 65px;
}

.main-banner .owl-nav .owl-prev i:hover,
.main-banner .owl-nav .owl-next i:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>