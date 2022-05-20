<template>
  <div class="ourAdvantages">
    <span class="OUR-ADVANTAGES">
      OUR ADVANTAGES
    </span>
    <div class="advantages_wrapper">
      <advantage-item v-for="post in posts"
                      :key="post.id"
                      :post="post"
                      :eggClass="'advantage'+post.id"
                      @removePost='removePost'
      >
      </advantage-item>
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
          body: "We help you with educating employees and integrating software in your running processes",
          open: true,
        },
        {
          id: 2,
          title: "Technical support",
          body: "We guarantee support and product maintenance after release and keep improving the system in cooperation with your team",
          open: true,
        },
        {
          id: 3,
          title: "Data security",
          body: "Your data is stored on secure servers based in Germany (or any other country on your request",
          open: true,
        },
        {
          id: 4,
          title: "We speak your language",
          body: "Our managers are German- and English-speaking, so the business communication is clear and easy",
          open: true,
        },
        {
          id: 5,
          title: "Representative in Germany",
          body: "Our business analyst is based in Frankfurt am Main. Discussing all the business issues in person is much more efficient",
          open: true,
        },
        {
          id: 6,
          title: "5 years experience in logistics",
          body: "We’ve successfully implemented custom logistics/transportation/stock and order management systems",
          open: true,
        },
      ],
    }
  },
  methods: {
    removePost(post) {
      this.posts.filter((p) => {
        if(p.id === post.id) {p.open = !p.open}
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/style/style";

@media screen and (min-width: 1440px) {
  .ourAdvantages {
    .OUR-ADVANTAGES {
      width: 505px;
      height: 44px;
      margin: 168px 26px 52px 20px;
      @include middleTitleText();
      color: $black;
    }

    .advantages_wrapper {
      margin-top: 49px;
      display: flex;
      flex-direction: column;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
  .ourAdvantages {
    .OUR-ADVANTAGES {
      width: 505px;
      height: 44px;
      margin: 168px 26px 52px 20px;
      @include topicContent();
      color: $black;
    }

    .advantages_wrapper {
      margin-top: 49px;
      display: flex;
      flex-direction: column;
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {

}


</style>