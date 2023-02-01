<script>
import BgSliderBase from "./BgSliderBase.vue";
import { userStories } from "../data";
export default {
  name: "StoriesCarousel",
  components: { BgSliderBase },
  data() {
    return {
      activeUser: 0,
    };
  },
  computed: {
    bgImages() {
      return userStories.map((user) => {
        const bgImage = user.bgImage;
        return bgImage;
      });
    },
    displayUser() {
      return userStories.find((user, i) => {
        return i === this.activeUser;
      });
    },
    buildImageUrl() {
      return new URL(
        `../assets/img/section_image/user_stories/${this.displayUser.pics}`,
        import.meta.url
      ).href;
    },
  },
  methods: {
    changeUser(i) {
      this.activeUser = i;
    },
  },
};
</script>

<template>
  <bg-slider-base
    :images="bgImages"
    target="section_image/user_stories"
    @change-active="changeUser"
    :sliderClasses="['py-5']">
    <div class="container">
      <div
        class="carousel d-flex align-items-center justify-content-center flex-column">
        <figure class="my-5">
          <img :src="buildImageUrl" :alt="displayUser.name" />
        </figure>
        <blockquote>{{ displayUser.quote }}</blockquote>
        <h3>{{ displayUser.name }}</h3>
        <p class="job">{{ displayUser.job }}</p>
      </div>
    </div>
  </bg-slider-base>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.carousel {
  color: white;

  blockquote {
    width: 75%;
    font-size: 20px;
    text-align: center;
    letter-spacing: 1px;
    line-height: 35px;
  }

  h3 {
    font-family: $secondary-font;
    margin: 15px 0;
    font-size: 25px;
  }

  .job {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
}
</style>
