import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import { useQuasar } from './quasar'
import { useVueRouter } from './router'
import { apolloClient } from './utils/graphql'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

useQuasar(app)

useVueRouter(app)

app.mount('#app')
