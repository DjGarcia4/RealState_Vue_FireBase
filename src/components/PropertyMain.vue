<script setup>
import useDialog from '../composables/useDialog'
import useProperties from '../composables/useProperties.js'
// import useLocationMap from '@/composables/useLocationMap'
// import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
// const { zoom, center, pin } = useLocationMap()
const { propertyPrice } = useProperties()
defineProps({
  property: {
    required: true
  }
})
// :to="{ name: 'property', params: { id: property.id } }"

// const isOpen = ref(false)
const { dialog, openClose } = useDialog()
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="800">
      <v-card class="rounded-xl pa-3">
        <div elevation="17" class="rounded-xl ma-5 d-flex flex-column flex-sm-row align-center">
          <img :src="property.image" alt="Image About Us" class="imgAbout rounded-xl" />
          <div class="d-flex flex-column justify-center ma-3 text-center text-sm-start pa-5">
            <h1>{{ property.nameProperty }}</h1>
            <p class="text-h7 text-sm-h6">
              {{ property.description }}
            </p>
            <p class="text-h7 text-sm-h6 font-weight-bold text-h5 mt-5">
              Price: <span class="text-amber-accent-4">{{ propertyPrice(property.price) }}</span>
            </p>
          </div>
        </div>
        <div class="d-flex justify-space-around">
          <div class="d-flex flex-column justify-center align-center">
            <span class="mdi mdi-toilet icon-lg"></span>
            <p>{{ property.wc }}</p>
          </div>
          <div class="d-flex flex-column justify-center align-center">
            <span class="mdi mdi-parking icon-lg"></span>
            <p>{{ property.parking }}</p>
          </div>
          <div class="d-flex flex-column justify-center align-center">
            <span class="mdi mdi-bed icon-lg"></span>
            <p>{{ property.rooms }}</p>
          </div>
        </div>
        <!-- <v-card flat style="height: 700px" class="rounded-lg">
          <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
            <LMarker :lat-lng="center" draggable @moveend="pin" />
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
          </LMap>
        </v-card> -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="openClose"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- ******************************** -->

  <v-card class="rounded-xl mb-5" elevation="12">
    <v-img :src="property.image" height="200px" cover></v-img>
    <v-card-title class="font-weight-bold text-h7">{{ property.nameProperty }}</v-card-title>

    <p class="px-5 font-weight-black">
      Price: <span class="text-grey-lighten-1">{{ propertyPrice(property.price) }}</span>
    </p>
    <v-card-text class="text-truncate">{{ property.description }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn size="large" color="yellow-darken-3" @click="openClose">See More</v-btn>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> See more</v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
/* Define una clase de estilo para hacer los iconos más grandes */
.icon-lg {
  font-size: 2em; /* Puedes ajustar el tamaño según tus necesidades */
}
</style>
