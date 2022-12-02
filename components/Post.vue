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
    <input  id="text" placeholder="Add Comment ..."  v-model="content"  name="content" />
    <button @click="$emit('success', id, content)" id = 'send'><i class="fa-regular fa-paper-plane"></i></button>
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
  }        
 } 
</script>