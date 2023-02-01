<script>
import CarouselBase from "./ui_components/CarouselBase.vue";
import { userStories } from "../data";
export default {
  name: "StoriesCarousel",
  components: { CarouselBase },
  data() {
    return {
      activeUser: 0,
    };
  },
  computed: {
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
      this.activeUser = i - 1;
    },
  },
};
</script>

<template>
  <div class="carousel">
    <div class="container">
      <div class="d-flex align-items-center justify-content-center flex-column">
        <figure class="my-5">
          <img :src="buildImageUrl" :alt="displayUser.name" />
        </figure>
        <blockquote>{{ displayUser.quote }}</blockquote>
        <h3>{{ displayUser.name }}</h3>
        <p class="job">{{ displayUser.job }}</p>
        <carousel-base :times="3" @change-active="changeUser"></carousel-base>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.carousel {
  color: white;
  background-image: url("../assets/img/section_image/user_stories/h5-parallax-img-1.png");
  background-position: top;
  padding: 50px 0;

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
