<template>
  <button class="btn">
    <div class="Request-a-free-consu">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped lang="scss">
@import "./src/style/style";

.btn {
  padding: 0;
  border: none;
  cursor: pointer;
  width: 345px;
  height: 72px;
  margin: 0 0 5px;
  object-fit: contain;
  border-radius: 72px;
  background-color: $twilight-blue;

  .Request-a-free-consu {
    @include eggSmallTitle();
    text-align: right;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>