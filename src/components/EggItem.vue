<template>
  <div :class="eggClass">
    <div class="egg_item">
      <div class="egg_circle">
        <orange-circle>{{ post.id }}</orange-circle>
      </div>
      <div class="egg_title">
        <div class="content_title">
          {{ post.title }}
        </div>
      </div>
      <div class="egg_body">
        <div class="egg_body">
          <div>{{ post.body }}</div>
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
    },
    eggClass: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/style/style";

@media screen and (min-width: 1440px) {
  .egg_item {
    display: grid;
    grid-template-columns: 150px 345px;
    grid-template-rows: 51px 79px;

    .egg_circle {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .egg_title {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 2;
      @include topicContent();
      color: $black;
    }

    .egg_body {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 2;
      grid-row-end: 3;
      @include smallText();
      color: $black;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .egg_item {
    display: grid;
    grid-template-columns: 150px 345px;
    grid-template-rows: 39px 74px;

    .egg_circle {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .egg_title {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 2;
      @include eggMiddleTitle();
      color: $black;
    }

    .egg_body {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 2;
      grid-row-end: 3;
      @include eggSmallBody();
      color: $black;
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .egg_item {
    display: grid;
    grid-template-columns: 80px 30px 220px;
    grid-template-rows: 18px 42px 10px 100px;

    .egg_circle {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 5;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .egg_title {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 3;
      grid-column-end: 4;
      @include eggSmallTitle();
      color: $black;
    }

    .egg_body {
      @include eggSmallBody();
      color: $black;
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 4;
      grid-row-end: 5;
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
}

</style>