<template>
  <div class="flex align-items-center justify-content-center mt-8">
    <div class="surface-card p-4 shadow-4 border-round w-full lg:w-4">

      <div class="text-center mb-5">
        <img src="https://www.primefaces.org/primeblocks-vue/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Anmelden bei Barber's Book!</div>
        <span class="text-600 font-medium line-height-3">Du besitzt noch keinen account?</span>
        <Link href="/register-view" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Jetzt registrieren!</Link>
      </div>

      <form @submit.prevent="form.post('/auth/login')">

        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="email" class="w-full mb-3" v-model:modelValue="form.email"/>

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" type="password" class="w-full mb-3" v-model:modelValue="form.password"/>

        <a href="/password/forgot" class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Password vergessen?</a>

        <Button type="submit" :disabled="form.processing" label="Anmnelden" icon="pi pi-user" class="w-full mt-3"></Button>
      </form>

    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Link, useForm } from '@inertiajs/inertia-vue3';
const form = useForm({
  email: null,
  password: null,
});
</script>

<script>
import AuthLayout from "../Layouts/AuthLayout";

export default {
  layout: AuthLayout,
  setup(){
    return { value, form }
  }
};
</script>

<style scoped>
</style>
