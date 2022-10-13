import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [ ],
  },
  getters: {
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    }
  },
  actions: {
    // saveResults({ commit }, recipes) {
    //   commit("SET_RECIPES", recipes);
    // }
  },
  modules: {
  }
})
