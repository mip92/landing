<template>
  <div class="MyWrapperSlider">
    <div class="wrapperSlider">
      <carousel class="myCarosel" :items-to-show="sliderItemCount">
        <slide v-for="post in posts"
               :post="post"
        >
          <slider-item :post="post"></slider-item>
        </slide>
        <template #addons>
          <div class="first_slider_navigation">
            <navigation/>
          </div>
          <div class="first_slider_pagination">
            <pagination/>
          </div>
        </template>
      </carousel>
    </div>
  </div>

</template>

<script>
//import 'vue3-carousel/dist/carousel.css';
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
@import "src/style/style";
@import "~vue3-carousel/dist/carousel.css";

@media screen and (min-width: 1440px) {
  .first_slider_navigation {
    .carousel__prev,
    .carousel__next {
      background-color: $orange;
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
  }
  .wrapperSlider {
    margin-left: auto;
    width: 1400px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .first_slider_navigation {
    .carousel__prev,
    .carousel__next {
      background-color: inherit;
      background-image: url(/public/imgs/nextArrow.svg);
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
      top: 402px;
      left: 21px
    }
    .carousel__icon{
      display: none;
    }
    .carousel__prev{
      transform: rotate(180deg);
      top:368px;
      left: 0px
    }
  }
  .wrapperSlider {
    margin-left: auto;
    width: 768px;
  }
}


@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .first_slider_navigation {
    .carousel__prev,
    .carousel__next {
      background-color: inherit;
      background-image: url(/public/imgs/nextArrow.svg);
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
    .carousel_slide{}
    .carousel__icon{
      display: none;
    }
    .carousel__prev{
      transform: rotate(180deg);
      top:375px;
      left: 248px
    }
  }
  .MyWrapperSlider {
    display: flex;
    align-items: center;
    justify-content: center;

    .wrapperSlider {
      width: 375px;

      .carousel {
        max-width: 375px;
      }
    }
  }
}

</style>