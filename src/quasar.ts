import { AppFullscreen, Quasar } from 'quasar'
import type { App } from 'vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
// eslint-disable-next-line import/no-extraneous-dependencies
import 'quasar/src/css/index.sass'

export const useQuasar = (app: App<Element>) => {
  app.use(Quasar, {
    plugins: [AppFullscreen], // import Quasar plugins and add here
  })
}
