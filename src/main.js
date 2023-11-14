import 'boxicons';
import 'bootstrap'
import 'sweetalert2'
import "boxicons/css/boxicons.min.css";

import 'sweetalert2/src/sweetalert2.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
