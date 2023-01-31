<script>
import { headerLinks, headerSlider } from "../data";
import AppLogo from "./AppLogo.vue";
import NavbarBase from "./NavbarBase.vue";
import SliderBase from "./SliderBase.vue";
import HeaderFunction from "./header_child/HeaderFunction.vue";
export default {
  name: "AppHeader",
  components: { AppLogo, NavbarBase, SliderBase, HeaderFunction },
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
      <div class="container d-flex align-items-center py-4">
        <app-logo class="w-25"></app-logo>
        <navbar-base :links="headerLinks"></navbar-base>
        <header-function></header-function>
      </div>
    </slider-base>
  </header>
</template>
