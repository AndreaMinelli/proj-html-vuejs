<script>
export default {
  name: "NavbarBase",
  props: {
    links: Array,
  },
};
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.text">
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
