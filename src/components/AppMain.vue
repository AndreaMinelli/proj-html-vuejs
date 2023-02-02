<script>
import NavbarBase from "./NavbarBase.vue";
import SectionBase from "./SectionBase.vue";
import StoriesCarousel from "./MainStories.vue";
import MainProgram from "./main_child/MainProgram.vue";
import MainCourses from "./MainCourses.vue";
import CoursesPlan from "./main_child/CoursesPlan.vue";
import { mainNavLinks } from "../data";
export default {
  name: "AppMain",
  components: {
    NavbarBase,
    SectionBase,
    StoriesCarousel,
    MainProgram,
    MainCourses,
    CoursesPlan,
  },
  data() {
    return {
      mainNavLinks,
      sectionTutoring: {
        id: "tutoring",
        title: "The Trusted Name\nfor In-Home Tutoring.",
        subTitle:
          "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.",
        image: "h5-img-1.jpg",
        rowClasses: ["row-cols-1"],
      },
      sectionStories: {
        id: "user-stories",
        title: "Empowering\nChildren to Reach\nTheir Potential.",
        subTitle:
          "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate.",
        image: "h5-img-2.jpg",
        rowClasses: ["row-cols-2", "flex-row-reverse"],
        colClasses: ["px-3", "mt-5"],
        figureClasses: ["pt-5"],
      },
      sectionCourses: {
        id: "courses",
        title: "Popular Online Courses",
        subTitle:
          "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
        image: "",
        bgImage: "background-pattern.jpg",
        rowClasses: ["row-cols-1"],
        colClasses: ["text-center"],
        subTitleClasses: ["w-75", "m-auto"],
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <navbar-base :links="mainNavLinks" listType="cs-card"></navbar-base>
  </div>
  <section-base :section="sectionTutoring">
    <template #more-info>
      <div class="info">
        <a href="#"> LEARN MORE</a>
      </div>
    </template>
  </section-base>
  <section-base :section="sectionStories">
    <template #more-info>
      <div class="info d-flex">
        <div>
          <p class="numbers">168</p>
          <p class="numbers-info">User Stories</p>
        </div>
        <div class="ms-5">
          <p class="numbers">347</p>
          <p class="numbers-info">Events</p>
        </div>
      </div>
    </template>
    <stories-carousel></stories-carousel>
    <main-program></main-program>
  </section-base>
  <section-base :section="sectionCourses">
    <main-courses></main-courses>
    <courses-plan></courses-plan>
  </section-base>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.info {
  color: $dodgerblue;
  font-weight: bolder;
  letter-spacing: 2px;
  margin: 15px 0;

  .numbers {
    font-family: $secondary-font;
    font-size: 60px;
    font-weight: bolder;
    margin-bottom: 0;
  }

  .numbers-info {
    font-family: $secondary-font;
    font-size: 20px;
    margin-bottom: 0;
  }
}
</style>
