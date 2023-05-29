<template>
    <div class="main">


        <div class="container mt-sm-5 my-1">
            <div class="question ml-sm-5 pl-sm-5 pt-2">

                <h3>
                    {{ titleOne }}
                </h3>
            </div>
            <hr />
            <div class="question ml-sm-5 pl-sm-5 pt-2" v-for="(item, index) in qzarray" :key="item._id">

                <div class="py-2 h5"><b>{{ index + 1 + " " }}</b><b>{{ item.content }}</b></div>
                <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                    <label class="options">{{ item.option1 }}
                        <input type="radio" :value="item.option1" v-model="item.selectedAns">
                        <span class="checkmark"></span>
                    </label>
                    <label class="options">{{ item.option2 }}
                        <input type="radio" :value="item.option2" v-model="item.selectedAns">
                        <span class="checkmark"></span>
                    </label>
                    <label class="options">{{ item.option3 }}
                        <input type="radio" :value="item.option3" v-model="item.selectedAns">
                        <span class="checkmark"></span>
                    </label>
                    <label class="options">{{ item.option4 }}
                        <input type="radio" :value="item.option4" v-model="item.selectedAns">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <hr>
            </div>
            <div class="btn-sub">
                <button id="form-submit" class="mybutton" @click="submission">Submit</button>
            <button type="submit" id="form-submit" class="mybutton" ><router-link to="/student/dashboard" >Go Back</router-link></button> 
            </div>
            

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    name: 'questions',

    data() {
        return {
            details: null,
            qzarray: [],
            radio: [],
            titleOne: '',
        }
    },
    methods: {
        async getquestions() {
            try {



                const title = this.$route.query.title;
                console.log(title);
                const token = await localStorage.getItem('token')
                const questiondetails = await axios.get(import.meta.env.VITE_APIURL + '/get-questions', { headers: { Authorization: "bearer " + token }, params: { title } })
                console.log(questiondetails.data.data);
                this.qzarray = questiondetails.data.data;
                this.titleOne = title;
                this.qzarray.forEach((q) => {
                    q['selectedAns'] = ''
                });
                // console.log(questiondetails.data.data)


                // console.log(questiondetails.data.data[0].answer);
            }
            catch (err) {
                console.log(err);
            }

        },
        async submission() {
            try {
                //we have to implement the logic like this
                // if(radio == answer){
                //     alert("Your answer is correct you scored 10 out of 20")

                // }

                let count = 0;
                this.qzarray.forEach((it) => {
                    // console.log(it.answer);
                    console.log(it.selectedAns);
                    if (it.selectedAns === it.answer) {
                        count++;
                    }

                })
                const len = this.qzarray.length
                const percentage = ((count) / len) * 100;

                swal(`You scored ${count} out of ${len} and percentage: ${percentage}%`);
            }
            catch (err) {
                console.log(err);
            }
        },
        async gotoquiz() {
            try {
                this.$router.push({ name: 'studentquiz' });
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    mounted() {
        this.getquestions();
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #ddd;
}

.mybutton {
    background-color: white;
    border: none;
    color: #7a6ad8;
    padding: 10px;
    text-align: center;

    text-decoration: none;
    font-size: 15px;
    display: inline-block;
    margin: 0px 2rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    height: 40px;
    /* text-emphasis-color: white; */

}

.container {
    background-color: #7a6ad8;
    color: white;
    border-radius: 10px;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
    max-width: 700px;
}

.container>p {
    font-size: 32px;
}

.question {
    width: 75%;
}

.options {
    position: relative;
    padding-left: 40px;
}

#options label {
    display: block;
    margin-bottom: 15px;
    font-size: 14px;
    cursor: pointer;
}

.options input {
    opacity: 0;
}

.checkmark {
    position: absolute;
    top: -1px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #555;
    border: 1px solid #ddd;
    border-radius: 50%;
}

.options input:checked~.checkmark:after {
    display: block;
}

.options .checkmark:after {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 300ms ease-in-out 0s;
}

.options input[type="radio"]:checked~.checkmark {
    background: rgb(101, 99, 99);
    transition: 300ms ease-in-out 0s;
}

.options input[type="radio"]:checked~.checkmark:after {
    transform: translate(-50%, -50%) scale(1);
}

.btn-primary {
    background-color: rgba(250, 250, 250, 0.95);
    color: #ddd;
    border: 1px solid #ddd;
}

.btn-primary:hover {
    background-color: rgba(250, 250, 250, 0.95);
    border: 1px solid rgba(250, 250, 250, 0.95);
    color: #555;
}

.btn-success {
    padding: 5px 25px;
    background-color: #21bf73;
}


/* orange button  */

.main-button {

    background-color: #7a6ad8;
    color: #fff;
}

@media(max-width:576px) {
    .question {
        width: 100%;
        word-spacing: 2px;
    }
}

.orange-button {
    background-color: #5d5a5a;
    text-decoration-color: black;
}


.main .container .question h3{
    text-align: center;
    color:white;
    /* border:2px solid red; */
    margin-left:6rem;
}

.btn-sub{
    display: flex;
    justify-content: space-between;
}
</style>