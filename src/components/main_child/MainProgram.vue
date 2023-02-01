<script>
export default {
  name: "MainProgram",
  data() {
    return {
      currentActive: 0,
      programs: [
        {
          section: "What we do",
          title: "Learning possibilities",
          description:
            "Lorem ipsum gravida nibh vel velit auctor aliquent sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
          about: [
            "We enrich lives through learning.",
            "Maximizing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect.",
          ],
          image: "h12-tabs-icon-1.png",
        },
        {
          section: "Degree programme",
          title: "Degree programme",
          description:
            "Lorem ipsum gravida nibh vel velit auctor aliquent sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
          about: [
            "We enrich lives through learning.",
            "Maximizing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect.",
          ],
          image: "h12-tabs-icon-2.png",
        },
        {
          section: "Carrer achievements",
          title: "Carrer achievements",
          description:
            "Lorem ipsum gravida nibh vel velit auctor aliquent sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
          about: [
            "We enrich lives through learning.",
            "Maximizing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect.",
          ],
          image: "h12-tabs-icon-3.png",
        },
        {
          section: "Personal managment",
          title: "Personal managment",
          description:
            "Lorem ipsum gravida nibh vel velit auctor aliquent sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
          about: [
            "We enrich lives through learning.",
            "Maximizing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect.",
          ],
          image: "h12-tabs-icon-4.png",
        },
        {
          section: "Steps to success",
          title: "Steps to success",
          description:
            "Lorem ipsum gravida nibh vel velit auctor aliquent sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
          about: [
            "We enrich lives through learning.",
            "Maximizing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect.",
          ],
          image: "h12-tabs-icon-5.png",
        },
        {
          section: "Knowledge tranfer",
          title: "Knowledge tranfer",
          description:
            "Lorem ipsum gravida nibh vel velit auctor aliquent sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
          about: [
            "We enrich lives through learning.",
            "Maximizing potential through individual attention.",
            "The trusted name for specialized training.",
            "People teach. People learn. This is where they connect.",
          ],
          image: "h12-tabs-icon-6.png",
        },
      ],
    };
  },
  computed: {
    activeProgram() {
      return this.programs.filter((e, i) => {
        return i === this.currentActive;
      });
    },
  },
  methods: {
    changeActive(i) {
      this.currentActive = i;
    },
    buildImageUrl(image) {
      return new URL(
        `../../assets/img/section_image/main_program/${image}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-3">
      <ul>
        <li
          v-for="(program, i) in programs"
          :key="program.section"
          @click="changeActive(i)"
          :class="{ active: i === currentActive }">
          <p>{{ program.section }}</p>
        </li>
      </ul>
    </div>
    <div class="col-9">
      <div v-for="program in activeProgram" :key="program.section">
        <h2>{{ program.title }}</h2>
        <p>{{ program.description }}</p>
        <div class="row">
          <div class="col-8">
            <ul>
              <li v-for="text in program.about" :key="text">{{ text }}</li>
            </ul>
          </div>
          <div class="col-4">
            <figure>
              <img :src="buildImageUrl(program.image)" alt="program pic" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;
.row {
  margin: 100px 0;
  color: $grey-text;

  .col-3 {
    li {
      border: 1px solid $grey-border;
      cursor: pointer;

      &.active {
        background-color: #fcfcfc;

        p {
          border-color: $dodgerblue;
          color: $dodgerblue;
        }
      }

      p {
        font-family: $secondary-font;
        font-size: 20px;
        text-transform: capitalize;

        height: 80px;
        display: flex;
        align-items: center;
        padding-left: 40px;
        margin: 0;
        border-left: 5px solid transparent;
      }
    }
  }

  .col-9 {
    padding-right: 100px;
    padding-left: 50px;
    h2 {
      font-family: $secondary-font;
      margin: 20px 0;
      font-size: 40px;
      font-weight: bold;
      text-transform: capitalize;
      color: black;
    }

    p {
      font-size: 25px;
      line-height: 35px;
    }

    .row {
      margin: 20px 0;
      padding-top: 60px;

      ul {
        padding: 0;
      }

      li {
        font-size: 25px;
        margin: 15px 0;
        list-style-type: "\2713";
        padding-inline-start: 10px;

        &::marker {
          color: $dodgerblue;
        }
      }
    }
  }

  .col-4 {
    display: flex;
    align-items: flex-end;

    figure {
      width: 70%;
    }
  }
}
</style>
