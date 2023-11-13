<script setup>
import { useForm, useField } from 'vee-validate'
import { loginSchema as validationSchema } from '../validation/loginSchema'
import { useAuthStore } from '../stores/auth'

const { handleSubmit } = useForm({ validationSchema })
const auth = useAuthStore()

const email = useField('email')
const password = useField('password')

const submit = handleSubmit((values) => {
  auth.login(values)
})
</script>

<template>
  <v-card elevation="17" max-width="650" class="card-custom rounded-xl w-75 mx-auto my-10">
    <v-row>
      <v-col cols="12" sm="6" class="imgBg">
        <p class="font-weight-bold text-h4 text-sm-h4 pa-10 text-green-darken-4">
          Unlock Your Real Estate Dreams
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="pa-4 d-flex flex-column align-center justify-center">
        <v-card-title class="text-center font-weight-black text-h5 text-sm-h4 text-green-darken-4"
          >Log In</v-card-title
        >
        <v-card-subtitle>Log in with your account.</v-card-subtitle>
        <v-container>
          <!-- <v-alert v-if="auth.hasError" type="error" :title="auth.errorMsg"></v-alert> -->

          <v-form>
            <v-text-field
              v-model="email.value.value"
              class="mt-3"
              label="E-mail"
              type="email"
              placeholder="example@example.com"
              required
              :error-messages="email.errorMessage.value"
            ></v-text-field
            ><v-text-field
              v-model="password.value.value"
              class="mt-3"
              type="password"
              label="Password"
              required
              :error-messages="password.errorMessage.value"
            ></v-text-field>
            <v-btn
              @click="submit"
              type="submit"
              color="green-darken-2 font-weight-black"
              class="w-100 my-5"
              >Log In</v-btn
            >
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.imgBg {
  background-image: url('/src/assets/login.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
}
@media screen and (max-width: 600px) {
  .imgBg {
    min-height: 300px; /* Altura para dispositivos móviles */
  }
}
</style>
