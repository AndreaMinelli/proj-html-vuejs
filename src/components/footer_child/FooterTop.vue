<script>
import AppLogo from "../AppLogo.vue";
export default {
  name: "FooterTop",
  components: { AppLogo },
  data() {
    return {
      popularCourses: {
        title: "Popular Courses",
        courses: [
          {
            name: "Business english",
            teacher: "Preston Marshall",
          },
          {
            name: "Social computing",
            teacher: "David Sanders",
          },
          {
            name: "Learn spanish",
            teacher: "Jennie King",
          },
        ],
      },
      utils: {
        title: "Support",
        links: [
          {
            text: "User dashboard",
            href: "#",
          },
          {
            text: "Contact Us",
            href: "#",
          },
          {
            text: "FAQ",
            href: "#",
          },
          {
            text: "Course Offer",
            href: "#",
          },
          {
            text: "Events",
            href: "#",
          },
        ],
      },
    };
  },
};
</script>

<template>
  <div class="row row-cols-4">
    <div class="col">
      <app-logo class="me-5"></app-logo>
      <p class="motto">
        Providing life changing experiens through education. Class that fit your
        busy life. Closer to home
      </p>
      <div class="phone d-flex align-items-center text-white">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <p class="m-0 ms-3">1-677-124-44227</p>
      </div>
      <div class="d-flex align-items-center text-white mt-3">
        <font-awesome-icon icon="fa-regular fa-clock" />
        <p class="m-0 ms-3">Mon - Sat 8.00 - 18.00</p>
      </div>
    </div>
    <div class="col">
      <ul>
        <li>
          <h3>{{ popularCourses.title }}</h3>
        </li>
        <li v-for="course in popularCourses.courses" :key="course.name">
          <h4>{{ course.name }}</h4>
          <p>{{ course.teacher }}</p>
        </li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li>
          <h3>{{ utils.title }}</h3>
        </li>
        <li v-for="link in utils.links" :key="link.text">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
    </div>
    <div class="col text-center">
      <h3>Flexible Learnign</h3>
      <figure>
        <img
          src="../../assets/img/footer_image/footer-img-1.png"
          alt="world map" />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;
.row {
  padding: 100px 0;
  color: #cecece;

  #logo {
    width: 150px;
  }

  .motto {
    text-transform: capitalize;
    margin: 40px 0;
    font-size: 20px;
    line-height: 35px;
  }

  .col:not(:first-child) {
    font-family: $secondary-font;
    h3 {
      color: white;
      margin-bottom: 30px;
    }

    h4 {
      font-size: 18px;
      text-transform: capitalize;
    }
    p {
      font-family: $primary-font;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    a {
      font-family: $primary-font;
      font-size: 18px;
      display: inline-block;
      margin-bottom: 15px;

      &:hover {
        color: $dodgerblue;
      }
    }
  }
}
</style>
