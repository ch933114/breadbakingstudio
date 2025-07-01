import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import "@/assets/scss/Main.scss"

// 引入icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRightLong, faArrowRight, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faRightLong, faArrowRight, faChevronUp)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
