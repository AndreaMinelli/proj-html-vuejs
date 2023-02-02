<script>
export default {
  name: "SectionBase",
  props: {
    section: Object,
  },
  computed: {
    buildImageUrl() {
      return new URL(
        `../assets/img/section_image/${this.section.image}`,
        import.meta.url
      ).href;
    },
    buildBgImageUrl() {
      return new URL(
        `../assets/img/section_image/${this.section.bgImage}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<template>
  <section
    :id="section.id"
    :style="{
      backgroundImage: `url(${buildBgImageUrl})`,
    }">
    <div v-if="section.rowClasses" class="container">
      <div :class="section.rowClasses">
        <div class="col my-4" :class="section.colClasses">
          <h2 :class="section.titleClasses">{{ section.title }}</h2>
          <p :class="section.subTitleClasses">{{ section.subTitle }}</p>
          <slot name="more-info"></slot>
        </div>
        <div v-if="section.image" class="col" :class="section.colClasses">
          <figure :class="section.figureClasses">
            <img :src="buildImageUrl" alt="Section pics" />
          </figure>
        </div>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

section {
  background-position: center;
}
h2 {
  font-family: $secondary-font;
  font-size: 40px;
  font-weight: bolder;
  white-space: pre-wrap;
  margin-bottom: 30px;
  line-height: 60px;
}

p {
  font-size: 25px;
  color: #808080;
  line-height: 35px;
}
</style>
