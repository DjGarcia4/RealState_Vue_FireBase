import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//*Toast
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
//*Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//*Firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//vuetify
const vuetify = createVuetify({
  components,
  directives
})

//Firebase
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.use(vuetify)
app.use(ToastPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
