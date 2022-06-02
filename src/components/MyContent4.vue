<template>
  <section id="our_advantages">
    <div class="centerField">
      <div>
        <span class="YOUR-BUSINESS-CASE-I">
          OUR BUSINESS CASEIS COMPLETELY DIFFERENT?
          <span class="text-style-1">
            LET’S DISCUSS
          </span>
        </span>
        <my-button>Fill in the contact form</my-button>
      </div>
    </div>
    <div class="twoFields">
      <div class="twoFieldsContent">
        <div class="leftField">
          <our-advantages></our-advantages>
        </div>
        <div class="rightField">
          <div class="rightFieldContent">
            <articles-field></articles-field>
          </div>
        </div>
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
  .centerField {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .YOUR-BUSINESS-CASE-I {
        justify-content: center;
        width: 345px;
        height: 90px;
        margin: 58px 132px 30px 156px;
        @include yourBusinessCase();
        line-height: 1.2;
        letter-spacing: -0.63px;
        text-align: center;
        color: $black;

        .text-style-1 {
          color: $watermelon;
        }
      }

      .btn {
        margin: 0px 144px 168px 144px;
      }
    }
  }
  .twoFields {
    .twoFieldsContent {
      flex-direction: row;
      display: flex;
      justify-content: right;

      .leftField {
        display: flex;
        width: 531px;
        height: 757px;
      }

      .rightField {
        display: flex;
        flex-direction: column;
        width: 636px;
        height: 757px;
        justify-content: center;
        align-items: center;
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
        background-image: linear-gradient(140deg, #fff, #efefef);

        .rightFieldContent {

        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .centerField {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .YOUR-BUSINESS-CASE-I {
        justify-content: center;
        width: 345px;
        height: 90px;
        margin: 58px 132px 30px 156px;
        @include yourBusinessCase();
        line-height: 1.2;
        letter-spacing: -0.63px;
        text-align: center;
        color: $black;

        .text-style-1 {
          color: $watermelon;
        }
      }

      .btn {
        margin: 0px 144px 168px 144px;
      }
    }
  }
  .twoFields {
    .twoFieldsContent {
      flex-direction: column;
      display: flex;
      justify-content: center;
      .leftField {
        display: flex;
        width: 531px;
        height: 757px;
        margin-left: 79px;
      }

      .rightField {
        justify-content: center;
        display: flex;
        .rightFieldContent {
          justify-content: center;
          display: flex;
          flex-direction: column;
          width: 636px;
          height: 757px;
          align-items: center;
          box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
          background-image: linear-gradient(140deg, #fff, #efefef);
        }
      }
    }
  }

}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .centerField {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .YOUR-BUSINESS-CASE-I {
        justify-content: center;
        width: 345px;
        height: 90px;
        @include eggMiddleTitle();
        line-height: 1.2;
        letter-spacing: -0.63px;
        text-align: center;
        color: $black;

        .text-style-1 {
          color: $watermelon;
        }
      }

      .btn {
        margin: 0px 0px 168px 0px;
      }
    }
  }
  .twoFields{
    flex-direction: column;
    display: flex;
    justify-content: center;
    .leftField {
      display: flex;
      justify-content: center;
    }
    .rightField {
      justify-content: center;
      display: flex;
      .rightFieldContent {
        justify-content: center;
        display: flex;
        flex-direction: column;
        width: 345px;
        height: 625px;
        padding: 25px;
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
        background-image: linear-gradient(151deg, #fff, #efefef 100%);
      }
    }
  }
}

</style>
