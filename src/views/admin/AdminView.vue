<script setup>
import useProperties from '../../composables/useProperties.js'
import PropertyVue from '@/components/PropertyAdmin.vue'
const { propertiesCollection } = useProperties()
</script>
<template>
  <h1>Admin Panel</h1>
  <v-row>
    <v-col>
      <v-card class="rounded-lg pa-5 my-3" elevation="17">
        <v-btn color="green-darken-2 font-weight-black" :to="{ name: 'new-property' }">
          New Property</v-btn
        >
      </v-card>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center justify-sm-start mx-1">
    <v-col
      cols="6"
      sm="4"
      md="3"
      xl="2"
      v-for="property in propertiesCollection"
      :key="property.id"
    >
      <PropertyVue :property="property" />
    </v-col>
  </v-row>
</template>
