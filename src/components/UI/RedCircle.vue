<template>
  <span class="dot">
  </span>
</template>

<script>
export default {
  name: 'red-circle',
  props: {},
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "src/style/style";
.dot {
  height: 34px;
  width: 34px;
  background-color: $watermelon;
  border-radius: 50%;
  box-shadow: -4px 6px 5px #FFDAB9;
}
</style>