<template>
    <DashboardNav/>
    <div class="contact-us section" id="contact">
        <div class="container">
            <div class="row-container">
                <div class="col-lg-6">
                    <div class="contact-us-content">
                        <form id="contact-form" action="" method="post" @submit.prevent="addquiz">
                            <div class="row">
                                <h2>Add Quiz</h2>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="title" type="text"  placeholder="Title" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="description" type="text"  placeholder="Description" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset class="main-button">
                                        <button type="submit" id="form-submit" class="orange-button" @click="addquiz">Add Quiz</button>
                                        <button type="submit" id="form-submit" class="orange-button" ><router-link to="/teacher/dashboard">Go Back</router-link></button> 
                                    </fieldset>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Futer/>
</template>


<script>
import axios from 'axios';

import swal from 'sweetalert';

import DashboardNav from '../../../components/DashboardNav.vue';
import Futer from '../../../components/Footer.vue';
export default {
    name: 'addquiz',
    components:{
        DashboardNav,
        Futer
    },
    data() {
        return {
            title: '',
            description: '',
            loading:false,
            rules:{
                required:value => !!value || 'required'
            }
        }
    },
    methods: {
        async addquiz() {
            try {
                //fetch the token from the localStorage
                const token = localStorage.getItem('token');
                
                // this.loading = true;
                if(this.title && this.description){
                    //start the loader
                    const details = await axios.post(import.meta.env.VITE_APIURL + "/addquiz", {
                    title: this.title,
                    description: this.description,
                    }, { headers: { Authorization: "bearer " + token } },);
                    //headers should be written after the data we want to send if we write first then this token will be send as a data
                    console.log(details);
                    alert("Quiz Successfully Added");
                    
                }
                this.title = ''
                this.description = ''
                // this.loading = false;
            }
            catch (err) {
                console.log(err);
            }
            
        }
    }
}

</script>




<style>
h2 {
    align-items: center;
    color: white
}

.contact-us {
    margin-top: 80px;
    position: relative;
    padding: 50px 0px;
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
    margin-top: 1rem;
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
    /* opacity: 0.8; */
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
}

.row h2{
    text-align: center;
    margin-bottom: 1rem;
}

.main-button{
    display: flex;
    justify-content: space-between;
}

.row-container{
    display: flex;
    justify-content: center;
}
</style>