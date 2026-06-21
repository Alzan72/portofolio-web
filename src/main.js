import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import '@/css/app.css' 
import '@/css/default.css'
// import 'tw-animate-css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
