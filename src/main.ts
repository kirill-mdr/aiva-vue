import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from "@//router";
import '@/assets/styles/animations.sass'
import '@/assets/styles/app.sass'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'


const app = createApp(App)

app
    .use(store)
    .use(router)
    .mount('#app')
