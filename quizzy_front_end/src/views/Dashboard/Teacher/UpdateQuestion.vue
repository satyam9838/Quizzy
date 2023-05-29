<template>
    <DashboardNav/>
    <router-link to="/teacher/dashboard/view-quiz"></router-link>
     <div class="contact-us section" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact-us-content">
                        <form id="contact-form" action="" method="post" @submit.prevent="updatequestion(title)">
                            <div class="row" >
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
                                    <option >{{title }}</option>
                                </select>


                                <div class="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="orange-button">Update Question</button>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                     <button type="submit" id="form-submit" class="orange-button"><router-link to="/teacher/dashboard">Go Back</router-link></button> 
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
import Futer from '../../../components/Footer.vue';
import DashboardNav from '../../../components/DashboardNav.vue';


export default {
    name: 'updatequestions',
    data() {
        return {
            questions: [],
            title:'',
            content:'',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            answer:'',
        }
    },
    components:{
        DashboardNav,Futer
    },
    methods: {
        async getquestions() {
            try {
                // const title = this.$route.query.title;
                const id = this.$route.params.id;
                // console.log(id);
                // console.log(title);
                const token = await localStorage.getItem('token');
                const questiondetails = await axios.get(import.meta.env.VITE_APIURL + `/get-questionById/${id}`, { headers: { Authorization: "bearer " + token } })
                console.log(questiondetails.data.data);
                // this.questions = questiondetails.data.data;
                this.title =  questiondetails.data.data[0].title;
                this.content = questiondetails.data.data[0].content;
                this.option1 = questiondetails.data.data[0].option1;
                this.option2 = questiondetails.data.data[0].option2;
                this.option3 = questiondetails.data.data[0].option3;
                this.option4 = questiondetails.data.data[0].option4;
                this.answer = questiondetails.data.data[0].answer;
                // this.questions = questiondetails.data.data.content;
                // console.log(questiondetails.data.data[0].content);
            }
            catch (err) {
                console.log(err);
            }

        },
        async updatequestion(titleOne) {
            //update the questions
            try {
                const id = this.$route.params.id;
                // console.log(title);
                const token = await localStorage.getItem('token');
                
                const updated = await axios.put(import.meta.env.VITE_APIURL + `/update-questions/${id}`,{
                    content: this.content,
                    option1: this.option1,
                    option2: this.option2,
                    option3: this.option3,
                    option4: this.option4,
                    answer: this.answer,
                } ,{ headers: { Authorization: "bearer " + token } })
                console.log(updated);
                alert("Question is Updated");
                this.$router.push({name:'Viewquestions', query:{title:titleOne}})
                // this.$router.go();
            }
            catch (err) {
                console.log(err);
            }
        },
        async goback(titleOne){
            // console.log(titleOne);
            this.$router.push({name:'viewquizpage',query:{title:titleOne}})
        },
    },
    mounted() {
        this.getquestions();
    }

}

</script>



<style>

body{
    color:white;
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


.row{
    display: flex;
    justify-content: center;
}
</style>