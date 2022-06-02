<template>
  <div :class="eggClass">
    <div class="advantage_item">
      <div class="advantage_circle">
        <red-circle></red-circle>
      </div>
      <div class="advantage_title">
        <div class="content_title">
          {{ post.title }}
        </div>
      </div>
      <div class="advantage_body">
        <div v-if="post.open">
          <div>{{ post.body }}</div>
        </div>
      </div>
      <div>
        <div v-if="post.open" class="advantage_btn_open" @click="$emit('setOpenPost', post)"></div>
        <div v-if="!post.open" class="advantage_btn_closed" @click="$emit('setOpenPost', post)"></div>
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
  .advantage_item {
    display: grid;
    grid-template-columns: 34px 43px 370px;
    grid-template-rows: 34px auto 26px;

    .advantage_circle {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .advantage_title {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-column-start: 3;
      grid-column-end: 4;
      @include topicContent();
      color: $black;
    }

    .advantage_body {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-column-start: 3;
      grid-column-end: 4;
      @include smallText();
      color: $black;
    }
    .advantage_btn{
      display: none;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .advantage_item {
    display: grid;
    grid-template-columns: 34px 43px 345px;
    grid-template-rows: 34px auto 26px;

    .advantage_circle {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .advantage_title {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-column-start: 3;
      grid-column-end: 4;
      @include bigText();
      color: $black;
    }

    .advantage_body {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-column-start: 3;
      grid-column-end: 4;
      @include smallText();
      color: $black;
    }
    .advantage_btn{
      display: none;
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px)  {
  .advantage_item {
    display: grid;
    grid-template-columns: 15px 296px 24px 24px;
    grid-template-rows: 56px auto;
    .advantage_circle {
      display: none
    }
    div{
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 4;
      grid-column-end: 5;
      .advantage_btn_open {
        cursor: pointer;
        height: 24px;
        width: 24px;
        background-image: url(/public/imgs/arrow.svg);
        background-repeat: no-repeat;
        background-position:center;
        transform: rotate(180deg);
      }
      .advantage_btn_closed {
        cursor: pointer;
        height: 24px;
        width: 24px;
        background-image: url(/public/imgs/arrow.svg);
        background-repeat: no-repeat;
        background-position:center;
      }
    }
    .advantage_title {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 2;
      grid-column-end: 3;
      @include bigText();
      color: $black;
    }
    .advantage_body {
      display: flex;
      justify-content: left;
      align-items: center;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      @include smallText();
      color: $black;
    }
  }
}


</style>