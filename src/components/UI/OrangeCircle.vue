<template>
  <span class="dot">
    <div class="orange_number">
      <slot></slot>
    </div>
  </span>
</template>

<script>
export default {
  name: 'orange-circle',
  props: {},
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.dot {
  height: 80px;
  width: 80px;
  background-color: orange;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: flex;
  box-shadow: -4px 6px 5px #FFDAB9;
  .orange_number{
    font-family: 'Open Sans';
    font-size: 17px;
    color: white;
  }
}
</style>