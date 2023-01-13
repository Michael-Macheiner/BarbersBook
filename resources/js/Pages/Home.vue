<script setup>
import { Link } from '@inertiajs/inertia-vue3'

import {ref} from 'vue';
let count = ref(0);
const props = defineProps({
  test: {
    type: String,
    required: true
  },
  attempt: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="box">
    <div class="items"><h1>Inertia + Adonis + Vue 3!</h1>
      <button class="button" @click="count = count + 1">Count is {{count}}</button>
      <p>"{{props.test}}" was sent from the backend</p>
      <p>Attempt creating an Adonis project for Diplomarbeit NR. {{props.attempt}}</p>
      <Link href="/about">About</Link>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  height: 2rem;
  padding: 5px;
}
</style>
