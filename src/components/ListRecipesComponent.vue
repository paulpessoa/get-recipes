<template>
  <div>
    <div class="recipe-search">
      <input type="search" placeholder="Search a recipe" v-model="search" @change="search()" />
      <button>Search</button>
    </div>
    <div class="recipe-card-list">
      <div class="recipe-card-item" v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="'/recipe/' + recipe.id">
          <img :src="recipe.image" :alt="recipe.title" />
        </router-link>
        <h2>{{ recipe.title }}</h2>
        <p>
          {{
          `Prep time: ${recipe.preptime} Cook time: ${recipe.cooktime} Serving: ${recipe.serving}`
          }}
        </p>
        <h4>Description:</h4>
        <p>{{ recipe.description }}</p>

        <br />
        <!-- <h4>Ingredients:</h4>
          <p v-for="ingredient in recipe.ingredients" :key="ingredient.id">
            {{`${ingredient.name} - ${ingredient.quantity} ${ingredient.unit}`}}
          </p>
          <br />
          
          <h4>Steps:</h4>
          <p v-for="step in recipe.steps" :key="step.id">
            Step {{ step.id }}: {{ step.description }}
          </p> -->

        <button @click="$router.push('/recipe/' + recipe.id)">
          View Recipe
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";

.recipe-search {
  display: flex;
  justify-content: center;
  align-items: center;
}

.recipe-card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.recipe-card-item {
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
}

input {
  @include input-primary;
}

button {
  @include button-primary;
}
</style>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: "Pasta",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-warak-enab-prato.jpg",
          serving: 9,
          preptime: 30,
          cooktime: 30,
          ingredients: [
            {
              id: 1,
              name: "Pasta",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Tomato",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Cheese",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        },
        {
          id: 2,
          title: "Pizza",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-luqaimat.jpg",
          ingredients: [
            {
              id: 1,
              name: "Sabonete",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Arroz",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Jornal",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Blablabla klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Cla cla claklsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Fla fla fla sf jdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        },
        {
          id: 3,
          title: "Churrasco",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-luqaimat.jpg",
          ingredients: [
            {
              id: 1,
              name: "Sabonete",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Arroz",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Jornal",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Blablabla klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Cla cla claklsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Fla fla fla sf jdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        },
        {
          id: 4,
          title: "Pasta",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-warak-enab-prato.jpg",
          serving: 9,
          preptime: 30,
          cooktime: 30,
          ingredients: [
            {
              id: 1,
              name: "Pasta",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Tomato",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Cheese",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        },
        {
          id: 5,
          title: "Pizza",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-luqaimat.jpg",
          ingredients: [
            {
              id: 1,
              name: "Sabonete",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Arroz",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Jornal",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Blablabla klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Cla cla claklsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Fla fla fla sf jdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        },
        {
          id: 6,
          title: "Churrasco",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-luqaimat.jpg",
          ingredients: [
            {
              id: 1,
              name: "Sabonete",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Arroz",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Jornal",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Blablabla klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Cla cla claklsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Fla fla fla sf jdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        },
        {
          id: 7,
          title: "Pasta",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-warak-enab-prato.jpg",
          serving: 9,
          preptime: 30,
          cooktime: 30,
          ingredients: [
            {
              id: 1,
              name: "Pasta",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Tomato",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Cheese",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        },
        {
          id: 8,
          title: "Pizza",
          description:
            "Lorem a klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
          image:
            "https://img.itdg.com.br/tdg/images/blog/uploads/2022/10/comida-do-catar-luqaimat.jpg",
          ingredients: [
            {
              id: 1,
              name: "Sabonete",
              quantity: 1,
              unit: "kg",
            },
            {
              id: 2,
              name: "Arroz",
              quantity: 2,
              unit: "kg",
            },
            {
              id: 3,
              name: "Jornal",
              quantity: 1,
              unit: "kg",
            },
          ],
          steps: [
            {
              id: 1,
              description:
                "Blablabla klsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 2,
              description:
                "Cla cla claklsjdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
            {
              id: 3,
              description:
                "Fla fla fla sf jdlaksj dlkajsdlkasjda sdlaksjdlkas jdlkas dasdas dasdasd",
            },
          ],
        }

      ],
    };
  }
}
</script>
