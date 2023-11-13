<script setup>
import useProperties from '../composables/useProperties.js'
import useDialog from '../composables/useDialog'
const { propertyPrice, deleteItem } = useProperties()
defineProps({
  property: {
    required: true
  }
})
const { dialog, openClose } = useDialog()
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="800">
      <v-card class="rounded-xl pa-3">
        <div elevation="17" class="rounded-xl ma-5 d-flex flex-column flex-sm-row align-center">
          <img
            :src="property.image"
            height="300"
            alt="Image About Us"
            class="imgAbout rounded-xl"
          />
          <div class="d-flex flex-column justify-center ma-3 text-center text-sm-start pa-5">
            <h1>Delete Property</h1>
            <p class="text-h7 text-sm-h6">
              Are you sure you want do delete
              <span class="font-weight-bold text-red-darken-3">{{ property.nameProperty }}</span>
              ? All of your data will be permanently removed. This action cannot be undone.
            </p>
          </div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red-darken-1"
            variant="text"
            @click="deleteItem(property.id, property.image)"
          >
            Delete
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="openClose"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- **************** -->
  <v-card class="rounded-xl mb-5" elevation="12">
    <v-img :src="property.image" height="200px" cover></v-img>
    <v-card-title class="font-weight-bold text-h7">{{ property.nameProperty }}</v-card-title>
    <p class="px-5 font-weight-black">
      Price: <span class="text-grey-lighten-1">{{ propertyPrice(property.price) }}</span>
    </p>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :to="{ name: 'edit-property', params: { id: property.id } }"
        size="large"
        color="yellow-darken-3"
        variant="text"
        icon="mdi mdi-store-edit"
      ></v-btn>
      <v-btn
        size="large"
        color="red-darken-1"
        variant="text"
        icon="mdi mdi-delete"
        @click="openClose"
      ></v-btn>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> See more</v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>
