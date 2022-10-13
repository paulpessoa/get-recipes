<template>
  <header>
    <router-link to="/"><img class="logo" src="@/assets/images/getrecipes-no-bg.png" alt="GetRecipe Logo" /></router-link>
    <NewRecipeComponent v-show="isModalVisible" @close="closeModal"/>
    <button  @click="showModal">New Recipe</button>
  </header>
</template>

<script>
import NewRecipeComponent from '@/components/NewRecipeComponent.vue';
export default {
  name: 'HeaderComponent',
  props: {
    open: Boolean
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  components: {
    NewRecipeComponent
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";

header {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  img {
    height: 40px;
  }
  button {
   @include button-primary;
  }
}
</style>