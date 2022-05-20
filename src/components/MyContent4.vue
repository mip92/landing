<template>
  <section id="our_advantages">
    <div class="content4">
      <div>
        <span class="YOUR-BUSINESS-CASE-I">
          OUR BUSINESS CASEIS COMPLETELY DIFFERENT?
          <span class="text-style-1">
            LET’S DISCUSS
          </span>
          <my-button>Fill in the contact form</my-button>
        </span>
      </div>
    </div>
    <our-advantages></our-advantages>
  </section>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import OurAdvantages from "@/components/OurAdvantages";

export default {
  components: {MyButton, OurAdvantages},
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "src/style/style";

@media screen and (min-width: 768px) {
  .content4 {
    div {
      display: flex;
      justify-content: center;
      .YOUR-BUSINESS-CASE-I {
        flex-direction: column;
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
        .btn {
          margin-top: 30px;
        }
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .content4 {
    div {
      display: flex;
      justify-content: center;
      .YOUR-BUSINESS-CASE-I {
        flex-direction: column;
        width: 345px;
        height: 75px;
        margin: 144px 15px 41px;
        @include yourBusinessCase();
        font-size: 21px;
        line-height: 1.19;
        letter-spacing: -0.53px;
        text-align: center;
        color: $black;

        .text-style-1 {
          color: $watermelon;
        }
        .btn {
          margin-top: 52px;
        }
      }
    }
  }
}

</style>