import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store.js";
import {router} from "./router/index.js";

const app = createApp(App)
app.use(store)
app.use(router)
app.config.devtools = true
app.mount('#app')
