import './assets/main.css'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {createApp} from 'vue';
import App from './App.vue';
import router from './router'

import MaterialIcon from 'material-icons';

const app = createApp(App);
app.use(router);
app.use(MaterialIcon);
app.mount('#app');
