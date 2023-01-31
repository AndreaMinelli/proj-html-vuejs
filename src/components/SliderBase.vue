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
    target: String,
  },
  methods: {
    buildImagePath(image) {
      return new URL(`../assets/img/${this.target}/${image}`, import.meta.url)
        .href;
    },
    isActive(i) {
      return i === this.currentActive;
    },
    autoplay() {
      setInterval(() => {
        if (this.currentActive < this.images.length - 1) {
          this.currentActive++;
        } else {
          this.currentActive = 0;
        }
      }, 3000);
    },
  },
  created() {
    this.autoplay();
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
