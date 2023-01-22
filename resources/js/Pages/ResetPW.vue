<template>
  <div class="align-self-center surface-card p-4 shadow-2 border-round" style="width: 50%;">
    <div class="text-3xl font-medium text-900 mb-3">Password neu setzen.</div>
    <div class="font-medium text-500 mb-3">Gib deine E-Mail ein um eine Anfrage zur wiederherstellung des Passwords.</div>
    <form @submit.prevent="form.post('/password/reset/')">
      <InputText id="email" type="email" class="w-25rem mb-3" v-model:value="email"/><br>
      <Button type="submit">Reset Password</Button>
    </form>
  </div>
</template>


<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
</script>

<script>
import AuthLayout from "../Layouts/AuthLayout";
import {useForm} from "@inertiajs/inertia-vue3";

export default {
  name: "ResetPW",
  layout: AuthLayout,
  setup() {
    const form = useForm({
      email: '',
    });
    return { form, email }
  },
}
</script>

<style scoped>

</style>
