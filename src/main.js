import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router/index.js';

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app');
