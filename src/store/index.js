import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [ ],
    recipe: [ ]
  },
  getters: {
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    ID_RECIPE(state, recipe) {
      state.recipe = recipe;
    },
  },
  actions: {
    // saveResults({ commit }, recipes) {
    //   commit("SET_RECIPES", recipes);
    // }
  },
  modules: {
  }
})
