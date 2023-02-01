<script>
export default {
  name: "NavbarBase",
  props: {
    links: Array,
    listType: String,
  },
  methods: {
    buildImageUrl(image, target) {
      return new URL(`../assets/img/${target}/${image}.png`, import.meta.url)
        .href;
    },
  },
};
</script>

<template>
  <ul :class="listType">
    <li v-for="link in links" :key="link.text">
      <figure v-if="link.image">
        <img :src="buildImageUrl(link.image, 'main_nav')" :alt="link.image" />
      </figure>
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  &.link {
    a {
      text-transform: uppercase;
      color: white;
      margin: 0 15px;
      font-size: 20px;
    }
  }

  &.cs-card {
    li {
      height: 200px;
      width: calc(100% / 6);
      border: 2px solid $grey-border;
      background-color: $lightblue-bg;
      margin: 50px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 30px 0;
    }
    a {
      text-transform: capitalize;
      font-size: 20px;
      font-weight: bolder;
      margin: 20px 0;
    }
  }
}
</style>
