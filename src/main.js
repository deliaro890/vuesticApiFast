import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import router from './router'

createApp(App).use(router).use(router).use(createVuestic()).mount('#app')
