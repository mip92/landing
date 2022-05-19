<template>
  <section id="logistic">
    <div class="topic">
      <div class="content">
        Have you experienced any of these issues?
      </div>
    </div>
    <div class="carousel">
      <my-slider></my-slider>
    </div>
  </section>
</template>

<script>
import MySlider from "@/components/UI/MySlider";

export default {
  components: {MySlider},
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "src/style/style";
@media screen and (min-width: 1440px) {
  .topic {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 903px;
      height: 35px;
      margin: 168px 253px 168px 28px;
      text-align: right;
      @include middleTitleText();
      color: $black;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1439px) {
  .topic {
    display: flex;
    justify-content: center;
    .content {
      width: 585px;
      height: 25px;
      margin: 139px 91px 165px 42px;
      text-align: right;
      color: $black;
      @include topicContent()
    }
  }
}
@media screen and (min-width: 375px) and (max-width: 767px) {
  .topic {
    padding-top: 450px;
    display: flex;
    justify-content: center;
    .content {
      position: absolute;
      width: 345px;
      height: 50px;
      margin: 50px 15px;
      text-align: right;
      @include topicContent();
      color: $black;
    }
  }
  .carousel {
    top: 168px;
  }
}

</style>