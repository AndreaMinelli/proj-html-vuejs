<script>
import { headerLinks } from "../data";
import AppLogo from "./AppLogo.vue";
import NavbarBase from "./NavbarBase.vue";
export default {
  name: "AppHeader",
  components: { AppLogo, NavbarBase },
  data() {
    return {
      headerLinks,
    };
  },
};
</script>

<template>
  <app-logo></app-logo>
  <navbar-base :links="headerLinks"></navbar-base>
</template>
