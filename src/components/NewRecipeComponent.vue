<template>
  <div class="recipe-component">
    <div class="new-recipe-dialog">
      <div class="dialog-form">
        <h2>Create a new</h2>
        <form @submit.prevent="newRecipe">
          <input v-model="title" type="text" placeholder="Title">
          <input type="file" placeholder="Image ( a default image upload )" disabled>
          <textarea v-model="description" placeholder="Description" />
          <textarea v-model="ingredients" placeholder="Ingredients" />
          <textarea v-model="steps" placeholder="Instructions" />
          <div class="recipe-time">
            <input v-model="preptime" type="number" placeholder="Prep: 50 minutos">
            <input v-model="cooktime" type="number" placeholder="Cook: 20 minutos">
          </div>
          <div class="recipe-actions">
            <button class="button-cancel" @click="close">Cancel</button>
            <button class="button-save" type="submit">Save Recipe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  name: 'NewRecipeComponent',
  data() {
    return {
      title: '',
      image: '',
      description: '',
      ingredients: '',
      steps: '',
      preptime: '',
      cooktime: ''
    }
  },
  
  methods: {
    close() {
      this.$emit('close');
    },
    
    newRecipe() {
      axios
      .post('/recipes', {
        title: this.title.toLowerCase(),
          // this is the default image until integrated with a storage service
          image: 'https://apply.sts.net.pk/assets/images/default-upload-image.jpg',
          description: this.description.toLowerCase(),
          ingredients: this.ingredients.toLowerCase(),
          steps: this.steps.toLowerCase(),
          preptime: this.preptime,
          cooktime: this.cooktime
        })
        .then(() => {
          axios
          .get('/recipes')
          .then((response) => {
            this.$store.commit('SET_RECIPES', response.data)
            this.recipes = this.$store.state.recipes
            response ? this.$emit('close') : console.log('error')
            })
            .catch((error) => {
              console.log(error);
            })
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";

.recipe-component {


  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.393);


  &>.new-recipe-dialog {
    min-width: 360px;
    max-width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: $background-color;
    border-radius: 4px;
  }
}

.dialog-form {
  max-width: 450px;
  margin: 0 auto;

  h2 {
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  input {
    @include input-primary;
  }

  textarea {
    @include textarea-primary;
  }

  .recipe-time {
    display: flex;
    justify-content: space-evenly;

    input:nth-child(1) {
      margin-right: 20px;
    }
  }

  .recipe-actions {
    display: flex;
    flex-direction: column-reverse;

    button {
      margin: 10px 0;
    }

    .button-save {
      @include button-primary;
    }

    .button-cancel {
      @include button-cancel;
    }
  }
}
</style>