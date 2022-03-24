import { createApp } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router/index";

const store = createStore({
    state() {
        return {
            userId: null
        }
    },
    mutations: {
        setUser(state, payload) {
            console.log(payload)
            state.userId = payload.id
        }
    }
})

createApp(App).use(store).use(router).mount("#app");
