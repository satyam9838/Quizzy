<template>

<div class="section fun-facts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="150" data-speed="1000">100</h2>
                   <p class="count-text ">Happy Students</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="804" data-speed="1000">50</h2>
                  <p class="count-text ">Quizzes Available</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="50" data-speed="1000">200</h2>
                  <p class="count-text ">Questions Available</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter end">
                  <h2 class="timer count-title count-number" data-to="15" data-speed="1000">10</h2>
                  <p class="count-text ">Total Submission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default{

}
</script>


<style>

/* 
---------------------------------------------
Facts Style
--------------------------------------------- 
*/

.fun-facts {
  position: relative;
  padding: 120px 0px 80px 0px;
  overflow: hidden;
}

.fun-facts:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 95%;
  height: 100%;
  background-color: #7a6ad8;
  content: '';
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
}

.fun-facts:after {
  background: url(../images/contact-dec-01.png);
  position: absolute;
  left: 15%;
  opacity: 0.5;
  top: 0;
  width: 318px;
  height: 119px;
  content: '';
  z-index: 2;
}

.fun-facts .counter {
  text-align: center;
  margin-bottom: 40px;
}

.fun-facts h2 {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
}

.fun-facts h2::after {
  content: '+';
  margin-left: 5px;
}

.fun-facts p {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px;
}



</style>