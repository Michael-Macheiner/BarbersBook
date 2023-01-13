<script setup>
import { Link } from '@inertiajs/inertia-vue3'
</script>

<template>
  <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🔥 AdonisJS | InertiaJS | Vue3 | PrimeVue Boilerplate🔥</div>
    <div class="align-items-center hidden lg:flex">
      <span class="line-height-3">Project setup and bug fixing, Lo Iacono Giulio</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
      <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
    </a>
    <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
      <i class="pi pi-times"></i>
    </a>
  </div>


  <div class="container">
    <h1>AdonisJS</h1>
    <p><a href="https://adonisjs.com/">AdonisJS</a> is a Node.js framework that contains everything you need to create a web app. Based upon the same concepts as Laravel, it will instantly feel familiar to Laravel developers.</p>

    <h1>Inertia</h1>
    <p><a href="https://inertiajs.com/">Inertia</a> is a new approach to building single-page web apps. It is essentially some 'glue' that joins the frontend and the backend together without the need of an API. Instead of returning static templates, Inertia allows you to return Vue, React or Svelte components directly from the backend!</p>

    <h1>Vue</h1>
    <p><a href="https://vuejs.org/">Vue</a> is a progressive JavaScript frontend framework designed to be flexible. The core Vue library focuses on the view layer only, and additional packages are needed for features like routing and state management.</p>

    <div class="links">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  gap: 10px;
}

</style>
