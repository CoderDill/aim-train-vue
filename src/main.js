import { createApp } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router/index";
import './index.css'

const store = createStore({
    state() {
        return {
            username: null
        }
    },
    mutations: {
        setUser(state, payload) {
            console.log(payload)
            state.username = payload.username
        }
    }
})

createApp(App).use(store).use(router).mount("#app");
