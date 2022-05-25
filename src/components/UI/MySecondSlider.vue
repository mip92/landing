<template>
  <div class="MyWrapperSlider2">
    <div class="wrapperSlider2">
      <carousel class="myCarosel2">
        <slide v-for="post in posts"
               :post="post"
        >
          <second-slider-item :post="post"></second-slider-item>
        </slide>
        <template #addons>
          <div class="my_second_navigator">
            <navigation/>
          </div>
          <div class="my_second_paginator">
            <pagination/>
          </div>
        </template>
      </carousel>
    </div>
  </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import SecondSliderItem from "@/components/SecondSliderItem";

export default {
  name: 'my-second-slider',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    SecondSliderItem,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {}
  },
};
</script>


<style lang="scss">
@import "src/style/style";
@import "~vue3-carousel/dist/carousel.css";

@media screen and (min-width: 1440px) {
  .wrapperSlider2 {
    .carousel {
      z-index: 5;
    }

    .my_second_navigator {
      width: 500px;

      .carousel__prev,
      .carousel__next {
        background-color: inherit;
        background-image: url(/public/imgs/rightArrow.svg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        border-radius: 0;
        width: 70px;
        height: 70px;
        font-size: calc(var(--vc-nav-width) * 2 / 3);
        padding: 0;
        color: var(--vc-nav-color);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border: 0;
        cursor: pointer;
        top: -40px;
        margin-left: 600px;
      }
      .carousel__next {
        top: -40px;
        margin-right: 600px;
      }
      .carousel__icon{
        display: none;
      }
      .carousel__prev{
        background-image: url(/public/imgs/leftArrow.svg);
        top:-40px;
        left: 0px
      }
    }

    .my_second_paginator {
      display: flex;
      justify-content: center;

      .carousel__pagination {
        position: absolute;
        top: -78px
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1439.98px) {
  .wrapperSlider2 {
    .carousel {
      z-index: 5;
    }

    .my_second_navigator {
      width: 500px;

      .carousel__prev,
      .carousel__next {
        background-color: inherit;
        background-image: url(/public/imgs/rightArrow.svg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: 100%;
        border-radius: 0;
        width: 70px;
        height: 70px;
        font-size: calc(var(--vc-nav-width) * 2 / 3);
        padding: 0;
        color: var(--vc-nav-color);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border: 0;
        cursor: pointer;
        top: -40px;
        margin-left: 300px;
      }

      .carousel__next {
        top: -40px;
        margin-right: 300px;
      }
      .carousel__icon{
        display: none;
      }
      .carousel__prev{
        background-image: url(/public/imgs/leftArrow.svg);
        top:-40px;
        left: 0px
      }
    }

    .my_second_paginator {
      display: flex;
      justify-content: center;

      .carousel__pagination {
        position: absolute;
        top: -78px
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .wrapperSlider2 {
    .carousel {
      z-index: 5;
    }

    .my_second_navigator {
      width: 500px;

      .carousel__prev,
      .carousel__next {
        background-color: inherit;
        background-image: url(/public/imgs/rightArrow.svg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: 100%;
        border-radius: 0;
        width: 70px;
        height: 70px;
        font-size: calc(var(--vc-nav-width) * 2 / 3);
        padding: 0;
        color: var(--vc-nav-color);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border: 0;
        cursor: pointer;
        top: 320px;
        margin-left: auto;
        left: 50px;
      }

      .carousel__next {
        top: 320px;
        right: 50px;
        margin-left: auto;
      }
      .carousel__icon{
        display: none;
      }
      .carousel__prev{
        background-image: url(/public/imgs/leftArrow.svg);
        top:320px;
        left: 60px
      }
    }

    .my_second_paginator {
      display: flex;
      justify-content: center;

      .carousel__pagination {
        position: absolute;
        top: 285px
      }
    }
  }
}

</style>