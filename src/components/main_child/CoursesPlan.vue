<script>
import ButtonBase from "../ui_components/ButtonBase.vue";
import AddCart from "../ui_components/AddCart.vue";
import GoToWorkspace from "../ui_components/GoToWorkspace.vue";
export default {
  name: "CoursesPlan",
  components: { ButtonBase, AddCart, GoToWorkspace },
  data() {
    return {
      plans: [
        {
          type: "Standard",
          price: "$12",
          image: "h5-custom-icon-7.png",
          info: {
            "Number of Courses": "2",
            Time: "15 Days",
            "Web Designing": "check",
            "Human-Centered Design": "check",
            "Basic Marketing": "uncheck",
            "Python for Everybody": "uncheck",
            "Android Developer": "uncheck",
            "Business English": "uncheck",
          },
        },
        {
          type: "Professional",
          price: "$59",
          image: "h5-custom-icon-8.png",
          info: {
            "Number of Courses": "4",
            Time: "30 Days",
            "Web Designing": "check",
            "Human-Centered Design": "check",
            "Basic Marketing": "check",
            "Python for Everybody": "check",
            "Android Developer": "uncheck",
            "Business English": "uncheck",
          },
        },
        {
          type: "Advanced",
          price: "$88",
          image: "h5-custom-icon-9.png",
          info: {
            "Number of Courses": "6",
            Time: "30 Days",
            "Web Designing": "check",
            "Human-Centered Design": "check",
            "Basic Marketing": "check",
            "Python for Everybody": "check",
            "Android Developer": "check",
            "Business English": "check",
          },
        },
      ],
    };
  },
  computed: {
    //Creo array con le chiavi di info
    infoList() {
      const obj = this.plans[0];
      return Object.keys(obj.info);
    },
  },
  methods: {
    buildImageUrl(image) {
      return new URL(
        `../../assets/img/section_image/plans_image/${image}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<template>
  <div class="title">
    <h2>Pricing Plans</h2>
    <p>
      Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem
      quis bibendum auci
    </p>
  </div>
  <div class="container">
    <div class="row row-cols-4 gx-0">
      <div class="function">
        <go-to-workspace class="mb-3"></go-to-workspace>
        <add-cart></add-cart>
      </div>
      <div class="col">
        <ul class="info">
          <li><h3>Save up to 40% by paying weekly</h3></li>
          <li v-for="info in infoList" :key="info">{{ info }}</li>
        </ul>
      </div>
      <div v-for="plan in plans" :key="plan.type" class="col">
        <ul class="plan">
          <li class="type">
            <figure>
              <img :src="buildImageUrl(plan.image)" :alt="plan.type" />
            </figure>
            <h4>{{ plan.type }}</h4>
            <p class="price">{{ plan.price }}</p>
          </li>
          <li v-for="info in plan.info">
            <font-awesome-icon
              v-if="info === 'check'"
              icon="fa-solid fa-check"
              class="fa-check" />
            <font-awesome-icon
              v-else-if="info === 'uncheck'"
              icon="fa-solid fa-x" />
            <p v-else>{{ info }}</p>
          </li>
          <li>
            <button-base
              :classes="['button', 'secondary', 'bold']"
              type="button"
              label="get it now"></button-base>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;
@use "../../assets/scss/mixin" as *;

.title {
  border-top: 2px solid $darkgrey-border;
  text-align: center;
  padding: 100px 0;
  h2 {
    font-family: $secondary-font;
    font-size: 40px;
    font-weight: bolder;
    white-space: pre-wrap;
    margin-bottom: 15px;
    line-height: 60px;
  }

  p {
    font-size: 25px;
    color: #808080;
    line-height: 35px;
  }
}
.row {
  position: relative;
}
.function {
  position: absolute;
  left: 100%;
  top: 50px;
  width: auto;
}

.container {
  margin-bottom: 100px;
}
.col:nth-child(4) {
  .type {
    border-top: 4px solid $dodgerblue;
  }
  .button {
    @include button-style("primary");
  }
}

ul {
  padding: 0;
}

li {
  color: $grey-text;
  border: 1px solid $grey-border;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 20px;
  background-color: white;
}

li:first-child {
  height: auto;
  border-top: 4px solid #d6f2ff;
  vertical-align: baseline;
}
.info {
  font-family: $secondary-font;

  h3 {
    margin-top: 140px;
    margin-bottom: 50px;
    color: #3e3e3e;
    font-weight: bold;
  }

  li:first-child {
    padding: 0 30px;
  }
}

.plan {
  li {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    p {
      margin: 0;
    }
  }
  li:first-child {
    background-color: #f7fdff;
  }

  li:last-child {
    height: auto;
    background-color: #f7fdff;
  }

  figure {
    margin: 30px 0;
  }

  h4 {
    font-family: $secondary-font;
    color: #3e3e3e;
    font-weight: bold;
    margin-bottom: 25px;
  }
  .price {
    color: #545454;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
  }

  .fa-check {
    color: $dodgerblue;
  }
}
</style>
