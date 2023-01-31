<script>
import ButtonBase from "../ui_components/ButtonBase.vue";
export default {
  name: "HeaderJumbotron",
  components: { ButtonBase },
};
</script>

<template>
  <div class="jumbotron">
    <h1>Contemporary Ideas</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatem
      adipisci ut recusandae blanditiis magnam iure nisi aut veritatis soluta,
      dolore corrupti iusto possimus doloremque aperiam culpa a obcaecati!
      Dolore.
    </p>
    <button-base
      :classes="['button', 'primary']"
      label="register now"
      type="button"></button-base>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.jumbotron {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 80%;
  margin: 120px auto;
  color: white;
  h1 {
    font-family: $secondary-font;
    font-size: 60px;
    font-weight: bolder;
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    word-spacing: 3px;
  }
}
</style>
