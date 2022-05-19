<template>
  <section id="logistic">
    <div class="elem1">
      <div class="elem_content1"></div>
    </div>
    <div class="elem2">
      <div class="elem_content2"></div>
    </div>
    <div class="text">
      <div class="title">LOGISTICS MANAGEMENT SOFTWARE DEVELOPMENT</div>
      <div class="body">We solve transportation and stock management problems for Factories, Manufacturers, Carriers,
        Resellers, E-commerce and even more. Any issue can be solved with smart digitalization.
      </div>
      <my-button class="btn">Request a free consultation</my-button>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "src/style/style";

.elem1 {
  position: absolute;
  clip: rect(100px, 127px, 226px, 0px);
  top: 38px;

  .elem_content1 {
    height: 226px;
    width: 127px;
    background-image: url(/public/imgs/graySmallElem.svg);
  }
}

@media screen and (min-width: 1440px) {
  .elem2 {
    position: relative;
    display: flex;
    top: 107px;

    .elem_content2 {
      margin-left: auto;
      height: 522px;
      width: 415px;
      background-image: url(/public/imgs/orangeBigElem2.svg);
    }
  }
  .text {
    display: flex;
    justify-content: center;

    .title {
      top: 312px;
      position: absolute;
      width: 710px;
      height: 110px;
      margin: 0px 63px 0px 45px;
      @include bigTitleText();
      color: $black;
    }

    .body {
      top: 471px;
      position: absolute;
      width: 590px;
      height: 112px;
      margin: 0px 0px 0px -150px;
      @include bigText();
      color: $charcoal;
    }

    .btn {
      top: 645px;
      position: absolute;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
  .elem2 {
    position: relative;
    display: flex;
    top: 38px;

    .elem_content2 {
      margin-left: auto;
      height: 522px;
      width: 195px;
      background-image: url(/public/imgs/orangeMiddleElem.svg);
    }
  }
  .text {
    display: flex;
    justify-content: center;

    .title {
      top: 328px;
      position: absolute;
      width: 452px;
      height: 70px;
      @include middleTitleText();
      color: $black;
    }

    .body {
      top: 466px;
      position: absolute;
      width: 452px;
      opacity: 0.75;
      @include smallText();
      color: $charcoal
    }

    .btn {
      top: 645px;
      position: absolute;
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .elem2 {
    position: relative;
    display: flex;
    top: 440px;

    .elem_content2 {
      margin-left: auto;
      height: 363px;
      width: 178px;
      background-image: url(/public/imgs/orangeSmallElem.svg);
    }
  }
  .text {
    display: flex;
    justify-content: center;

    .title {
      top: 236px;
      position: absolute;
      width: 325px;
      height: 120px;
      margin: 0px 25px 0px;
      @include smallTitleText();
      color: $black;
    }

    .body {
      top: 406px;
      position: absolute;
      width: 325px;
      height: 138px;
      margin: 0px 0px 0px;
      @include smallText();
      color: $charcoal
    }

    .btn {
      top: 594px;
      position: absolute;
    }
  }
}


</style>