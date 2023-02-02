<script>
export default {
  name: "ButtonBase",
  props: {
    label: String,
    type: String,
    classes: Array,
  },
  computed: {
    labelToUppercase() {
      const label = this.label;
      return label.toUpperCase();
    },
  },
};
</script>

<template>
  <button :type="type" :class="classes">{{ labelToUppercase }}</button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;
.button {
  padding: 15px 60px;
  font-size: 20px;
  border: none;
  margin: 30px 0;
  font-weight: bolder;
  letter-spacing: 2px;

  &.primary {
    background-color: $dodgerblue;
    color: white;
  }

  &.secondary {
    background-color: white;
    border: 1px solid $darkgrey-border;
    color: $grey-text;
  }

  &.bold {
    font-weight: bold;
  }
}
</style>
