<script>
import { headerLinks, headerSlider } from "../data";
import AppLogo from "./AppLogo.vue";
import NavbarBase from "./NavbarBase.vue";
import SliderBase from "./SliderBase.vue";
export default {
  name: "AppHeader",
  components: { AppLogo, NavbarBase, SliderBase },
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
      <div class="container d-flex align-items-center">
        <app-logo></app-logo>
        <navbar-base :links="headerLinks"></navbar-base>
      </div>
    </slider-base>
  </header>
</template>
