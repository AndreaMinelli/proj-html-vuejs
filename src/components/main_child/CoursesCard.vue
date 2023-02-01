<script>
export default {
  name: "CoursesCard",
  props: {
    course: Object,
  },
  computed: {
    priceClass() {
      if (this.course.price !== "free") {
        return "cost";
      } else {
        return this.course.price;
      }
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="course-card">
      <figure>
        <img
          src="../../assets/img/section_image/courses_image/course-1-f-img.jpg"
          alt="" />
      </figure>
      <div class="card-bottom">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="text-capitalize">{{ course.name }}</h4>
          <div class="price text-uppercase" :class="priceClass">
            {{ course.price }}
          </div>
        </div>
        <h5 class="teacher">{{ course.teacher }}</h5>
        <p class="description">{{ course.description }}</p>
        <div class="d-flex info">
          <div class="people">
            <font-awesome-icon icon="fa-solid fa-user" class="fa-user" />
            {{ course.people }}
          </div>
          <div class="course-type">
            <font-awesome-icon icon="fa-solid fa-tag" class="fa-tag" />
            {{ course.type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.course-card {
  border: 1px solid $grey-border;

  .card-bottom {
    padding: 30px 20px;

    h4 {
      font-family: $secondary-font;
      font-size: 15px;
      font-weight: bold;
      margin: 0;
    }

    .price {
      color: white;
      padding: 2px;
      width: 55px;
      text-align: center;
      font-size: 13px;
      border-radius: 50px;
      font-weight: bold;
      letter-spacing: 2px;

      &.free {
        background-color: #ffd740;
      }

      &.cost {
        background-color: $dodgerblue;
      }
    }

    .teacher {
      color: $lightgrey-text;
      font-size: 17px;
      font-weight: bold;
    }

    .description {
      font-size: 20px;
      color: $darkgrey-text;
    }

    .info {
      color: $lightgrey-text;

      .people {
        margin-right: 10px;
      }

      .fa-user {
        margin-right: 5px;
      }

      .course-type {
        margin-left: 3px;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
}
</style>
