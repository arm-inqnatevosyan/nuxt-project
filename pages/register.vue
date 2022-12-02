<template>
    <main>      
        <div class="block">
     
                <div class="inputs">
                    <input type="text"  v-model="name"  placeholder="Name User"/>
                    <input type="email" v-model="email" placeholder="Email"/>
                    <input v-model="password" type="password" placeholder="Password"/>
                </div>
                <p>Люди, которые пользуются нашим сервисом,<br /> могли загрузить вашу контактную информацию <br />в Instagram. Подробнее</p>
                <p>Регистрируясь, вы принимаете наши Условия,<br /> Политику конфиденциальности и Политику в <br />отношении файлов cookie.</p>
                <button class="reg" @click='submit'>Registracia</button>
        
        </div>
    </main>
</template>

<script>
      export default {
        data() {
         return {
            todos:  [],
            name:'',
            email: '',
            password: ''
         };
        },
       methods: {
             
           async submit() {
                let post =  await this.$axios.$post('/api/register', {name:this.name, email:this.email, password:this.password});
             }
   
        },
    
       
      };
    </script>


