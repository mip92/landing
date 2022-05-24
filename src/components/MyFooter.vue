<template>
  <div class="my_footer">
    <div class="options">
      Data Protection / Imprint
    </div>
    <div class="logo">
      <my-logo></my-logo>
    </div>
  </div>
</template>

<script>
import MyLogo from "@/components/MyLogo";

export default {
  components: {MyLogo},
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "src/style/style";

.my_footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 140px;
  background-color: $black;

  .options {
    align-items: center;
    color: white;
  }
  .logo{
    align-items: center;
  }
}
@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .my_footer {
    flex-direction: column;
    justify-content: center;
    height: 208px;
    .options{
      margin-bottom: 36px;
    }
  }
}
</style>