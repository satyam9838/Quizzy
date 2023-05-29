<template>

<footer>
    <div class="container">
      <div class="col-lg-12">
        <p>Copyright © 2023  @Quizzy.com.  All rights reserved.&nbsp;&nbsp;&nbsp; Design: <a href="https://templatemo.com" rel="nofollow" target="_blank">TemplateMo</a></p>
      </div>
    </div>
  </footer>
</template>


<script>
export default{
    name:'footer'
}
</script>

<style>
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