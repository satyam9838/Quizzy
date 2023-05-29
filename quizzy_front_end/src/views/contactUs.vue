<template>

<div class="contact-us section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6  align-self-center">
          <div class="section-heading">
            <h6>Contact Us</h6>
            <h2>Feel free to contact us anytime</h2>
            <p>Have a question or need assistance? We're here to help! Our dedicated support team is ready to provide you with prompt and reliable assistance. Whether you need help with our courses, have inquiries about enrollment, or want to provide feedback, feel free to reach out to us. We value your input and strive to deliver an exceptional learning experience. Contact us today through the provided channels, and we'll get back to you as soon as possible. Let's embark on your learning journey together!</p>
            <!-- <div class="special-offer">
              <span class="offer">off<br><em>50%</em></span>
              <h6>Valide: <em>24 April 2036</em></h6>
              <h4>Special Offer <em>50%</em> OFF!</h4>
              <a href="#"><i class="fa fa-angle-right"></i></a>
            </div> -->
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-us-content">
            <form id="contact-form" action="" method="post">
              <div class="row">
                <div class="col-lg-12">
                  <fieldset>
                    <input type="name" name="name" id="name" placeholder="Your Name..." autocomplete="on" required>
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="">
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="orange-button">Send Message Now</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
export default{
  name:'contactUs'
}
</script>


<style>
/* 
---------------------------------------------
Contact Style
--------------------------------------------- 
*/

.contact-us {
  margin-top: 80px;
  position: relative;
  padding: 50px 0px;
}

.contact-us:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 65%;
  height: 100%;
  background-color: #f1f0fe;
  content: '';
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
}


.contact-us  .section-heading {
  margin-right: 110px;
  margin-bottom: 0px;
}

.contact-us  .section-heading p {
  margin-top: 50px;
}

.contact-us .special-offer {
  margin-top: 50px;
  background-color: #fff;
  border-radius: 25px;
  padding: 30px 120px;
  display: inline-block;
  position: relative;
}

.contact-us .special-offer span.offer {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #7a6ad8;
  width: 80px;
  padding: 30px 8px;
  line-height: 25px;
  height: 120px;
  border-radius: 15px 60px 60px 15px; 
  display: inline-block;
  text-align: center;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  text-align: left;
}

.contact-us .special-offer span.offer em {
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
}

.contact-us .special-offer h6 {
  font-size: 15px;
  color: #4a4a4a;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 15px;
}

.contact-us .special-offer h6 em {
  font-style: normal;
  color: #7a6ad8;
  font-weight: 600;
}

.contact-us .special-offer h4 {
  font-size: 22px;
  font-weight: 600;
}

.contact-us .special-offer h4 em {
  font-style: normal;
  color: #7a6ad8;
}

.contact-us .special-offer a {
  position: absolute;
  right: 30px;
  top: 35px;
  width: 50px;
  height: 50px;
  display: inline-block;
  text-align: center;
  line-height: 50px;
  background-color: #7a6ad8;
  color: #fff;
  border-radius: 50%;
}

.contact-us .contact-us-content {
  border-radius: 25px;
  padding: 80px;
  background-color: #7a6ad8;
  position: relative;
  z-index: 1;
}

.contact-us .contact-us-content::before {
  background: url(../images/contact-dec-01.png);
  position: absolute;
  left: 50%;
  transform: translateX(-149px);
  opacity: 0.5;
  top: 0;
  width: 318px;
  height: 119px;
  content: '';
  z-index: 2;
}

.contact-us .contact-us-content::after {
  background: url(../images/contact-dec-02.png);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 183px;
  height: 149px;
  content: '';
  z-index: 2;
}

#contact-form input {
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(249, 235, 255, 0.15);
  border: none;
  outline: none;
  font-weight: 300;
  padding: 0px 20px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 30px;
  position: relative;
  z-index: 3;
}

#contact-form input::placeholder {
  color: #fff;
}

#contact-form textarea {
  width: 100%;
  height: 120px;
  border-radius: 25px;
  background-color: rgba(249, 235, 255, 0.15);
  border: none;
  outline: none;
  font-weight: 300;
  padding: 20px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 30px;
  position: relative;
  z-index: 3;
}

#contact-form textarea::placeholder {
  color: #fff;
}

#contact-form button {
  border: none;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  background-color: #fff;
  padding: 0px 25px;
  border-radius: 25px;
  color: #7a6ad8;
  transition: all .4s;
  position: relative;
  z-index: 3;
}

#contact-form button:hover {
  opacity: 0.8;
}

.contact-us-content .more-info {
  text-align: center;
  background: rgb(85,0,227);
  background: linear-gradient(90deg, rgba(85,0,227,1) 0%, rgba(198,61,255,1) 100%);
  border-radius: 0px 0px 23px 23px;
  padding: 45px 30px 15px 30px;
}

.contact-us-content .more-info .info-item {
  text-align: center;
  margin-bottom: 30px;
}

.contact-us-content .more-info i {
  font-size: 32px;
  color: #fff;
  margin-bottom: 15px;
}

.contact-us-content .more-info h4 a {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
</style>