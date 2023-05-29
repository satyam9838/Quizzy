<template>
  <div class="section events" id="events">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-heading">
            <h2>Upcoming Features</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-3">
                <div class="image">
                  <img src="../assests/images/fast-time-clock-ui-icon-sign-symbol-3d-rendering.jpg" alt="timer-img">
                </div>
              </div>
              <div class="col-lg-9">
                <ul>
                  <li>
                    <span class="category">Timer</span>
                    <h4>Timer On Each Quiz</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>Comming Soon</h6>
                  </li>
                  <li>
                    <span>Users:</span>
                    <h6>Basic</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$100</h6>
                  </li>
                </ul>
                <a href="#"><i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-3">
                <div class="image">
                  <img src="../assests/images/recording1.jpg" alt="recording.jpg">
                </div>
              </div>
              <div class="col-lg-9">
                <ul>
                  <li>
                    <span class="category">Screen Recording</span>
                    <h4>Recording On Every Quiz</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>Comming Soon</h6>
                  </li>
                  <li>
                    <span>Users:</span>
                    <h6>Lite</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$200</h6>
                  </li>
                </ul>
                <a href="#"><i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-3">
                <div class="image">
                  <img src="../assests/images/analysis.jpg" alt="analysis.jpg">
                </div>
              </div>
              <div class="col-lg-9">
                <ul>
                  <li>
                    <span class="category">Statistics</span>
                    <h4>Analysis of Quiz Submission</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>Comming Soon</h6>
                  </li>
                  <li>
                    <span>Users:</span>
                    <h6>Premium</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$440</h6>
                  </li>
                </ul>
                <a href="#"><i class="fa fa-angle-right"></i></a>
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
        name:'upcoming'
    }
</script>

<style>


/* 
---------------------------------------------
Events Style
--------------------------------------------- 
*/

.events .section-heading {
  margin-bottom: 100px;
}

.events .item {
  background-color: #f1f0fe;
  border-radius: 25px;
  position: relative;
  padding: 40px;
  margin-bottom: 96px;
}

.events .item .image {
  position: relative;
}

.events .item .image img {
  position: absolute;
  border-radius: 25px;
  max-width: 260px;
  left: 0;
  top: -70px;
}

.events .item ul li {
  display: inline-block;
  width: 17.5%;
  vertical-align: middle;
}

.events .item ul li:first-child {
  width: 35%;
}

.events .item ul li:nth-of-type(2) {
  width: 28%;
}

.events .item ul li span.category {
  font-size: 14px;
  text-transform: uppercase;
  color: #7a6ad8;
  background-color: #fff;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 20px;
}

.events .item ul li h4 {
  font-size: 22px;
  font-weight: 600;
}

.events .item ul li span {
  display: inline-block;
  font-size: 14px;
  color: #4a4a4a;
  margin-bottom: 10px;
}

.events .item ul li h6 {
  font-size: 16px;
  color: #7a6ad8;
  font-weight: 600;
}

.events .item a {
  position: absolute;
  right: 0;
  top: 22px;
  background-color: #7a6ad8;
  width: 60px;
  height: 120px;
  display: inline-block;
  text-align: center;
  line-height: 120px;
  font-size: 18px;
  z-index: 1;
  color: #fff;
  border-radius: 60px 0px 0px 60px;
}

.section-heading h2{
  color: black;
}

</style>