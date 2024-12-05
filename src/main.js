import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import router from './router'
import store from '@/store';
import vue3GoogleLogin from 'vue3-google-login'



createApp(App).use(router).use(createVuestic()).use(store).use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_CLIENT_ID
}).mount('#app')
