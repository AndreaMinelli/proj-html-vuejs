<script>
export default {
  name: "GotopSquare",
};
</script>

<template>
  <a href="#">
    <div>
      <font-awesome-icon icon="fa-solid fa-chevron-up" class="fa-chevron" />
      <p>TOP</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

a {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
div {
  height: 50px;
  width: 50px;
  padding: 5px;
  background-color: $dodgerblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 16px;
  }

  .fa-chevron {
    font-size: 16px;
  }
}
</style>
