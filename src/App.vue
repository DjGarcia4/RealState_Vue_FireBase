<script setup>
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const { isAuth } = storeToRefs(auth)
</script>

<template>
  <v-app>
    <v-car class="">
      <v-row>
        <v-app-bar class="" color="green-darken-4">
          <template v-slot:prepend>
            <v-btn :to="{ name: 'home' }" class="text-h4 font-weight-bold"
              >Real <span class="">State</span></v-btn
            >
          </template>
          <template v-slot:append>
            <div v-if="isAuth">
              <v-btn :to="{ name: 'admin-properties' }" class="font-weight-bold">Admin</v-btn>
              <v-btn @click="auth.logOut" class="font-weight-bold">Log Out</v-btn>
            </div>
            <div v-else>
              <v-btn :to="{ name: 'home' }" class="font-weight-bold">Home</v-btn>
              <v-btn :to="{ name: 'login' }" class="font-weight-bold">Log in</v-btn>
            </div>
          </template>
        </v-app-bar>
        <v-main>
          <RouterView />
        </v-main>
      </v-row>
    </v-car>
    <v-footer class="bg-green-darken-4 text-center d-flex flex-column">
      <div>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
      </div>

      <div class="pt-0">
        Explore the possibilities of a new home with Real State. Our commitment to excellence drives
        us to provide personalized real estate solutions tailored to your unique needs. Whether
        you're buying, selling, or investing, trust us to make your real estate journey seamless and
        rewarding. Contact us today to turn your dreams into reality.
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Jared Garcia</strong></div>
    </v-footer>
  </v-app>
</template>
