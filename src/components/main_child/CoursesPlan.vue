<script>
export default {
  name: "CoursesPlan",
  data() {
    return {
      plans: [
        {
          type: "Standard",
          price: "$12",
          image: "",
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
          image: "",
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
          image: "",
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
    <div class="row row-cols-4">
      <div class="col">
        <ul>
          <li><h3>Save up to 40% by paying weekly</h3></li>
          <li v-for="info in infoList" :key="info">{{ info }}</li>
        </ul>
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;
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
</style>
