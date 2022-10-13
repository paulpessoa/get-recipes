<template>
    <footer>
      <p>
        Designed by <a href="https://github.com/paulpessoa" target="_blank"> Paul Pessoa &#169;</a>
        {{new Date().getFullYear()}}
      </p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>


<style lang="scss" scoped>
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";

footer {
  p {
    text-align: center;
    margin: 40px;
  }
  a {
    color: $secondary-color;
  }
}
</style>