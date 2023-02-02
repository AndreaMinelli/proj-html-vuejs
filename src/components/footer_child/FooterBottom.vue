<script>
export default {
  name: "FooterBottom",
};
</script>

<template>
  <div class="footer-bottom d-flex align-items-center justify-content-between">
    <div>
      <p>Copyrights 2017 &copy;Mikado Themes</p>
    </div>
    <div class="d-flex align-items-center justify-content-between w-25">
      <p>CALL +44 300 303 0266</p>
      <a href="#">FOLLOW US</a>
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </a>
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;
.footer-bottom {
  border-top: 1px solid $darkgrey-border;
  padding: 40px 0;
  color: #b9b9b9;
}

p {
  margin: 0;
}
</style>
