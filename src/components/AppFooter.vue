<script>
import FooterTop from "./footer_child/FooterTop.vue";
import FooterBottom from "./footer_child/FooterBottom.vue";
export default {
  name: "AppFooter",
  components: { FooterTop, FooterBottom },
};
</script>

<template>
  <footer>
    <div class="container">
      <footer-top></footer-top>
      <footer-bottom></footer-bottom>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #222222;
}
</style>
