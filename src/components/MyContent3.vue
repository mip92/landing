<template>
  <section id="expenses">
    <div class="wrapper_content3">
      <div class="content2">
        Expenses reduction after implementing logistics management software!
      </div>
      <div class="content3">
        49,2%
      </div>
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

@media screen and (min-width: 1440px) {
  .wrapper_content3 {
    margin-top: 248px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: stretch;
    .content2 {
      width: 345px;
      height: 100px;
      margin: 5px 0 0;
      opacity: 0.75;
      font-family: 'Open Sans';
      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: -0.63px;
      color: var(--charcoal)
    }
    .content3 {
      font-family: 'Open Sans';
      text-align: center;
      justify-content: center;
      font-size: 6vm;
      width: 346px;
      height: 100px;
      margin: 0 0 5px;
      background-color: var(--charcoal);
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
      font-family: "Open Sans";
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
      font-family: "Open Sans";
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
  .carousel {
    top: 168px;
  }
}

</style>