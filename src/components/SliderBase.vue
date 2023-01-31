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
    dotClass: String,
  },
  methods: {
    buildImagePath(image) {
      return new URL(`../assets/img/${this.target}/${image}`, import.meta.url)
        .href;
    },
    isActive(i) {
      return i === this.currentActive;
    },
    changeIndex(i) {
      this.currentActive = i;
    },
    autoplay() {
      setInterval(() => {
        if (this.currentActive < this.images.length - 1) {
          this.currentActive++;
        } else {
          this.currentActive = 0;
        }
      }, 5000);
    },
  },
  created() {
    // this.autoplay();
  },
};
</script>

<template>
  <div v-for="(image, i) in images" :key="image">
    <div
      v-if="isActive(i)"
      :style="{
        backgroundImage: `url(${buildImagePath(image)})`,
      }"
      class="slider">
      <slot></slot>
      <div class="d-flex justify-content-center align-items-center">
        <div
          v-for="(n, i) in images"
          :key="n"
          :class="['dot', dotClass, { active: isActive(i) }]"
          @click="changeIndex(i)"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
}

.dot {
  height: 20px;
  width: 20px;
  border: 1px solid #f2f2f2;
  background-color: #ffffff4d;
  margin: 20px 15px;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: white;

    &.double {
      background-color: transparent;
      border: 6px solid transparent;
      height: 10px;
      width: 10px;
      padding: 3px;
      box-shadow: inset 0 0 0 4px white, 0 0 0 2px white;
    }
  }
}
</style>
