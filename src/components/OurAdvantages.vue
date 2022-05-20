<template>
  <div class="ourAdvantages">
    <div class="advantages_wrapper">
      <advantage-item v-for="post in posts" :key="post.id" :post="post" :eggClass="'name'+post.id"></advantage-item>
    </div>
  </div>
</template>

<script>
import AdvantageItem from "@/components/AdvantageItem";
export default {
  components: {AdvantageItem},
  props: {},
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "System Integration",
          body: "We help you with educating employees and integrating software in your running processes"
        },
        {
          id: 2,
          title: "Technical support",
          body: "We guarantee support and product maintenance after release and keep improving the system in cooperation with your team"
        },
        {
          id: 3,
          title: "Data security",
          body: "Your data is stored on secure servers based in Germany (or any other country on your request"
        },
        {
          id: 4,
          title: "We speak your language",
          body: "Our managers are German- and English-speaking, so the business communication is clear and easy"
        },
        {
          id: 5,
          title: "Representative in Germany",
          body: "Our business analyst is based in Frankfurt am Main. Discussing all the business issues in person is much more efficient"
        },
        {
          id: 6,
          title: "5 years experience in logistics",
          body: "We’ve successfully implemented custom logistics/transportation/stock and order management systems"
        },
      ],
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">


</style>