<template>
  <div class="item2">
    <div class="my_body2">
      <div class="left_body">
        <img :src="require(`/public/imgs/${post.picture}`)"/>
        <div>{{ post.tagline }}</div>
      </div>
      <div class="right_body">
        <div class="title2">
          <div class="content_title2">
            {{ post.title }}
          </div>
        </div>
        <div class="body2">
          <div class="content_body2">
            {{ post.body }}
          </div>
        </div>
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
  .my_body2 {
    display: flex;
    align-items: center;

    .left_body {
      margin-right: 97px;
      div{
        height: 20px;
        @include middleCarouselBody();
        font-weight: bold;
        text-align: center;
        color: $black;
      }
      img{
        width: 469px
      }
    }

    .right_body {
      display: flex;
      flex-direction: column;

      .title2 {
        text-align: left;
        width: 345px;
        height: 60px;
        margin: 0 0 10px;
        @include topicContent();
        color: $black;
      }

      .body2 {
        text-align: left;
        width: 345px;
        height: 276px;
        margin: 10px 0 0;
        opacity: 0.75;
        @include bigCarouselBody();
        color: $black;
        .content_body2{
          white-space: pre-line;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .my_body2 {
    display: flex;
    align-items: center;
    .left_body {
      div{
        height: 20px;
        @include eggSmallBody();
        font-weight: bold;
        text-align: center;
        color: $black;
      }
      img{
        width: 345px
      }
    }
    .right_body {
      display: flex;
      flex-direction: column;

      .title2 {
        text-align: left;
        width: 325px;
        height: 42px;
        margin: 0 0 24px;
        font-family: "Catamaran";
        font-size: 21px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: -0.53px;
        color: $black;
      }

      .body2 {
        text-align: left;
        width: 345px;
        height: 276px;
        margin: 10px 0 0;
        opacity: 0.75;
        @include eggSmallBody();
        color: $black;
        .content_body2{
          white-space: pre-line;
        }
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .my_body2 {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    .left_body {
      div{
        height: 20px;
        @include eggSmallBody();
        font-weight: bold;
        text-align: center;
        color: $black;
      }
      img{
        margin-top: 30px;
        width: 345px
      }
    }
    .right_body {
      display: flex;
      flex-direction: column;
      .title2 {
        position: absolute;
        width: 325px;
        height: 42px;
        margin: 0 0 24px;
        @include eggMiddleTitle();
        line-height: 1;
        color: $black;
        text-align: left;
      }

      .body2 {
        text-align: left;
        width: 345px;
        height: 276px;
        margin: 50px 0 0;
        opacity: 0.75;
        @include eggSmallBody();
        color: $black;
        .content_body2{
          white-space: pre-line;
        }
      }
    }
  }
}

</style>