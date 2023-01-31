<script>
export default {
  name: "SliderBase",
  data() {
    return {
      currentActive: 0,
    };
  },
  props: {
    images: Array,
  },
  methods: {
    buildImagePath(image) {
      return new URL(
        `../assets/img/header_slider/${image.pic}`,
        import.meta.url
      ).href;
    },
    isActive(i) {
      return i === this.currentActive;
    },
  },
};
</script>

<template>
  <div v-for="(image, i) in images">
    <div
      v-if="isActive(i)"
      :style="{
        backgroundImage: `url(${buildImagePath(image)})`,
      }"
      class="slider">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
}
</style>
