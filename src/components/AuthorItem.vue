<template>
  <div class="author_item">
    <div class="author_name">
      {{ oneAuthor.name }}
    </div>
    <div class="author_position">
      {{ oneAuthor.position }}
    </div>
    <div class="author_avatar">
      <img class="grayscale" :src="require(`/public/imgs/${oneAuthor.avatar}`)"/>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    oneAuthor: {
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

@media screen and (min-width: 375px) {
  .author_item {
    display: grid;
    grid-template-rows: 22px 22px;
    grid-template-columns: 345px 17px 44px;

    .author_name {
      @include authorName();
      font-size: 17px;
      font-weight: bold;
      display: flex;
      justify-content: right;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .author_position {
      @include authorName();
      display: flex;
      justify-content: right;
      align-items: center;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;

    }

    .author_avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 3;
      grid-column-end: 4;

      .grayscale {
        width: 44px;
        filter: grayscale(1);
        transition: 1s;
      }

      .grayscale:hover {
        filter: grayscale(0);
        transition: 1s;
      }
    }
  }
}


@media screen and (min-width: 375px) and (max-width: 767px) {
  .author_item {
    grid-template-columns: 236px 17px 44px;
  }
}

</style>