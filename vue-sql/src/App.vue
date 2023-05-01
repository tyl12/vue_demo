<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->



<script>

import axios from "axios"
export default{
  data(){
    return {
      name: "",
      password: "",
      age:1,
      info:[],
    }
  },

  methods: {
    get(){
      axios.get('http://127.0.0.1:9191/user').then(
        res=>{
          console.log(res.data)
          this.info = res.data
        }
      ).catch(err=>{
        console.error("fail to get uesr data")
      })
    }
  }
}

</script>



<template>
  <div>
    <button @click="get()">get the data from user table</button>
  </div>

  <li v-for="(item, index) in info">
     datastr: - {{ index }} - {{ item.name }} - {{item.password}} - {{item.age}}
  </li>

</template>