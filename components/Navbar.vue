<template>
  <nav>
        <NuxtLink to="/"><div class="logo"><h1>Instagram</h1></div></NuxtLink>
        <div class="icons">
            <i class="fa-solid fa-magnifying-glass"></i>
            <NuxtLink to="/"><img src="./home.png" width="20" /></NuxtLink>
            <NuxtLink to="/add"><img src="./comment.png" width="20" /></NuxtLink>
            <NuxtLink to="/users"><img src="./heart.png" width="20" /></NuxtLink>
        </div>
        <ul>
            <li><NuxtLink to="/" v-if="hasToken">Home</NuxtLink></li>
            <li><NuxtLink to="/sign" v-if="!hasToken">Sign In</NuxtLink></li>
            <li><NuxtLink to="/registr" v-if="!hasToken">Register</NuxtLink></li>
            <li><NuxtLink to="/profile" v-if="hasToken">Profile</NuxtLink></li>
            <li><NuxtLink to="/users" v-if="hasToken">Users</NuxtLink></li>
            <li><NuxtLink to="/add" v-if="hasToken">Add</NuxtLink></li>
            <li><NuxtLink to="/logout"  @click.prevent="logout">Logout</NuxtLink></li>
        </ul>
    </nav>
</template>



<script>

import {useStore} from "vuex";
export default {
    name: 'NavbarVue',
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
       document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      this.$store.dispatch('logout')
      this.$router.push('/logins')
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
nav{
    width:  80%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto !important;
    margin-left: 30px;
    margin-right: 30px;
}
ul{
    display: flex;
    list-style: none;
    align-items: center;
}
.logo{
    font-family: 'Lobster', cursive;
    width: 200px;
}
.icons{
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    margin-left: 120px;
}
.icons i{
    font-size: 21px;
}
li{
    margin-left: 20px;
}
a{
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: black;
    font-size: 14px;
}
</style>