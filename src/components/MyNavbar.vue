<template>
  <div class="tablet">
    <div class="logo">
      <div class="logo_content"></div>
    </div>
    <div class="burger" v-if="!isOpen">
      <div class="text">Benefits!</div>
      <div class="text">Advantages!</div>
      <div class="text">Achievements!</div>
    </div>
    <div class="burger_open" v-if="isOpen">
      <div class="text_open">Benefits</div>
      <div class="text_open">Advantages</div>
      <div class="text_open">Achievements</div>
      <div class="just_small_text">Imprint and Data protection</div>
    </div>
    <div class="languages">
      <div class="language_content">
        <div class="language">DE</div>
        <div class="language">EN</div>
      </div>
    </div>
    <div v-if="isOpen" class="languages_small">
      <div class="language_content">
        <div class="language_small">Language</div>
        <div class="language">DE</div>
        <div class="language">EN</div>
      </div>
    </div>
    <div class="menu">
      <div v-if="isOpen" @click="$emit('open')" class="menu_content_open"></div>
      <div v-if="!isOpen" @click="$emit('open')" class="menu_content_closed"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import "src/style/style.scss";

@media screen and (min-width: 1440px) {
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

    div {
      display: flex;
      justify-content: center;

      .just_small_text, {
        display: none;
      }

      .text, .text_open {
        width: 144px;
        height: 23px;
        @include myText();
      }
    }

    .languages_small {
      display: none;
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

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .tablet {
    display: flex;
    height: 144px;
    align-items: center;
    justify-content: center;

    .logo {
      margin-right: auto;

      .logo_content {
        width: 64px;
        height: 64px;
        background-image: url(/public/imgs/ClockwiseSmallLogo.svg);
        margin-left: 53px;
      }
    }

    div {
      display: flex;
      justify-content: center;

      .just_small_text {
        display: none;
      }

      .text, .text_open {
        width: 120px;
        height: 23px;
        @include myText();
      }
    }

    .languages_small {
      display: none;
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

@media screen and (min-width: 375px) and (max-width: 767.98px) {
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

    .text, .languages, .just_small_text {
      display: none;
    }

    .languages_small {
      width: 100%;
      position: absolute;
      top: 500px;
      border-top: 1px double $twilight-blue;
      border-bottom: 1px double $twilight-blue;
      .language_content {
        align-items: center;
        padding-left: 40px;
        height: 56px;
        display: flex;

        .language_small {
          margin-right: auto;
          @include bigText();
          color: $black;
        }
        .language {
          padding-right: 70px;
          @include bigText();
          color: $black;
          width: 50px;
        }
      ;
      }
    }

    .burger_open {
      position: absolute;
      top: 200px;
      width: 100%;

      .text_open, .languages_open, .just_small_text, .language_small {
        align-items: center;
        padding-left: 40px;
        border-top: 1px double $twilight-blue;
        height: 56px;
        display: flex;
        @include bigText();
        color: $black;
      }

      .just_small_text {
        border-bottom: 1px double $twilight-blue;
      }
    }

    .menu {
      margin-left: auto;
      cursor: pointer;

      .menu_content_closed {
        width: 24px;
        height: 24px;
        background-image: url(/public/imgs/menuBtn.svg);
        margin-right: 35px;
      }

      .menu_content_open {
        width: 24px;
        height: 24px;
        background-image: url(/public/imgs/x.svg);
        margin-right: 35px;
      }
    }

  }
}


</style>