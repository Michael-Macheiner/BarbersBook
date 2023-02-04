<template>
  <div class="flex align-items-center justify-content-center mt-8">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">

      <div class="text-center mb-5">
        <img src="https://www.primefaces.org/primeblocks-vue/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Willkommen zu Barber's Book!</div>
        <span class="text-600 font-medium line-height-3">Du besitzt einen account?</span>
        <Link href="/login-view" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Jetzt anmelden!</Link>
      </div>

      <form @submit.prevent="form.post('/auth/register')">
        <label for="firstname" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="firstname" class="w-full mb-3" v-model="form.firstname"/>

        <label for="surname" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="surname" class="w-full mb-3" v-model="form.surname"/>


        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="email" class="w-full mb-3" v-model:modelValue="form.email"/>


        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <Password id="password" v-model="form.password" :feedback="true" toggle-mask class="mb-3"></Password>

        <label for="password2" class="block text-900 font-medium mb-2">Password wiederholen</label>
        <Password id="password2" v-model="form.passwordVerify" :feedback="false" toggle-mask class="mb-3"></Password>

        <Button type="submit" :disabled="form.processing" label="Registrieren" icon="pi pi-user" class="w-full"></Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import { useForm } from '@inertiajs/inertia-vue3';
import { Link } from '@inertiajs/inertia-vue3';

const form = useForm({
  firstname: '',
  surname: '',
  email: '',
  password: '',
  is_email_verified: false,

})
</script>

<script>
import AuthLayout from "../Layouts/AuthLayout";

export default {
  layout: AuthLayout,
  setup(){
    return {
      value
    }
  }
};
</script>

<style scoped>
</style>
