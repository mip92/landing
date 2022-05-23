<template>
  <section id="expenses">
    <div class="wrapper_content3">
      <div class="content3_flex">
        <div class="content2">
          Expenses reduction after implementing logistics management software!
        </div>
        <div class="content3">
          49,2%
        </div>
      </div>
    </div>
    <div class="egg_tray">
      <div class="egg_tray_content"></div>
      <egg-tray></egg-tray>
    </div>
  </section>
</template>

<script>
import EggTray from "@/components/EggTray";

export default {
  components: {EggTray},
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
  .wrapper_content3 {
    .content3_flex {
      margin-top: 248px;
      display: flex;
      justify-content: space-around;

      .content2 {
        width: 345px;
        height: 100px;
        margin: 5px 0 0;
        @include wrapperContent();
        color: $charcoal;
      }

      .content3 {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        justify-content: center;
        font-size: 80px;
        width: 346px;
        height: 100px;
        color: $charcoal;
      }
    }
  }
  .egg_tray {
    margin: 271px 5px 58px 30px;
    padding: 44px 108px 60px 88px;
    object-fit: contain;

    .egg_tray_content {
      width: 960px;
      height: 608px;
      background-image: url(/public/imgs/eggTray.svg);
    }

  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .content3_flex {
    margin-top: 248px;
    display: flex;
    justify-content: space-around;

    .content2 {
      width: 345px;
      height: 100px;
      margin: 5px 0 0;
      @include wrapperContent();
      color: $charcoal;
    }

    .content3 {
      margin: 0;
      font-family: 'Open Sans';
      text-align: center;
      justify-content: center;
      font-size: 80px;
      width: 346px;
      height: 100px;
      color: $charcoal;
    }
  }
  .egg_tray {
    margin: 271px 5px 58px 0px;
    padding: 44px 108px 60px 0px;
    object-fit: contain;

    .egg_tray_content {
      margin-right: auto;
      width: 570px;
      height: 960px;
      background-image: url(/public/imgs/middleSizeEgg.svg);
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .wrapper_content3 {
    margin-top: 248px;
    display: flex;
    justify-content: center;

    .content3_flex {
      flex-direction: column;

      .content2 {
        width: 345px;
        height: 100px;
        @include smallContent2();
        color: $charcoal;
      }

      .content3 {
        margin: 0;
        font-family: 'Open Sans';
        text-align: center;
        justify-content: center;
        font-size: 80px;
        width: 346px;
        height: 100px;
        color: $charcoal;
      }
    }
  }
  .egg_tray {
    margin-top: 271px;
    padding-top: 44px;
    object-fit: contain;

    .egg_tray_content {
      margin-right: auto;
      width: 183px;
      height: 960px;
      background-image: url(/public/imgs/smallSizeEgg.svg);
    }
  }
}

</style>