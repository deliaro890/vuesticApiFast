import { createStore } from 'vuex';
import { decodeCredential } from "vue3-google-login";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }, response) {
      // Aquí puedes agregar tu lógica de autenticación
      const userData = decodeCredential(response.credential)
      commit('SET_USER', userData);
      localStorage.setItem('user', JSON.stringify(userData));
    },
    logout({ commit }) {
      commit('LOGOUT');
      localStorage.removeItem('user');
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user,
  },
});

// Recuperar el usuario del almacenamiento local si está disponible
const storedUser = localStorage.getItem('user');
if (storedUser) {
  store.commit('SET_USER', JSON.parse(storedUser));
}

export default store;
