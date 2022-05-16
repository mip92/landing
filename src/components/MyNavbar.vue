<template>
  <navbar class="tablet">
    <div class="logo">
      <div class="logo_content"></div>
    </div>
    <div class="text">Benefits</div>
    <div class="text">Advantages</div>
    <div class="text">Achievements</div>
    <div class="languages">
      <div class="language_content">
        <div class="language">DE</div>
        <div class="language">EN</div>
      </div>
    </div>
    <div class="menu">
      <div class="menu_content"></div>
    </div>
  </navbar>
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
@mixin myText() {
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: center;
  color: var(--black);
};
@media screen and (min-width: 1440px) {
  .tablet {

    display: flex;
    height: 144px;
    align-items: center;
    justify-content: center;

    .logo {
      width: 64px;
      margin-right: auto;

      .logo_content {
        width: 204px;
        height: 64px;
        background-image: url(/public/imgs/ClockwiseBigLogo.svg);
        margin-left: 53px;
      }
    }
    .text {
      width: 144px;
      height: 23px;
      @include myText();
    }

    .languages {
      margin-left: auto;

      .language_content {
        display: flex;
        margin-right: 221px;

        .language {
          width: 60px;
          height: 24px;
          @include myText();
        }
      }
    }
  ;
  }
}
@media screen and (min-width: 768px) and (max-width: 1439px) {
  .tablet {
    display: flex;
    height: 144px;
    align-items: center;
    justify-content: center;
    background-size: cover;
    .logo {
      width: 64px;
      margin-right: auto;

      .logo_content {
        width: 64px;
        height: 64px;
        background-image: url(/public/imgs/ClockwiseSmallLogo.svg);
        margin-left: 53px;
      }
    }

    .text {
      width: 120px;
      height: 23px;
      @include myText();
    }

    .languages {
      margin-left: auto;

      .language_content {
        display: flex;
        margin-right: 24px;

        .language {
          width: 60px;
          height: 24px;
          @include myText();
        }
      }
    }
  ;
  }
}
@media screen and (min-width: 375px) and (max-width: 767px) {
  .tablet {
    display: flex;
    height: 144px;
    align-items: center;
    justify-content: center;

    .logo {
      margin-right: auto;

      .logo_content {
        width: 204px;
        height: 64px;
        background-image: url(/public/imgs/ClockwiseBigLogo.svg);
        margin-left: 53px;
      }
    }

    .text, .languages {
      display: none;
    }
    .menu{
      margin-left: auto;
      .menu_content {
        width: 24px;
        height: 24px;
        background-image: url(/public/imgs/menuBtn.svg);
        margin-right: 35px;
      }
    }

  }
}


</style>