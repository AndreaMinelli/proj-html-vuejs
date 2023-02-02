<script>
import FooterTop from "./footer_child/FooterTop.vue";
export default {
  name: "AppFooter",
  components: { FooterTop },
};
</script>

<template>
  <footer>
    <div class="container">
      <footer-top></footer-top>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #222222;
}
</style>
