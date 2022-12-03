<template>
  <main>
            <Navbar />
            <div class="block"  v-if="$route.query.message">
                <form @submit.prevent="onSubmit">
                    <h1>Instagram</h1>
                    <div class="inputs">
                          <input type="email" placeholder="Email"><br>
                          <input type="password" placeholder="Password"><br><br>
                    </div>
                    <button class="reg">Login</button>
                    <p style="margin-top: 20px;">Open Your <i>Facebook</i></p>
                    <p>Don't have an account yet?,<i>Registracia</i></p>
                </form>
            </div>
            <footer>
    <ul>
            <li>Meta</li>
            <li>Информация</li>
            <li>Блог</li>
            <li>Вакансии</li>
            <li>API</li>
            <li>Конфиденциальность</li>
            <li>Условия</li>
            <li>Популярные аккаунты</li>
            <li>Хэштеги</li>
            <li>Места</li>
            <li>Instagram Lite</li>
        </ul>
  </footer>
        </main>
</template>

<script>
import {useStore} from "vuex";
import {save} from "~/helper/check.js";
export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/home')
    }
  }
}
</script>


<style scoped>
 *{
        margin: 0
    }
            @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
            main{
                display: flex;
                flex-direction: column;
                width: 100%;
            }
           
            .block{
                height: 81vh;
                width: 40%;
                border: 1px solid rgba(128, 128, 128, 0.363);
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
               padding: 15px;
               margin: 20px auto !important;
            }
            .block h1{
                font-family: 'Lobster', cursive;
                font-weight: 400;
                font-size: 30px;
                height: 60px;
                text-align: center;
           
            }
            .one{
                color: grey;
                font-size: 17px !important;
            }
            .block p{
                font-family:Verdana, Geneva, Tahoma, sans-serif;
                font-size: 10px;
                text-align: center;
                line-height: 20px;
            }
            .block button{
                width: 250px;
                height: 30px;
                outline: none;
                border: none;
                background-color: rgb(40, 166, 224);
                color: white;
               font-family: sans-serif; 
               border-radius: 5px;
            } 
            .block div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .inputs{
                display: flex;
                flex-direction: column;
            }
            
            .inputs{
                margin-top: 10px;
            }
            .inputs input{
                margin-top: 20px;
                width: 280px;
                height: 40px;
                outline: none;
                border: none;
                border: 1px solid rgba(128, 128, 128, 0.363);
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                padding-left: 10px;
                border-radius: 5px;
                background-color: rgba(211, 201, 201, 0.192);
            }
            ::-webkit-input-placeholder{
                color: grey;
            }
            .reg{
                width: 150px;
                height: 30px;
                outline: none;
                border: none;
                background-color: rgb(40, 166, 224);
                color: white;
               font-family: sans-serif; 
               border-radius: 5px;
            }
            @media (max-width:900px){
                img{
                    display: none;
                }
                main{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .block{
                    width: 60%;
                }
            }
            footer{
                width: 100%;
                display: flex;
            }
            footer ul{
                width: 100%;
                display: flex;
                justify-content: space-around;
                list-style: none;
            }
            footer ul li{
                text-decoration: none;
                font-family: sans-serif;
                color: grey !important;
                font-size: 13px;
            }
</style>
