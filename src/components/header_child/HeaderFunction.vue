<script>
export default {
  name: "HeaderFunction",
};
</script>

<template>
  <ul class="d-flex align-items-center p-0">
    <li class="fa-solid">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </li>
    <li class="fa-solid fa-bag">
      <font-awesome-icon icon="fa-solid fa-bag-shopping" />
    </li>
    <li class="fa-solid"><font-awesome-icon icon="fa-solid fa-bars" /></li>
  </ul>
</template>

<style scoped>
.fa-solid {
  font-size: 20px;
  color: white;
  margin: 0 15px;
  cursor: pointer;
  position: relative;
}

.fa-bag::before {
  content: "0";
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(-50%);
  background-color: #40c4ff;
  height: 18px;
  width: 18px;
  font-size: 10px;

  border-radius: 50%;
}
</style>
