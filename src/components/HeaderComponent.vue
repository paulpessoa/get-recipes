<template>
  <header>
    <router-link to="/"><img class="logo" src="@/assets/images/getrecipes-no-bg.png" alt="Logo" /></router-link>
    <button>New Recipe</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
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
    height: 50px;
  }
  button {
   @include button-primary;
  }
}
</style>