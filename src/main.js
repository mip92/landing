import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import components from '@/components/UI/index'

const app = createApp(App)
components.forEach(myComponent =>{
    app.component(myComponent.name, myComponent)
})

app.use(store).mount('#app')
