<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
       <label>File
        <input type="text"  v-model="title"/>
      </label>
       <label>File
        <input type="text"  v-model="content"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        file: '',
        title: '',
        content: ''
      }
    },
    methods: {
      submitFile(){
            let formData = new FormData();
            formData.append('image', this.file);
            formData.append('title', this.title);
            formData.append('content', this.content);
            const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('jwt=')).split('=')[1]; 
            this.$axios.$post( '/api/post_image',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${cookieValue}`
                }
              },
             window.location.reload()).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

