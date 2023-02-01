<script>
import CoursesCard from "./main_child/CoursesCard.vue";
import CarouselBase from "./ui_components/CarouselBase.vue";
export default {
  name: "MainCourses",
  components: { CoursesCard, CarouselBase },
  data() {
    return {
      courses: [
        {
          name: "Android developer",
          teacher: "David Sanders",
          price: "free",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Programming",
          image: "course-1-f-img.jpg",
        },
        {
          name: "Web designing",
          teacher: "Jennifer Powell",
          price: "free",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Programming",
          image: "course-2-f-img.jpg",
        },
        {
          name: "Financial Modeling",
          teacher: "Edward Bownam",
          price: "$20",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Business",
          image: "course-3-f-img.jpg",
        },
        {
          name: "Android developer",
          teacher: "David Sanders",
          price: "free",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Programming",
          image: "course-4-f-img.jpg",
        },
        {
          name: "Web designing",
          teacher: "Jennifer Powell",
          price: "free",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Programming",
          image: "course-5-f-img.jpg",
        },
        {
          name: "Financial Modeling",
          teacher: "Edward Bownam",
          price: "$20",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Business",
          image: "course-6-f-img.jpg",
        },
        {
          name: "Android developer",
          teacher: "David Sanders",
          price: "free",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Programming",
          image: "course-7-f-img.jpg",
        },
        {
          name: "Web designing",
          teacher: "Jennifer Powell",
          price: "free",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Programming",
          image: "course-8-f-img.jpg",
        },
        {
          name: "Financial Modeling",
          teacher: "Edward Bownam",
          price: "$20",
          description:
            "Lorem ipsum dolor sit amet, te eros consulau pro, quem labores petentium no sea, atqui posidonium entrpretaris",
          people: "1",
          type: "Business",
          image: "course-9-f-img.jpg",
        },
      ],
      currentActive: 0,
    };
  },
  computed: {
    visibleCourses() {
      switch (this.currentActive) {
        case 0:
          return this.courses.slice(0, 3);
        case 1:
          return this.courses.slice(3, 6);
        case 2:
          return this.courses.slice(6, 9);
      }
    },
  },
  methods: {
    currentIndex(i) {
      this.currentActive = i - 1;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-3">
      <courses-card
        v-for="course in visibleCourses"
        :course="course"
        :key="course.image"></courses-card>
    </div>
    <carousel-base
      @change-active="currentIndex"
      :times="3"
      :dotClass="['blue']"></carousel-base>
  </div>
</template>

<style scoped>
.row {
  margin: 80px 0 40px;
}
</style>
