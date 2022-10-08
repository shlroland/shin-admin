import { createApp } from 'vue'
import App from './App.vue'
import { useQuasar } from './quasar'
import { useVueRouter } from './router'

const app = createApp(App)

useQuasar(app)

useVueRouter(app)

app.mount('#app')
