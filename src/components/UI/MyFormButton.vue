<template>
  <button class="btn">
    <div class="Request-a-free-consu">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'my-form-button'
}
</script>

<style scoped lang="scss">
@import "./src/style/style";

@media screen and (min-width: 768px) {
  .btn {
    padding: 0;
    border: none;
    cursor: pointer;
    width: 240px;
    height: 44px;
    margin: 0 0 5px;
    object-fit: contain;
    border-radius: 22px;
    background-color: $twilight-blue;

    .Request-a-free-consu {
      @include bigCarouselBody();
      text-align: right;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .btn {
    padding: 0;
    border: none;
    cursor: pointer;
    width: 295px;
    height: 44px;
    margin: 0 0 5px;
    object-fit: contain;
    border-radius: 22px;
    background-color: $twilight-blue;

    .Request-a-free-consu {
      @include bigCarouselBody();
      text-align: right;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>