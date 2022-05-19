<template>
  <div class="egg">
    <div class="egg_wrapper">
      <egg-item v-for="post in posts" :key="post.id" :post="post" :eggClass="'name'+post.id"></egg-item>
    </div>
  </div>
</template>

<script>
import EggItem from "@/components/EggItem";

export default {
  components: {EggItem},
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Customized to your needs",
          body: "A software is developed exclusively with your needs and plans in mind. This enables to solve unique problems efficiently"
        },
        {
          id: 2,
          title: "Short-term ROI",
          body: "You will experience the first returns right in the first month after integrating the system in your current processes"
        },
        {
          id: 3,
          title: "Predictable scalability",
          body: "A custom system grows along with your business since your company goals are taken into account in the development process"
        },
        {
          id: 4,
          title: "Improve, not rebuild",
          body: "Custom software supports and improves your running processes step-by-step. Your current system keeps working  "
        },
      ],
    }
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1440px) {
  .egg {
    position: absolute;
    top: 2342px;
    left:170px;
    .egg_wrapper {
      display: grid;
      grid-template-columns: 495px 33px 495px;
      grid-template-rows: 130px 47px 130px;
      .name1 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .name2 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 3;
        grid-column-end: 4;
      }

      .name3 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .name4 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 3;
        grid-column-end: 4;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
  .egg {
    position: absolute;
    top: 2135px;
    left:23px;
    .egg_wrapper {
      display: grid;
      grid-template-rows: 113px 62px 113px 62px 113px 62px 113px;
      .name1 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .name2 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .name3 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 5;
        grid-row-end: 6;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .name4 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 7;
        grid-row-end: 8;
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .egg {
    position: absolute;
    top: 2175px;
    left:15px;
    .egg_wrapper {
      display: grid;
      grid-template-rows: 170px 6px 170px 6px 170px 6px 170px;
      .name1 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
      }
      .name2 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .name3 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 5;
        grid-row-end: 6;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .name4 {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row-start: 7;
        grid-row-end: 8;
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }
}

</style>