<template>
    <navbar />
    <div class="contact-us section" id="contact">
        <div class="container">
            <div class="row">

                <div class="col-lg-6">
                    <div class="contact-us-content">
                        <form id="contact-form" action="" method="post" @submit.prevent="login">
                            <div class="row">
                                <fieldset>
                                    <div class="teacherlogin">
                                        <h3>Student Login</h3>
                                    </div>
                                </fieldset>

                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="email" type="email" name="email" id="email" placeholder="Email"
                                            required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="password" type="password" name="password" id="password"
                                            placeholder="Password" required>
                                    </fieldset>
                                </div>

                                <div class="col-lg-12">
                                    <fieldset>
                                        <div class="col-registered2">
                                            <span>Not Registered yet?</span>

                                        </div>

                                        <div class="row1-register">
                                            <div class="SignIn">
                                                <button id="form-submit" class="orange-button" @click="login">Sign
                                                    In</button>
                                            </div>
                                            <div class="col-registered1">
                                                <button type="submit" id="form-submit2" class="orange-button"><router-link
                                                        class="ml-1" style="text-decoration: none;"
                                                        :to="{ path: '/student/signup' }">
                                                        Sign Up</router-link></button>
                                            </div>
                                        </div>
                                    </fieldset>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Futer />
</template>
    
    
<script>
import axios from 'axios';
import swal from 'sweetalert';
import navbar from '../../components/navbar.vue';
import Futer from '../../components/Footer.vue';
export default {
    name: 'StudentLogin',
    components: {
        navbar, Futer
    },

    data() {
        return {
            email: "",
            password: "",
            rules: {
                email: {
                    required: value => !!value || 'Email is Required.',
                    counter: value => value.length <= 20 || 'Max 20 characters',

                },
                password: {
                    required: value => !!value || 'Password is Required.',
                    minimum: value => value.length >= 4 && value.length <= 16 || ' Password should contains min 4 or max 16',

                }
            }
        };
    },
    methods: {
        async login() {
            try {
                if (this.email && this.password) {
                    if (this.password.length >= 4 && this.password.length <= 12) {
                        const user = {
                            email: this.email,
                            password: this.password,
                        };
                        const result = await axios.post(
                            import.meta.env.VITE_APIURL + "/student/login",
                            user
                        );
                        // this.loading = false;

                        swal("You are logged in", "success");

                        localStorage.setItem('token', result.data.token);
                        localStorage.setItem('userfirstname', result.data.user.firstname);
                        localStorage.setItem('userlastname', result.data.user.lastname);
                        localStorage.setItem('useremail', result.data.user.email);
                        localStorage.setItem('usercontact', result.data.user.contact);
                        localStorage.setItem('Isstudent', result.data.user.Isstudent);
                        const key = await localStorage.getItem('Isstudent')
                        console.log(result.data.user.Isstudent);

                        // alert("Success")
                        console.log(result);

                        localStorage.setItem('token', result.data.token);
                        this.$router.push({ name: "Studentdashboard" });
                    }

                }
            }
            catch (err) {
                console.log(err)
            }
        }
    }

}
</script>
    
    
<style>
/* 
    ---------------------------------------------
    Contact Style
    --------------------------------------------- 
    */

#contact {
    margin-top: 5rem;
}

.teacherlogin {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.teacherlogin h3 {
    color: #fff;

}

.row1-register {
    display: flex;
    justify-content: space-between;
}

.container .row {
    display: flex;
    justify-content: center;
    align-items: center;

}

.SignIn {
    display: flex;

}

#sign-in {
    cursor: pointer;

    color: rgb(238, 213, 213);
}

.col-registered2 {
    display: flex;
    justify-content: flex-end;

    margin-bottom: 0.5rem;
}

.col-registered2 span {
    padding-top: 50px;
    color: White;

}

.row1-register {
    display: flex;
    justify-content: space-between;
}

/* /Designing Singup Button END/  */


.contact-us {
    margin-top: 1rem;
    position: relative;
    padding: 50px 0px;
}

.contact-us:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 80%;
    height: 100%;
    background-color: #f1f0fe;
    content: '';
    border-top-right-radius: 500px;
    border-bottom-right-radius: 500px;
}



.contact-us .section-heading {
    margin-right: 110px;
    margin-bottom: 0px;
}

.contact-us .section-heading p {
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
    background: url(../../assests/images/contact-dec-01.png);
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
    background: url(../../assests/images/contact-dec-02.png);
    position: absolute;
    right: 0;
    bottom: 0;
    width: 183px;
    height: 149px;
    content: '';
    z-index: 2;
}

#contact-form1 input {
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

#contact-form1 input::placeholder {
    color: #fff;
}

#contact-form1 textarea {
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

#contact-form1 textarea::placeholder {
    color: #fff;
}

#contact-form1 button {
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

#contact-form1 button:hover {
    opacity: 0.8;
}

.contact-us-content .more-info {
    text-align: center;
    background: rgb(85, 0, 227);
    background: linear-gradient(90deg, rgba(85, 0, 227, 1) 0%, rgba(198, 61, 255, 1) 100%);
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
}</style>