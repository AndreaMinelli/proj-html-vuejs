<script>
export default {
  name: "NavbarBase",
  props: {
    links: Array,
    listType: String,
  },
  methods: {
    buildImageUrl(image) {
      return new URL(`../assets/img/main_nav/${image}.png`, import.meta.url)
        .href;
    },
  },
};
</script>

<template>
  <ul :class="listType">
    <li v-for="link in links" :key="link.text">
      <figure v-if="link.image">
        <img :src="buildImageUrl(link.image)" :alt="link.image" />
      </figure>
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      height: 150px;
      width: calc(100% / 6);
      border: 2px solid #f2f2f2;
      background-color: #f2f8fc;
      margin: 50px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    a {
      text-transform: capitalize;
      font-size: 20px;
      font-weight: bolder;
      margin: 30px 0;
    }
  }
}
</style>
