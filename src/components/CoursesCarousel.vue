<script>
import CoursesCard from "./main_child/CoursesCard.vue";
export default {
  name: "CoursesCarousel",
  components: { CoursesCard },
  data() {
    return {
      courses: {
        name: "Android developers",
        teacher: "David Sanders",
        cost: "free",
        description:
          "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
        people: "1",
        type: "Programming",
      },
    };
  },
};
</script>

<template>
  <courses-card :card="courses"></courses-card>
</template>
