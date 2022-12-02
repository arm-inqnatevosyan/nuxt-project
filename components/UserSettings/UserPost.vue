<template>
<div>

  <img :src="`${img}`" height = '400' width = '400'>

  <h1 class='ed'>title: {{ author }}</h1><br>
  <p class='ed'>title: {{ title }}</p><br>
  <p class='ed'>description: {{ description }}</p><br>


 
 <p>id:{{ id }}</p>
  <div v-for="(comments, x) in comments" :key="x">
    <p>coments:{{ comments.content }}</p>
  </div>
  <div>
    <input  id="text" placeholder="Add Comment ..."  v-model="content"  name="content" />
    <button @click = 'submitForm(id)' id = 'send'>send</i></button>
  </div>  
</div>
</template>

<script>
export default {
  props: {
      img: { required: true },
      id: { required: true },
      author: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      ['comments']: { type: Array, required: true },
  },
   data() {
          return {
            content: '',
          };
  },    
  method: {
     submitForm(id){
            alert(id)
            alert(this.content)
            this.$axios.$post(`http://localhost:8000/api/${id}/comment`, {content:this.content})
            window.location.reload()
      },
  }        
 } 
</script>