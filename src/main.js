import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from './router'

library.add(faChevronDown)
library.add(faChevronUp)


createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
