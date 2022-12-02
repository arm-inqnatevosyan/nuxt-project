<template>
  <div id="app">
    <main>
        <div class="block">
                <h1>Instagram</h1>
                <div class="inputs">
                      <input  v-model="email" type="email" placeholder="Email"><br>
                      <input v-model="password" type="password" placeholder="Password"><br><br>
                </div>
                <button class="reg" @click = 'submit'>Open</button>
                <p style="margin-top: 20px;">Open Your <i>Facebook</i></p>
                <p>Don't have an account yet?,<i>Registracia</i></p>
        </div>
    </main>
  </div>  
</template>

<script>
import {useStore} from "vuex";
import Token from "~/helper/check.js";
      export default {
        data() {
         return {
            todos:  [],
            email: '',
            password: ''
         };
        },
       methods: {
             
           async submit() {
           
                let post =  await this.$axios.$post('/api/login', {email:this.email, password:this.password});
                if (post.message == 'success'){       
                      Token.save(post.token),
                      this.$store.dispatch('login')
                      this.$router.push('/home')
           }
             }
   
        },
    
       
      };
    </script>


