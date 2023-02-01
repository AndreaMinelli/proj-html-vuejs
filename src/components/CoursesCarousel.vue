<script>
import CoursesCard from "./main_child/CoursesCard.vue";
export default {
  name: "CoursesCarousel",
  components: { CoursesCard },
  data() {
    return {
      courses: {
        name: "Android developer",
        teacher: "David Sanders",
        price: "free",
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
  <div class="container">
    <div class="row row-cols-3">
      <courses-card :course="courses"></courses-card>
    </div>
  </div>
</template>
