<script>
export default {
  name: "CarouselBase",
  data() {
    return {
      currentActive: 1,
      interval: null,
    };
  },
  props: {
    dotClass: Array,
    times: Number,
  },
  emits: ["change-active"],
  methods: {
    isActive(n) {
      return n === this.currentActive;
    },
    changeIndex(n) {
      this.currentActive = n;
      this.$emit("change-active", this.currentActive);
      clearInterval(this.interval);
      this.autoplay();
    },
    autoplay() {
      this.interval = setInterval(() => {
        if (this.currentActive < this.times) {
          this.currentActive++;
        } else {
          this.currentActive = 1;
        }
        this.$emit("change-active", this.currentActive);
      }, 5000);
    },
  },
  created() {
    this.autoplay();
  },
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <div
      v-for="n in times"
      :key="n"
      :class="['dot', dotClass, { active: isActive(n) }]"
      @click="changeIndex(n)"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;
.dot {
  height: 20px;
  width: 20px;
  border: 1px solid #e5e5e5;
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
  &.white {
    height: 15px;
    width: 15px;
  }
  &.blue {
    background-color: #9ce0ff;
    height: 15px;
    width: 15px;

    &.active {
      background-color: $dodgerblue;
    }
  }
}
</style>
