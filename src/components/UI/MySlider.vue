<template>
  <div class="MyWrapper">
    <div class="wrapper">
      <carousel class="myCarosel" :items-to-show="sliderItemCount">
        <slide v-for="post in posts"
               :post="post"
        >
          <slider-item :post="post"></slider-item>
        </slide>
        <template #addons>
          <navigation/>
          <pagination/>
        </template>
      </carousel>
    </div>
  </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import SliderItem from "@/components/SliderItem";

export default {
  name: 'App',
  components: {
    SliderItem,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      width: 0,
      sliderItemCount: 0,
      posts: [
        {
          title: "Overwhelming and inaccurate paperwork",
          body: "Most documents, such as orders, invoices, contracts, etc. are stored in folders on endless shelves. They are never easy to find. Moreover, due to human factor, crucial mistakes take place that cost your company much time to solve, but also drain your budget."
        },
        {
          title: "Manual order management based on phone calls and emails",
          body: "Do your clients call you just to find out that the necessary product is currently out of stock? You waste resources by not providing them with actual information about your available inventory online"
        },
        {
          title: "Inefficient truck load",
          body: "Without dynamic truck load scheduling, your company misses up to 50% of the potential loading capability"
        },
      ],
    }
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if (this.width >= 1440) this.sliderItemCount = 3
      else if (this.width > 768 && this.width < 1439) this.sliderItemCount = 2
      else this.sliderItemCount = 1
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1440px) {
  .carousel__prev,
  .carousel__next {
    background-color: orange;
    border-radius: 0;
    width: 70px;
    height: 70px;
    text-align: center;
    font-size: calc(var(--vc-nav-width) * 2 / 3);
    padding: 0;
    color: var(--vc-nav-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 0;
    cursor: pointer;
    top: 403px;
    left: 50px
  }
  .wrapper {
    margin-left: auto;
    width: 1400px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
  .carousel__prev,
  .carousel__next {
    background-color: orange;
    border-radius: 0;
    width: 70px;
    height: 70px;
    text-align: center;
    font-size: calc(var(--vc-nav-width) * 2 / 3);
    padding: 0;
    color: var(--vc-nav-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 0;
    cursor: pointer;
    top: 403px;
    left: 35px
  }
  .wrapper {
    margin-left: auto;
    width: 768px;
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .carousel__prev,
  .carousel__next {
    background-color: orange;
    border-radius: 0;
    width: 70px;
    height: 70px;
    text-align: center;
    font-size: calc(var(--vc-nav-width) * 2 / 3);
    padding: 0;
    color: var(--vc-nav-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 0;
    cursor: pointer;
    top: 410px;
    left: 270px
  }
  .MyWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper {
    width: 375px;

    .carousel {

    }

  }
}

</style>