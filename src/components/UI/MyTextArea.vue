<template>
  <label class="text-area-control">
    <textarea :value="modelValue" @input="updateInput"></textarea>
    <span>{{ modelPlaceholder }}</span>
  </label>
</template>

<script>
export default {
  name: "my-text-area",
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

  @import "src/style/style";
  .text-area-control {
    position: relative;
    width: 100%;
    textarea {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      opacity: 0.25;
      border-radius: 22px;
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