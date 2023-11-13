<script setup>
import HeaderVue from '../components/HeaderVue.vue'
import AboutUs from '../components/AboutUs.vue'
import BenefitsUs from '../components/BenefitsUs.vue'
import PropertyMain from '../components/PropertyMain.vue'
import useProperties from '../composables/useProperties'
import AdvertisementVue from '../components/AdvertisementVue.vue'
const { pool, propertiesFilter } = useProperties()
</script>

<template>
  <HeaderVue />
  <v-container>
    <AboutUs />
  </v-container>
  <AdvertisementVue />
  <v-container>
    <div class="mx-2 mx-sm-5 my-8">
      <h1 class="text-center mb-8">Explore Our Exclusive Listings</h1>
      <v-card class="mb-9 py-2 px-5 rounded-xl d-flex" elevation="17">
        <h1>Search</h1>
        <v-checkbox label="Pool" class="d-flex" v-model="pool" />
      </v-card>
      <v-row class="d-flex justify-center justify-sm-start">
        <v-col
          cols="6"
          sm="4"
          md="3"
          xl="2"
          v-for="property in propertiesFilter"
          :key="property.id"
        >
          <PropertyMain :property="property" />
        </v-col>
      </v-row>
    </div>
    <BenefitsUs />
  </v-container>
</template>
