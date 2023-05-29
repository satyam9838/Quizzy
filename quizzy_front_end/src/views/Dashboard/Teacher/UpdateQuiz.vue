<template>
    <DashboardNav/>
    <div class="contact-us section" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact-us-content">
                        <form id="contact-form" action="" method="post" @submit.prevent="addquiz">
                            <div class="inner-row">
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
                                    <fieldset class="butt">
                                        <button type="submit" id="form-submit" class="orange-button" @click="updatequiz">Update</button>
                                        <button type="submit" id="form-submit" class="orange-button"><router-link
                                                    to="/teacher/view-quiz">Go Back</router-link></button>
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
    name: 'updatequiz',
    data() {
        return {
            name: '',
            title: '',
            description: '',
            loading: false
        }
    },
    components:{DashboardNav,Futer},
    methods: {
        async getquiz() {
            try {

                const id = this.$route.params.id;
                console.log(id);
                const token = await localStorage.getItem('token')
                const quizdetails = await axios.get(import.meta.env.VITE_APIURL + `/get-quizById/${id}`, { headers: { Authorization: "bearer " + token } })

                console.log(quizdetails);
                this.name = quizdetails.data.data.title;
                this.title = quizdetails.data.data.title;
                this.description = quizdetails.data.data.description;
                console.log("qzarray = " + this.qzarray)
            }
            catch (err) {

                console.log(err);
            }

        },
        async updatequiz() {
            try {
                this.loading = true;
                const id = this.$route.params.id
                console.log(id);
                const token = localStorage.getItem('token');

                const details = axios.put(import.meta.env.VITE_APIURL + `/update-quiz/${id}`, {
                    title: this.title,
                    description: this.description,
                }, { headers: { Authorization: "bearer " + token } });
                console.log(details);
                alert("Quiz is updated");
                this.$router.push({name:'viewquiz'});

            }
            catch (err) {
                console.log(err);
            }
            finally {
                this.loading = false;
            }

        },
        async goback() {
            this.$router.push({ name: 'quiz' })
        },
    },
    mounted() {
        this.getquiz();
    }
}

</script>



<style>
h2 {
    align-items: center;
    color: #fff;
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

.butt{
    display: flex;
    justify-content: space-between;
}


.row{
    display: flex;
    justify-content: center;
}

.inner-row h2{
    text-align: center;
    margin-bottom: 1rem;
}
</style>