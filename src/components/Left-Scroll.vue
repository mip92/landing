<template>
  <div class="left_scroll">
    <div class="left_scroll_content">
      <div class="left-scroll_arrow"></div>
      <div class="left_scroll_text">
        Scroll for more information
      </div>
    </div>

  </div>
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

@media screen and (min-width: 768px) {
  .left_scroll {
    display: flex;
    height: 250px;
    width:50px;
    position: absolute;
    top: 489px;

    .left_scroll_content {
      display: flex;
      justify-content: space-around;
      flex-direction: column-reverse;

      .left-scroll_arrow {
        width: 20px;
        height: 20px;
        background-image: url(/public/imgs/scrollLeft.svg);
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 75px;
      }

      .left_scroll_text {
        width: 200px;
        height: 50px;
        transform: rotate(-90deg);
        background-color: white;
        @include leftScroll();
      }
    }
  }
}

</style>