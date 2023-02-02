<script>
import { ourPartners } from "../../data";
export default {
  name: "OurPartners",
  data() {
    return {
      ourPartners,
    };
  },
  methods: {
    imageUrl(image) {
      return new URL(
        `../../assets/img/section_image/our_partners/${image}.png`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-4">
      <div v-for="(partner, i) in ourPartners" :key="partner.name" class="col">
        <figure @mouseenter="hover = i" @mouseleave="hover = null">
          <a :href="partner.link">
            <img :src="imageUrl(partner.image)" :alt="partner.name" />
          </a>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px 0;
  margin-bottom: 50px;
}

figure:hover {
  filter: opacity(0.7);
}
</style>
