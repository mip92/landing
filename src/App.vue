<template>
  <my-navbar></my-navbar>
  <my-content></my-content>

</template>

<script>
import MyNavbar from "@/components/MyNavbar";
import MyButton from "@/components/UI/MyButton";
import '@/style/style.scss'
import MyContent from "@/components/MyContent";
export default {
  components:{MyContent, MyButton, MyNavbar}
}
</script>
<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  margin-top: 15px;
  padding: 20px;
}

</style>
