import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
// import routes/index.js untuk menyambungkan App dengan routingnya
import router from './routes'

createApp(App).use(router).mount('#app')
