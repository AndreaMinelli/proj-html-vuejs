<script>
import NavbarBase from "./NavbarBase.vue";
import { mainNavLinks } from "../data";
export default {
  name: "AppMain",
  components: { NavbarBase },
  data() {
    return {
      mainNavLinks,
    };
  },
};
</script>

<template>
  <navbar-base :links="mainNavLinks" listType="cs-card"></navbar-base>
</template>
