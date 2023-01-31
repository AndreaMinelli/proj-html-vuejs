<script>
import { headerLinks, headerSlider } from "../data";
import AppLogo from "./AppLogo.vue";
import NavbarBase from "./NavbarBase.vue";
import SliderBase from "./SliderBase.vue";
import HeaderFunction from "./header_child/HeaderFunction.vue";
import HeaderJumbotron from "./header_child/HeaderJumbotron.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
    NavbarBase,
    SliderBase,
    HeaderFunction,
    HeaderJumbotron,
  },
  data() {
    return {
      headerLinks,
      headerSlider,
    };
  },
};
</script>

<template>
  <header>
    <slider-base
      :images="headerSlider"
      target="header_slider"
      dotClass="double">
      <div class="container">
        <div class="d-flex align-items-center py-4 justify-content-between">
          <app-logo class="w-25"></app-logo>
          <navbar-base :links="headerLinks" class="flex-grow-1"></navbar-base>
          <header-function></header-function>
        </div>
        <header-jumbotron></header-jumbotron>
      </div>
    </slider-base>
  </header>
</template>
