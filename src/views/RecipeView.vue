<template>
  <div class="recipe-component">
    <!-- recipe view component -->
    <div class="recipe-view">
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
          <button @click="returnRouter">Return to recipes</button>
        </div>
        <div class="recipe-comments">
          <h3>Comments</h3>
          <div v-for="comment in comments" :key="comment.id">
            <p><i>{{comment.date}} - {{comment.comment}}</i></p>
            <router-link :to="comment.link" target="_blank">
              <b>{{comment.user}}</b>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "RecipeView",
  data() {
    return {
      //view recipe
      titleview: this.$store.state.recipe.title,
      imageview: this.$store.state.recipe.image,
      descriptionview: this.$store.state.recipe.description,
      ingredientsview: this.$store.state.recipe.ingredients,
      instructionsview: this.$store.state.recipe.steps,
      preptimeview: this.$store.state.recipe.preptime,
      cooktimeview: this.$store.state.recipe.cooktime,
      comments: [{
        id: 1,
        comment: "This is a comment very cool and nice. is a comment very cool and nice. is a comment very cool and n is a comment very cool and nice.",
        date: "05-02-2020",
        user: "Julyus Klaus",
        link: "https://github.com/paulpessoa"
      },
      {
        id: 2,
        comment: "This is another comment amazing. This is another comment amazin This is another comment amazins is another comment amazing.",
        date: "27-09-2021",
        user: "Nora Jones",
        link: "https://github.com/paulpessoa"
      }],
    }
  },
  methods: {
    returnRouter() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";

.recipe-component {
  background: $background-color;
  padding: 40px;
}

.recipe-view-details {
  margin: 0 auto;
  max-width: 600px;
  background: $light-color;
  border-radius: 4px;
  padding: 30px;

  .title {
    margin: 20px;
    text-transform: capitalize;
    text-align: center;
    color: $primary-color;
  }

  .image {
    width: 100%;
    height: 350px;
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
    justify-content: right;

    button {
      @include button-primary;
    }
  }
}

.recipe-comments {
  text-align: left;
  h3 {
    margin-bottom: 16px;
    text-transform: capitalize;
    color: $primary-color;
  }
  b {
    color: $dark-color;
    font-size: 14px;
  }

  p {
    margin-top: 20px;
  }
}
</style>