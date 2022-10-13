<template>
  <div class="recipe-component">

    <!-- recipe view component -->
    <div class="recipe-view" v-show="openView">
      <div class="recipe-dialog">
        <div class="recipe-view-details">
          <h2 class="title">{{titleview}}</h2>
          <img class="image" :src="imageview" :alt="titleview" />
          <p class="description"><b>Description: </b>{{descriptionview}}</p>
          <p class="ingredients"><b>Ingredients: </b>{{ingredientsview}}</p>
          <p class="instructions"><b>Instructions: </b>{{instructionsview}}</p>
          <p class="recipe-time">
            <b>Prep:</b> {{ `${preptimeview}min`}}
            <b>Cook: </b>{{ `${cooktimeview}min`}}
          </p>
          <div class="view-actions">
            <button @click="openView = false">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- recipe search -->
    <div class="recipe-search">
      <h2>Find something delicious!</h2>
      <input type="search" placeholder="Search a recipe" v-model="search" @change="filteredRecipes" />
    </div>

    <!-- recipes feed -->
    <div class="recipe-card-list">
      <div class="recipe-card-no-data" v-if="recipes <= 0">
        <img src="@/assets/images/no-data.png" alt="No data" />
      </div>
      <div v-else class="recipe-card-item" v-for="recipe in $store.state.recipes.reverse()" :key="recipe.id">
        <router-link :to="'/recipe/' + recipe.id">
          <img :src="recipe.image" :alt="recipe.title" />
        </router-link>
        <h2 class="recipe-title">{{ recipe.title}}</h2>
        <p class="description">{{ recipe.description }} ...</p>
        <p class="recipe-time">
          <b>Prep:</b>
          {{ `${recipe.preptime}min`}}
          <b>Cook: </b>
          {{ `${recipe.cooktime}min`}}
        </p>
        <button @click="toggleView(recipe)">View Modal</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderComponent",
  data() {
    return {
      openView: false,
      search: null,
      recipes: null,

      //view recipe
      titleview: null,
      imageview: null,
      descriptionview: null,
      ingredientsview: null,
      instructionsview: null,
      preptimeview: null,
      cooktimeview: null,
    }
  },
  methods: {
    toggleView(recipe) {
      this.openView = true;
      this.titleview = recipe.title;
      this.imageview = recipe.image;
      this.descriptionview = recipe.description;
      this.ingredientsview = recipe.ingredients;
      this.instructionsview = recipe.steps;
      this.preptimeview = recipe.preptime;
      this.cooktimeview = recipe.cooktime;
    },
    listRecipes() {
      axios
        .get('/recipes')
        .then((response) => {
          this.$store.commit('SET_RECIPES', response.data)
          this.recipes = this.$store.state.recipes
        })
        .catch((error) => {
          console.log(error);
        })
    },
    filteredRecipes() {
      axios
        .get(`/recipes?title=like.%25${this.search.toLowerCase()}%25`)
        .then((response) => {
          this.$store.commit("SET_RECIPES", response.data)
          this.recipes = this.$store.state.recipes
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  created() {
    this.listRecipes();
  },
  watch: {
    search() {
      this.search.length >= 0 ? this.filteredRecipes() : this.listRecipes()
      this.recipes = this.$store.state.recipes;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";

.recipe-component {
  background: $background-color;
  padding: 30px;
}

.recipe-view {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.393);

  &>.recipe-dialog {
    min-width: 360px;
    max-width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
    border-radius: 4px;

    .recipe-view-details {
      .title {
        margin: 20px;
        text-transform: capitalize;
        text-align: center;
        color: $primary-color;
      }

      .image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
      }

      .description,
      .ingredients,
      .instructions,
      .recipe-time {
        margin: 20px auto;
        text-align: justify;
      }

      .recipe-time {
        text-align: right;
      }

      .view-actions {
        display: flex;
        justify-content: center;
      }
    }


  }

}

.recipe-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.recipe-card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.recipe-card-no-data img {
  margin: 40px auto 80px;
  max-width: 500px;
}

.recipe-card-item {
  background-color: $light-color;
  max-width: 350px;
  height: 500px;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 2px $primary-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 4px $primary-color;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 4px
  }

  .recipe-title {
    text-align: center;
    text-transform: capitalize;
  }

  .recipe-time {
    text-align: right;
  }

  .description {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-align: justify
  }
}

input {
  @include input-primary;
}

button {
  @include button-primary;
}
</style>