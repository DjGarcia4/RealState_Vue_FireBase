<!-- eslint-disable no-unused-vars -->
<script setup>
import { useForm, useField } from 'vee-validate'
import { propertySchema, imageSchema } from '@/validation/propertySchema'
import { collection, addDoc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import useImage from '@/composables/useImage'
import useLocationMap from '@/composables/useLocationMap'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

const items = [1, 2, 3, 4, 5]

const { uploadImage, image, url } = useImage()
const { zoom, center, pin } = useLocationMap()

const db = useFirestore()
const router = useRouter()
const $toast = useToast()

const { handleSubmit } = useForm({
  validationSchema: {
    ...propertySchema,
    ...imageSchema
  }
})

const nameProperty = useField('nameProperty')
const picture = useField('picture')
const price = useField('price')
const rooms = useField('rooms')
const wc = useField('wc')
const parking = useField('parking')
const description = useField('description')
const pool = useField('pool', null, { initialValue: false })

const submit = handleSubmit(async (values) => {
  const { picture, ...property } = values
  const docRef = await addDoc(collection(db, 'properties'), {
    ...property,
    image: url.value,
    location: center.value
  })
  if (docRef.id) {
    router.push({ name: 'admin-properties' })
    $toast.success(`Property succesfully created!`)
  }
})
</script>
<template>
  <h1>New Property</h1>
  <p class="text-grey-darken-1">Create a new property by filling out the following form</p>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="17" class="rounded-xl">
          <v-container class="pa-10">
            <v-form>
              <v-text-field
                v-model="nameProperty.value.value"
                :error-messages="nameProperty.errorMessage.value"
                class="mt-3"
                label="Property Name"
                type="text"
                required
              ></v-text-field>
              <v-row class="d-flex align-center">
                <v-col cols="12" sm="9">
                  <v-file-input
                    v-model="picture.value.value"
                    :error-messages="picture.errorMessage.value"
                    @change="uploadImage"
                    class="mt-3"
                    accept="image/jpeg"
                    prepend-icon="mdi-camera"
                    label="Picture"
                    required
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-card flat class="text-center d-flex justify-center align-center">
                    <img v-if="image" :src="image" alt="" class="w-75 rounded-lg" />
                    <p v-else class="text-grey-lighten-1">There is not image yet</p>
                  </v-card>
                </v-col>
              </v-row>
              <v-text-field
                v-model="price.value.value"
                :error-messages="price.errorMessage.value"
                class="mt-3"
                label="Price"
                type="text"
                required
              ></v-text-field>
              <v-row class="mt-3">
                <v-col cols="12" sm="4">
                  <v-select
                    v-model="rooms.value.value"
                    :error-messages="rooms.errorMessage.value"
                    class=""
                    label="Rooms"
                    :items="items"
                    required
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-select
                    v-model="wc.value.value"
                    :error-messages="wc.errorMessage.value"
                    label="WC"
                    :items="items"
                    required
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-select
                    v-model="parking.value.value"
                    :error-messages="parking.errorMessage.value"
                    label="Parking"
                    :items="items"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-textarea
                v-model="description.value.value"
                :error-messages="description.errorMessage.value"
                class="mt-3"
                label="Description"
              ></v-textarea>
              <v-checkbox v-model="pool.value.value" label="Pool"></v-checkbox>
              <h3>Location</h3>
              <v-card flat style="height: 600px" class="rounded-lg">
                <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
                  <LMarker :lat-lng="center" draggable @moveend="pin" />
                  <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
                </LMap>
              </v-card>

              <v-row class="d-flex justify-center">
                <v-col cols="7" md="5">
                  <v-btn
                    @click="submit"
                    type="submit"
                    color="green-darken-2 font-weight-black"
                    class="w-100 my-5 pa-3"
                    >Add new property</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
