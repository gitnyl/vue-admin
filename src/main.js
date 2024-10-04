import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router/index.js';
import store from './store';

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app');
