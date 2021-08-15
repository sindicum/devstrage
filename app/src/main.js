import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/routeros.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueHighlightJS)
app.mount('#app')
