<template>
  <label class="input-control">
    <input :value="modelValue" @input="updateInput" type="text">
    <span>{{ modelPlaceholder }}</span>
  </label>
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
    modelPlaceholder: String
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/style/style";

.input-control {
  position: relative;
  width: 100%;

  input {
    width: 100%;
    display: block;
    height: 44px;
    object-fit: contain;
    opacity: 0.25;
    border-radius: 72px;
    border: solid 1px $black;
    //input[type="text"]

    //margin: 23px 0 0;
    padding: 10px 22px 10px 24px;
    @include bigCarouselBody();
    color: $black;
  }

  span {
    position: absolute;
    z-index: 1;
    top: -19px;
    left: 24px;
    height: 24px;
    @include inputPalacholder();
    color: $black;
  }
}


</style>