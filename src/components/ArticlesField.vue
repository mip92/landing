<template>
  <div class="advantages_wrapper">
    <article-item v-for="oneArticle in articlesData"
             :key="oneArticle.id"
             :oneArticle="oneArticle"
             :articleClass="'advantage'+oneArticle.id">
    </article-item>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";

export default {
  components: {ArticleItem},
  props: {},
  data() {
    return {
      articlesData: [
        {
          id: 1,
          author:{
            name: "Dan Weber",
            position: "CEO/CTO at Marketsoup",
            avatar: 'avatar1.png',
          },
          text: "Flawless communication with the Clockwise Software team resulted in a fleet management system that exactly met the needs of the municipal waste transportation company. The software runs on Android smartphones, so there was no need for expensive equipment, and the learning curve was low. We’ve implemented multi-tenancy to use this software in other projects connected with logistics."
        },
        {
          id: 2,
          author:{
            name: "Vadim Chabanenko",
            position: "Director at UDK Gazbeton",
            avatar: 'avatar2.png',
          },
          text: "With the automatic load scheduling and proper route planning, we are finally able to use 100% of our truck load capacity. Also, order management and delivery have become much more efficient due to custom modules. In the first year, we have covered our investment in custom ERP system development"
        },
      ],
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">


</style>