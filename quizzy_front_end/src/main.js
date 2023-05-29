import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assests/base.css';
import '../src/assests/owl.css';


import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
    icons:{
      iconfont:'mdisvg',
    },
    buttons: {
      capitalize: false,
  },
  });

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(vuetify);
