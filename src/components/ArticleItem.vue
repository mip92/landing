<template>
  <div class="one_article">
    <div class="Flawless-communicati">
      {{ oneArticle.text }}
    </div>
    <div class="author-block">
      <author-item :one-author="oneArticle.author"></author-item>
    </div>
  </div>
</template>

<script>


import AuthorItem from "@/components/AuthorItem";

export default {
  components: {AuthorItem},
  props: {
    oneArticle: {
      type: Object,
      required: true
    },
    articleClass: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/style/style";

@media screen and (min-width: 1440px) {
  .one_article {
    .Flawless-communicati {
      width: 415px;
      margin: 0 0 15px 0;
      @include bigCarouselBody();
      color: $black;
    }
    .author-block{
      margin-bottom: 90px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .one_article {
    .Flawless-communicati {
      width: 415px;
      margin: 0 0 15px 0;
      @include bigCarouselBody();
      font-weight: 600;
      color: $black;
    }
    .author-block{
      margin-bottom: 90px;
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .one_article {
    .Flawless-communicati {
      width: 295px;
      height: 220px;
      margin: 0 0 15px;
      @include middleCarouselBody();
      font-weight: 600;
      color: $black;
    }
    .author-block{
      margin-bottom: 90px;
    }
  }
}

</style>