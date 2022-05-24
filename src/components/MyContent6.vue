<template>
  <section id="Discuss">
    <div class="centerFieldDiscuss">
      <div>
        <span class="Discuss-your-project">
          Discuss your project with the professionals
        </span>
        <my-button>Let'sdiscuss</my-button>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import OurAdvantages from "@/components/OurAdvantages";
import ArticlesField from "@/components/ArticlesField";

export default {
  components: {MyButton, OurAdvantages, ArticlesField},
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
  .centerFieldDiscuss {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .Discuss-your-project {
        justify-content: center;
        margin: 58px 100px 30px 140px;
        width: 345px;
        height: 42px;
        font-family: "Catamaran";
        font-size: 17px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.24;
        letter-spacing: -0.43px;
        text-align: center;
        color: $black;
      }

      .btn {
        margin: 0px 144px 229px 144px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .centerFieldDiscuss {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .Discuss-your-project {
        justify-content: center;
        margin: 58px 100px 30px 140px;
        width: 345px;
        height: 42px;
        font-family: "Catamaran";
        font-size: 17px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.24;
        letter-spacing: -0.43px;
        text-align: center;
        color: $black;
      }

      .btn {
        margin: 0px 144px 101px 144px;
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .centerFieldDiscuss {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .Discuss-your-project {
        justify-content: center;
        margin: 220px 15px 15px 15px;
        width: 345px;
        height: 42px;
        font-family: "Catamaran";
        font-size: 17px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.24;
        letter-spacing: -0.43px;
        text-align: center;
        color: $black;
      }

      .btn {
        margin: 15px 15px 72px 15px
      }
    }
  }
}

</style>