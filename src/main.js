import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify.js'

createApp(App).use(vuetify).use(store).use(router).mount('#app')
