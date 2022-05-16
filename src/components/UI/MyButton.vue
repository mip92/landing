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
$twilight-blue: #083d77;
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
    height: 34px;
    font-family: 'Open Sans', sans-serif;
    font-size: 21px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;

    text-align: right;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>