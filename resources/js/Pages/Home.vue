<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import { ref } from 'vue';
import "primeflex/primeflex.css";

let count = ref(0);
const props = defineProps({
  test: {
    type: Number,
    required: true
  }
});
</script>

<script>
import Button from "primevue/button";

export default {
  components: {
    Button
  },
  props: {
    msg: String
  }
}
</script>

<template>
  <div class="box">
    <div class="items"><h1>Inertia + Adonis + Vue 3!</h1>
      <button class="button" @click="count = count + 1">Count is {{count}}</button>
      <p>"{{props.test}}" was sent from the backend</p>
      <p>Attempt creating an Adonis project for Diplomarbeit NR. {{props.test}}</p>
      <Link href="/about">About</Link>
    </div>
    <div>
      <div class="links">
        <Button label="Primary" />
        <Button label="Secondary" class="p-button-secondary" />
        <Button label="Success" class="p-button-success" />
        <Button label="Info" class="p-button-info" />
        <Button label="Warning" class="p-button-warning" />
        <Button label="Warning" class="p-button-help" />
        <Button label="Danger" class="p-button-danger" />
      </div>
      <div class="buttons">
        <i class="pi pi-bolt" style="font-size: 2rem"></i>
        <i class="pi pi-hourglass pi-spin" style="font-size: 1.5rem"></i>
      </div>
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

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  gap: 10px;
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

.links {
  margin-left: 10rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
