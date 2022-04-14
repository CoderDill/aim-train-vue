import { createStore } from 'vuex'
import AimApi from '@/api/AimApi'

const state = {
    username: null,
    token: null
}

const getters = {}

const actions = {
    async fetchUsers({ commit }) {
        try {
            const res = await AimApi.getCurrUser()
            commit('setUser', res.data)
        } catch (e) {
            console.log(e)
        }
    }
}

const mutations = {
  setUser(state, payload) {
    console.log(payload);
    state.username = payload.username;
  },
};

export default createStore({
    state,
    getters,
    actions,
    mutations
})