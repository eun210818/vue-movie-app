import { createApp } from 'vue';
import App from './App.vue';
import router from './routes'; // index 생략가능
import store from './store/';
import loadImage from './plugins/loadImage';

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app')