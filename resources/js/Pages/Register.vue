<template>
  <div class="flex align-items-center justify-content-center mt-8">
    <div class="surface-card p-4 shadow-4 border-round w-full lg:w-4">

      <div class="text-center mb-5">
        <img src="https://www.primefaces.org/primeblocks-vue/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Willkommen zu Barber's Book!</div>
        <span class="text-600 font-medium line-height-3">Du besitzt einen account?</span>
        <Link href="/login-view" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Jetzt anmelden!</Link>
      </div>

      <form @submit.prevent="form.post('/auth/register')">
        <label for="firstname" class="block text-900 font-medium mb-2">Vorname</label>
        <InputText id="firstname" class="w-full mb-3" v-model="form.firstname"/>
        <Message severity="error" v-if="errors.firstname" class="p-invalid mt-0">{{ errors.firstname.toString() }}</Message>

        <label for="surname" class="block text-900 font-medium mb-2">Nachname</label>
        <InputText id="surname" class="w-full mb-3" v-model="form.surname"/>
        <Message severity="error" v-if="errors.surname" class="p-invalid mt-0">{{ errors.surname.toString() }}</Message>

        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="email" class="w-full mb-3" v-model:modelValue="form.email" :errors="errors.email"/>
        <Message severity="error" v-if="errors.email" class="p-invalid mt-0">{{ errors.email.toString() }}</Message>

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <Password id="password" v-model="form.password" :feedback="true" toggle-mask class="mb-3"></Password>
        <Message severity="error" v-if="errors.password" class="p-invalid mt-0">{{ errors.password.toString() }}</Message>

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
import Message from 'primevue/message';

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
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
</style>


