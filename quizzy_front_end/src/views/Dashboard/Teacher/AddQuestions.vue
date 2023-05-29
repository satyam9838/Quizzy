<template>
    <DashboardNav/>
    <div class="contact-us section" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact-us-content">
                        <form id="contact-form" action="" method="post" @submit.prevent="addquestions">
                            <div class="row">
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="content" type="name" name="name" id="name" placeholder="Add Question" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="option1" type="text" name="email" id="email" placeholder="Option One" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="option2" type="text" name="email" id="email" placeholder="Option two" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="option3" type="text" name="email" id="email" placeholder="Option three" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="option4" type="text" name="email" id="email" placeholder="Option four" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input v-model="answer" type="text" name="email" id="email" placeholder="Answer" required>
                                    </fieldset>
                                </div>

                                <select v-model="values" class="form-select" aria-label="Default select example" >
                                    <option v-for="title in fetchtitle" :key="title._id">{{ title.title }}</option>
                                </select>


                                <div class="col-lg-12">
                                    <fieldset class="main-btn">
                                        <button type="submit" id="form-submit" class="orange-button" >Add Question</button>
                                        <button type="submit" id="form-submit" class="orange-button"><router-link to="/teacher/dashboard">Go Back</router-link></button> 
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
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

    name: 'addquestions',
    components:{
        DashboardNav,
        Futer
    },
    data() {
        return {
            content: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: '',
            fetchtitle: [],
            values: '',
            loading:false,
            rules:{
                required: v=> !!v || 'This field is required.',
            }
        }
    },
    methods: {
        async addquestions() {
            try {
                //fetch the token from the localStorage
                if(!this.content && !this.option1 && !this.option2 && !this.option3 && !this.option4 && !this.answer){
                    alert("All fields are required");
                    return;
                }
                else if(this.content && this.option1 && this.option2 && this.option3 && this.option4 && this.answer){
                    const token = localStorage.getItem('token');
                // console.log(token);
                //start the loader
                // this.loading = true;
                const details = await axios.post(import.meta.env.VITE_APIURL + "/addquestions", {
                    content: this.content,
                    option1: this.option1,
                    option2: this.option2,
                    option3: this.option3,
                    option4: this.option4,
                    answer: this.answer,
                    title: this.values,
                    }, { headers: { Authorization: "bearer " + token } },);
                    //headers should be written after the data we want to send if we write first then this token will be send as a data
                    alert("Questions added");
                    console.log(details);
                    // swal("Questions Added Successfully");
                }
                // this.loading = false;
            }
            catch (err) {
                console.log(err);
            }
        },
        async gettitle() {
            const token = localStorage.getItem('token');
            const data = await axios.get(import.meta.env.VITE_APIURL + "/get-quiz", { headers: { Authorization: "bearer " + token } })

            this.fetchtitle = data.data.data;
            console.log(data.data.data);
        }
    },
    mounted() {
        this.gettitle();
    }
}

</script>




<style>
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
}

.main-btn{
    display: flex;
    justify-content: space-between;
}
</style>