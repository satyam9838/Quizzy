<template>
  <div class="section testimonials">
    <div class="container-testimonial">
      <div class="userTestimonail">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <div class="item">
                <p>“Please tell your friends or collegues about Quizzy website. Anyone can access the website to start
                  his/her learning journey. Thank you for visiting.”</p>
                <div class="author">
                  <img src="../assests/images/member1.png" alt="member1.png">
                  <span class="category">Full Stack Developer</span>
                  <h4>Shivam Yadav</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div class="item">
                <p>“Please tell your friends or collegues about Quizzy website. Anyone can access the website to start
                  his/her learning journey. Thank you for visiting.”</p>
                <div class="author">
                  <img src="../assests/images/member2.png" alt="member2.png">
                  <span class="category">Full Stack Developer</span>
                  <h4>Satyam Kumar</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="item">
                <p>“Please tell your friends or collegues about Quizzy website. Anyone can access the website to start
                  his/her learning journey. Thank you for visiting.”</p>
                <div class="author">
                  <img src="../assests/images/member3.png" alt="member3.png">
                  <span class="category">Full Stack Developer</span>
                  <h4>Amber Sinha</h4>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-lg-5 align-self-center user-subheading">
        <div class="section-heading">
          <h6>TESTIMONIALS</h6>
          <h2>What they say about us?</h2>
          <p>The online quiz portal is an exceptional platform that offers engaging quizzes across various subjects. The
            user interface is intuitive and visually appealing, enhancing the overall experience. The questions are
            thoughtfully crafted, providing a challenging yet enjoyable experience. Highly recommended for all quiz
            enthusiasts!</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'testimonial'
}
</script>

<style>
/* 
---------------------------------------------
Testimonials Style
--------------------------------------------- 
*/

.testimonials {
  /* position: relative; */
  padding: 80px 0px;
  margin-top: 150px;
}

.container-testimonial {
  border: 0px solid green;
  display: flex;
  justify-content: center;
}

.userTestimonail {
  border: 0px solid red;
  height: 300px;
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
  /* vertical-align: middle; */
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




/* Media Query */
/* @media screen and (max-width: 768px) {
  .testimonials .item {
    padding: 20px;
  }

  .testimonials .item .author img {
    width: 60px;
    height: 60px;
  }

  .testimonials .item p {
    font-size: 14px;
  }

  .testimonials .item .author h4 {
    font-size: 18px;
  }
} */
/* .testimonials{
  border: 2px solid blue;
}


.carousel-inner{
  border: 2px solid black;
  
} */
@media screen and (max-width: 992px) {
  .userTestimonail,
  .user-subheading {
    width: 100%;
  }
  
  .userTestimonail {
    height: auto;
  }
  
  .testimonials .item {
    padding: 20px;
  }

  .testimonials .item img {
    max-width: 60px;
    max-height: 60px;
  }

  .testimonials .item p {
    font-size: 14px;
  }

  .testimonials .item h4 {
    font-size: 18px;
  }
}



</style>