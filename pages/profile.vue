<template>    
 <div class="main">
  <div>
      <Profile  v-for="todo in todos" :key="todo.id" :name="todo.name" :img="todo.img" :id="todo.id" :email="todo.email"/> 
  </div>
  <div>
      <UserPost @success="submitForm"  v-for="post in posts" :key="post.id" :author="post.author" :description ="post.content"  :title="post.title"  :comments="post.comments" :img="post.img" :id="post._id"/> 
  </div>
 </div> 
</template>
<script>
  import UserPost from "@/components/UserSettings/UserPost";
  import Profile from "@/components/UserSettings/Profile";
  import axios from "axios"; 
  import {useRouter} from "vue-router";
  import {useStore} from "vuex";
  export default {
    components: {UserPost, Profile},
    data() {
     return {
        todos:  [],
        posts: [],
        item:{
          image : null,
          imageUrl: null
      },
      content: '',
       img: ''
     };
    },
   methods: {
        
 async created() {
    try {        
        const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('jwt=')).split('=')[1]; 
        let response  = await this.$axios.$get('/api/userss', {
                headers: {
                    'Authorization': `${cookieValue}`
                }
              })
        this.todos = response
        let responses  = await this.$axios.$get(`http://localhost:8000/api/${this.todos[0].name}/porfile_post`)
        this.posts = responses
    

  
        for(var i = 0;i < this.posts.length; i++){
                     var Name = document.createElement("div");
                     var Description = document.createElement("div");
                     var Author = document.createElement("div");
                     const url = `http://localhost:8000/api/${responses[i].img[0]}/post_image`
    
                     const options = {
                        method: "GET"
                     }
    
                     let response = await fetch(url, options)
                     const imageBlob = await response.blob()
                     const imageObjectURL = URL.createObjectURL(imageBlob);

                     this.posts[i].img = (imageObjectURL)
                     
        }
        for(var i = 0;i < this.todos.length; i++){
                     var Name = document.createElement("div");
                     var Description = document.createElement("div");
                     var Author = document.createElement("div");
                     const url = `http://localhost:8000/api/${ this.todos[i].img[0]}/profile_image`
    
                     const options = {
                        method: "GET"
                     }
    
                     let response = await fetch(url, options)
                     const imageBlob = await response.blob()
                     const imageObjectURL = URL.createObjectURL(imageBlob);

                     this.todos[i].img = (imageObjectURL)                    
        }


    } catch (e) {
      console.error(e);
    }
  },
      submitForm(id){
            alert(id)
            alert(this.content)
            this.$axios.$post(`http://localhost:8000/api/${id}/comment`, {content:this.content})
                 window.location.reload()
      },
      
      password(){
           const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('jwt=')).split('=')[1];  
            const headers = {
              'Content-Type': 'application/json',
              'Authorization':  `${cookieValue}`
           }     
            this.$axios.$post('http://localhost:8000/api/change-password', {content:this.content},{
               headers: headers
           })
          
      },

     
    },

    mounted() {
      this.created();
    
    },
  };
</script>
    
    
    
    
    <style scoped>
    .main{
        width: 100% !important;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin-left:10% !important;
        margin-top:50px;
    }
    .icons{
      display:flex;
      width:60px !important;
      justify-content:space-between;
      margin-right:0;
      float:right;
    }
    .main div{
      width:50%;
      padding-left:10px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .main img{
        height: 400px;
        width:100%;
        position:relative;
    }
    h1 {
      text-decoration: underline;
    }
    .ed{
      padding-left:10px;
    }
    li {
      color: white;
    }
    .p{
      display:none;
    }
    form{
        display:flex;
        justify-content: space-between;
        width: 350px !important;
        align-items: center;
        height: 40px;
        margin-top:10px;
    }
    form i{
      outline:none;
      border:none !important;
      font-size:20px;
      color:rgb(52, 157, 228);
    }
    form button{
      height:35px;
      width:50px;
    }
    form .input{
      width:300px;
      height:35px;
      outline:none !important;
      padding-left:10px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    ::placeholder{
      color:black;
    }
</style>