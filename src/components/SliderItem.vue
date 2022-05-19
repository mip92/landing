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
@media screen and (min-width: 1440px) {
  .item {
    background: #083d77;
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
        font-family: "Open Sans";
        font-size: 21px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: -0.53px;
        color: #fff;
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
        font-family: 'Open Sans';
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.43px;
        color: #fff;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
  .item {
    background: #083d77;
    width: 375px;
    height: 368px;
    margin-right: 15px;

    .title {
      margin: 87px 24px 15px;
      width: 345px;
      height: 50px;
      text-align: left;

      .content_title {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-family: "Open Sans";
        font-size: 21px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
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
        font-family: 'Open Sans';
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.38px;
        color: #fff;
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .item {
    background: #083d77;
    width: 375px;
    height: 375px;
    margin-right: 15px;

    .title {
      margin: 92px 30px 15px;
      width: 345px;
      height: 50px;
      text-align: left;

      .content_title {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-family: "Open Sans";
        font-size: 21px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
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
        font-family: 'Open Sans';
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.38px;
        color: #fff;
      }
    }
  }
}

</style>