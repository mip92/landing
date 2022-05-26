<template>
  <div class="item">
    <div class="title">
      <div class="content_title">
        {{ post.title }}
      </div>
    </div>
    <div class="body">
      <div class="content_body">
        <div>{{ post.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import "./src/style/style";
@media screen and (min-width: 1440px) {
  .item {
    background: $twilight-blue;
    width: 420px;
    height: 368px;
    margin-right: 15px;

    .title {
      margin: 67px 38px 22px;
      width: 345px;
      height: 50px;
      text-align: left;

      .content_title {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        @include bigCarouselTitle();
        color: $white;
      }
    }

    .body {
      margin: 22px 38px 22px;
      width: 345px;
      height: 115px;
      text-align: left;

      .content_body {
        width: 345px;
        height: 161px;
        margin: 22px 0 0;
        @include bigCarouselBody();
        color: $white;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .item {
    background: $twilight-blue;
    width: 375px;
    height: 368px;
    //margin-right: 15px;

    .title {
      margin: 87px 24px 15px;
      width: 345px;
      height: 50px;
      text-align: left;

      .content_title {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        @include middleCarouselTitle();
        color: $white;
      }
    }

    .body {
      margin: 24px 15px;
      width: 345px;
      height: 115px;
      text-align: left;

      .content_body {
        width: 345px;
        height: 161px;
        margin: 22px 0 0;
        @include middleCarouselBody();
        color: $white;
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .item {
    background: $twilight-blue;
    width: 375px;
    height: 375px;
    .title {
      margin-top: 92px;
      margin-left: 15px;
      width: 345px;
      height: 50px;
      text-align: left;

      .content_title {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        @include middleCarouselTitle();
        letter-spacing: -0.53px;
        color: #fff;
      }
    }

    .body {
      margin: 24px 15px;
      width: 345px;
      height: 115px;
      text-align: left;

      .content_body {
        width: 345px;
        height: 161px;
        margin: 22px 0 0;
        @include middleCarouselBody();
        color: #fff;
      }
    }
  }
}

</style>