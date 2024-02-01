// unocss
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import App from './App.vue'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'

// global css
import './assets/index.scss'

import { setupRouter } from '@/router'
import { setupIconPark } from '@/install/icons/icon-park'
import { setupElementPlus } from '@/install/framework/element-plus.js'
import { registerComponents } from '@/components'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupIconPark(app)
  setupElementPlus(app)
  registerComponents(app)
  app.mount('#app')
}


void bootstrap()
