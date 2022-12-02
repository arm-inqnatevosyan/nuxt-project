 <template>
    <div>
        <img :src="`${img}`" alt="John" style="width:100%">
        <h1>{{ name }}</h1>
        <input type="file" accept="image/*" @change="onChange" />
        <input id="text" type="text"  v-model="content" placeholder="Change Password" name="content" />
        <button @click="password" id = 'send'>Change Password</button>
        <p class="title">Email - {{ email }}</p>
        <p>Social Media User</p>
    </div>    
</template>        




<script>
export default {
  props: {
      img: { required: true },
      id: { required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
  },
  data() {
          return {
            content: '',
            item:{
             image : null,
             imageUrl: null
            },
          };
  },        
   methods:{
             onChange(e) {
                const file = e.target.files[0]
                this.item.imageUrl = URL.createObjectURL(file)
                let images = new FormData();
                images.append('image', file); 
                const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('jwt=')).split('=')[1];       
                this.$axios.$post(`http://localhost:8000/api/profile_image`, images,  {
                     headers: {Authorization:  `${cookieValue}`}
                })
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
  
  }
 } 
</script>