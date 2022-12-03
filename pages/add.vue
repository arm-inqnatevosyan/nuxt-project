<template>
  <div >
    <Navbar />
    <form action='http://localhost:8000/api/post_image' enctype="multipart/form-data" method="post" target="hiddenFrame">
    <div class="form-group">
      <input type="file" ref="file" v-on:change="handleFileUpload()"/>
        <input type="file" class="form-control-file" name="image">
        <input type="text"  v-model="title" class="form-control" placeholder="Post Title" name="title">
        <input type="text"  v-model="content" class="form-control" placeholder="Post Description" name="content">
        <input v-on:click="submitFile()" type="submit" id="add" value="Add Post" class="btn btn-default">            
      </div>
  </form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

  export default {
    data() {
        return {
            file: "",
            title: "",
            content: ""
        };
    },
    methods: {
        submitFile() {
            let formData = new FormData();
            formData.append("image", this.file);
            formData.append("title", this.title);
            formData.append("content", this.content);
            const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("jwt=")).split("=")[1];
            this.$axios.$post("/api/post_image", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `${cookieValue}`
                }
            }, window.location.reload()).then(function () {
                console.log("SUCCESS!!");
            })
                .catch(function () {
                console.log("FAILURE!!");
            });
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        }
    },
    components: { Navbar }
}
</script>

<style scoped>
    .form-group{
        width: 100% !important;
        display: flex;
        align-items:center;
        flex-direction:column;
        margin-top:50px;
    }
    .form-group input{
      width:300px !important;
      height:35px;
      outline:none !important;
      padding-left:10px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    </style>