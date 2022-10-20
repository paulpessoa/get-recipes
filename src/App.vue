<template>
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  created() {
    document.title = "GetRecipes - Find something delicious!";
  }
}
</script>
