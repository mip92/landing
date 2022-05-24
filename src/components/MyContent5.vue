<template>
  <section id="what_our">
    <div class="what_or_content">
      <div class="WHAT-OUR-PARTNERS-HA">
        WHAT OUR PARTNERS HAVE ACHIEVED WITH CUSTOM TRANSPORT MANAGEMENTSOFTWARE
      </div>
    </div>
    <my-second-slider :posts="posts"></my-second-slider>
    <div class="elemlast">
      <div class="elem_last"></div>
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
    return {
      posts: [
        {
          id: 1,
          title: "ERP system for construction materials factory",
          body: "Custom logistics software includes several modules that enabled to fully digitalize a factory\n" +
              "– Order and stock management optimization\n" +
              "– Automatic invoicing and accounting\n" +
              "– Delivery scheduling and route planning\n" +
              "– Automatic contractors selection\n" +
              "\n" +
              "Eliminating manual work enabled the factory to double truck day load capacity (an increase from 45 to 92 trucks per day) and save over 60.000 EUR in the first year. ",
          picture: "x2.svg",
          tagline: "double truck day load capacity increase"
        },
        {
          id: 2,
          title: "some topic",
          body: "some body",
          picture: "WAREHOUSE.png",
          tagline: "some tagline"
        },
        {
          id: 3,
          title: "some topic",
          body: "some body",
          picture: "Case 3 Fleet.png",
          tagline: "some tagline"
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "src/style/style";

@media screen and (min-width: 1440px) {
  .what_or_content {
    display: flex;
    align-items: center;
    justify-content: right;
    .WHAT-OUR-PARTNERS-HA {
      width: 710px;
      height: 105px;
      margin: 247px 253px 103px 85px;
      @include  middleTitleText();
      text-align: right;
      color: $black;
    }
  }
  .elemlast{
    position: absolute;
    top: 4800px;
    z-index: 1;
    .elem_last {
      z-index: 1;
      height: 372px;
      width: 186px;
      transform: rotate(180deg);
      background-image: url(/public/imgs/orangeSmallElem.svg);
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .what_or_content {
    display: flex;
    align-items: center;
    justify-content: right;
    .WHAT-OUR-PARTNERS-HA {
      width: 512px;
      height: 75px;
      margin: 96px 91px 96px 5px;
      @include yourBusinessCase();
      line-height: 1;
      letter-spacing: -0.63px;
      text-align: right;
      color: $black;
    }
  }
  .elemlast{
    position: absolute;
    top: 5600px;
    z-index: 1;
    .elem_last {
      z-index: 1;
      height: 372px;
      width: 186px;
      transform: rotate(180deg);
      background-image: url(/public/imgs/orangeSmallElem.svg);
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .what_or_content {
    display: flex;
    align-items: center;
    justify-content: right;
    .WHAT-OUR-PARTNERS-HA {
      width: 345px;
      height: 100px;
      margin: 92px 15px 50px;
      font-family: 'Catamaran';
      font-size: 25px;
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: -0.63px;
      text-align: right;
      color: var(--black);
    }
  }
  .elemlast{
    position: absolute;
    top: 5200px;
    z-index: 1;
    .elem_last {
      z-index: 1;
      height: 372px;
      width: 186px;
      transform: rotate(180deg);
      background-image: url(/public/imgs/orangeSmallElem.svg);
    }
  }
}

</style>