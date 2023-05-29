<template>

<div class="section testimonials">
    <div class="container-testimonial">
    <div class="userTestimonail">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <div class="item">
              <p>“Please tell your friends or collegues about Quizzy website. Anyone can access the website to start his/her learning journey. Thank you for visiting.”</p>
              <div class="author">
                <img src="assets/images/testimonial-author.jpg" alt="">
                <span class="category">Full Stack Developer</span>
                <h4>Shivam Yadav</h4>
              </div>
            </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div class="item">
              <p>“Please tell your friends or collegues about Quizzy website. Anyone can access the website to start his/her learning journey. Thank you for visiting.”</p>
              <div class="author">
                <img src="assets/images/testimonial-author.jpg" alt="">
                <span class="category">Full Stack Developer</span>
                <h4>Satyam Kumar</h4>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <div class="item">
              <p>“Please tell your friends or collegues about Quizzy website. Anyone can access the website to start his/her learning journey. Thank you for visiting.”</p>
              <div class="author">
                <img src="assets/images/testimonial-author.jpg" alt="">
                <span class="category">Full Stack Developer</span>
                <h4>Amber Sinha</h4>
              </div>
            </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div class="col-lg-5 align-self-center">
      <div class="section-heading">
        <h6>TESTIMONIALS</h6>
        <h2>What they say about us?</h2>
        <p>The online quiz portal is an exceptional platform that offers engaging quizzes across various subjects. The user interface is intuitive and visually appealing, enhancing the overall experience. The questions are thoughtfully crafted, providing a challenging yet enjoyable experience. Highly recommended for all quiz enthusiasts!</p>
      </div>
    </div>

    </div>
  </div>

</template>

<script>
export default{
    name:'testimonial'
}
</script>

<style>
/* 
---------------------------------------------
Testimonials Style
--------------------------------------------- 
*/

.testimonials {
  position: relative;
  padding: 80px 0px;
  margin-top: 150px;
}
.container-testimonial{
  border: 0px solid green;
  display: flex;
  justify-content: center;
}
.userTestimonail{
  border: 0px solid red;
  /* height: 300px; */
  width: 700px;
}

.testimonials:before {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 65%;
  height: 100%;
  background-color: #f1f0fe;
  content: '';
  border-top-left-radius: 500px;
  border-bottom-left-radius: 500px;
}

.testimonials .section-heading {
  margin-bottom: 0px;
  margin-left: 60px;
  vertical-align: middle;
}

.testimonials .section-heading p {
  margin-top: 50px;
}

.testimonials .item {
  background-color: #7a6ad8;
  border-radius: 25px;
  padding: 80px;
}

.testimonials .item p {
  font-size: 18px;
  line-height: 40px;
  color: #fff;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 40px;
}

.testimonials .item img {
  border-radius: 50%;
  max-width: 100px;
  float: left;
  margin-right: 25px;
}

.testimonials .item span {
  display: inline-block;
  margin-top: 20px;
  font-size: 15px;
  color: #fff;
}

.testimonials .item h4 {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-top: 8px;
}

.testimonials .owl-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-5px);
  right: -25px;
  text-align: right;
}

.testimonials .owl-nav .owl-prev i,
.testimonials .owl-nav .owl-next i {
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  display: inline-block;
  color: #7a6ad8;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.10);
  opacity: 1;
  transition: all .3s;
}

.testimonials .owl-nav .owl-prev i {
  position: absolute;
  bottom: 65px;
}

.testimonials .owl-nav .owl-prev i:hover,
.testimonials .owl-nav .owl-next i:hover {
  opacity: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
}



/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/*
 *  Owl Carousel - Core
 */
 .owl-carousel {
    display: none;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    /* position relative and z-index fix webkit rendering fonts issue */
    position: relative;
    z-index: 1; }
    .owl-carousel .owl-stage {
      position: relative;
      -ms-touch-action: pan-Y;
      touch-action: manipulation;
      /* -moz-backface-visibility: hidden; */
      /* fix firefox animation glitch */ }
    .owl-carousel .owl-stage:after {
      content: ".";
      display: block;
      clear: both;
      visibility: hidden;
      line-height: 0;
      height: 0; }
    .owl-carousel .owl-stage-outer {
      position: relative;
      overflow: hidden;
      /* fix for flashing background */
      /* -webkit-transform: translate3d(0px, 0px, 0px);  */
    }
    /* .owl-carousel .owl-wrapper,
    .owl-carousel .owl-item {
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0); } */
    .owl-carousel .owl-item {
      position: relative;
      min-height: 1px;
      float: left;
      /* -webkit-backface-visibility: hidden; */
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none; }
    .owl-carousel .owl-item img {
      display: block;
      width: 100%; }
    .owl-carousel .owl-nav.disabled,
    .owl-carousel .owl-dots.disabled {
      display: none; }
    .owl-carousel .owl-nav .owl-prev,
    .owl-carousel .owl-nav .owl-next,
    .owl-carousel .owl-dot {
      cursor: pointer;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; }
    .owl-carousel .owl-nav button.owl-prev,
    .owl-carousel .owl-nav button.owl-next,
    .owl-carousel button.owl-dot {
      background: none;
      color: inherit;
      border: none;
      padding: 0 !important;
      font: inherit; }
    .owl-carousel.owl-loaded {
      display: block; }
    .owl-carousel.owl-loading {
      opacity: 0;
      display: block; }
    .owl-carousel.owl-hidden {
      opacity: 0; }
    .owl-carousel.owl-refresh .owl-item {
      visibility: hidden; }
    .owl-carousel.owl-drag .owl-item {
      -ms-touch-action: pan-y;
          touch-action: pan-y;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; }
    .owl-carousel.owl-grab {
      cursor: move;
      cursor: grab; }
    .owl-carousel.owl-rtl {
      direction: rtl; }
    .owl-carousel.owl-rtl .owl-item {
      float: right; }
  
  /* No Js */
  .no-js .owl-carousel {
    display: block; }
  
  /*
   *  Owl Carousel - Animate Plugin
   */
  .owl-carousel .animated {
    animation-duration: 1000ms;
    animation-fill-mode: both; }
  
  .owl-carousel .owl-animated-in {
    z-index: 0; }
  
  .owl-carousel .owl-animated-out {
    z-index: 1; }
  
  .owl-carousel .fadeOut {
    animation-name: fadeOut; }
  
  @keyframes fadeOut {
    0% {
      opacity: 1; }
    100% {
      opacity: 0; } }
  
  /*
   * 	Owl Carousel - Auto Height Plugin
   */
  .owl-height {
    transition: height 500ms ease-in-out; }
  
  /*
   * 	Owl Carousel - Lazy Load Plugin
   */
  
    .owl-carousel .owl-item .owl-lazy {
      opacity: 0;
      transition: opacity 400ms ease; }
    .owl-carousel .owl-item .owl-lazy[src^=""], .owl-carousel .owl-item .owl-lazy:not([src]) {
      max-height: 0; }
    .owl-carousel .owl-item img.owl-lazy {
      transform-style: preserve-3d; }
  
  /*
   * 	Owl Carousel - Video Plugin
   */
  .owl-carousel .owl-video-wrapper {
    position: relative;
    height: 100%;
    background: #000; }
  
  .owl-carousel .owl-video-play-icon {
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    background: url("owl.video.play.png") no-repeat;
    cursor: pointer;
    z-index: 1;
    /* -webkit-backface-visibility: hidden; */
    transition: transform 100ms ease; }
  
  .owl-carousel .owl-video-play-icon:hover {
    -ms-transform: scale(1.3, 1.3);
        transform: scale(1.3, 1.3); }
  
  .owl-carousel .owl-video-playing .owl-video-tn,
  .owl-carousel .owl-video-playing .owl-video-play-icon {
    display: none; }
  
  .owl-carousel .owl-video-tn {
    opacity: 0;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: opacity 400ms ease; }
  
  .owl-carousel .owl-video-frame {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%; }
</style>