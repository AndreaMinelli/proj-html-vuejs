<script>
import { headerLinks, headerSlider } from "../data";
import AppLogo from "./AppLogo.vue";
import NavbarBase from "./NavbarBase.vue";
import CarouselBase from "./ui_components/CarouselBase.vue";
import HeaderFunction from "./header_child/HeaderFunction.vue";
import HeaderJumbotron from "./header_child/HeaderJumbotron.vue";
import GoTopSquare from "./ui_components/GoTopSquare.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
    NavbarBase,
    HeaderFunction,
    HeaderJumbotron,
    CarouselBase,
    GoTopSquare,
  },
  data() {
    return {
      headerLinks,
      headerSlider,
      currentIndex: 0,
    };
  },
  computed: {
    buildBgUrl() {
      return new URL(
        `../assets/img/header_slider/${this.headerSlider[this.currentIndex]}`,
        import.meta.url
      ).href;
    },
  },
  methods: {
    changeIndex(i) {
      this.currentIndex = i;
    },
  },
};
</script>

<template>
  <header
    :style="{
      backgroundImage: `url(${buildBgUrl})`,
    }">
    <div class="container">
      <div class="d-flex align-items-end py-4 justify-content-between">
        <go-top-square></go-top-square>
        <app-logo></app-logo>
        <navbar-base
          :links="headerLinks"
          class="flex-grow-1"
          listType="link"></navbar-base>
        <header-function></header-function>
      </div>
      <header-jumbotron></header-jumbotron>
    </div>
    <carousel-base
      :times="3"
      :dotClass="['double']"
      @change-active="changeIndex"></carousel-base>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-image: url("../assets/img/header_slider/slider-1.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;

  .logo {
    width: 15%;
    margin-right: 40px;
  }
}
</style>
