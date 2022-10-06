import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
// eslint-disable-next-line import/no-extraneous-dependencies
import 'quasar/src/css/index.sass'
import './styles/quasar-variables.sass'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
