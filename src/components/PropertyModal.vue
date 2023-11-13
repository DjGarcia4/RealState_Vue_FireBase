<script setup>
import useDialog from '../composables/useDialog'
// Observador para la variable 'dialog'
const { dialog, openClose } = useDialog()
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Use Google's location service?</span>
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at
          neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem
          ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed
          vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur
          nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum
          pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus
          quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet,
          nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pe
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="openClose"> Disagree </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="openClose"> Agree </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
