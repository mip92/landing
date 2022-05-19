<template>
  <div class="background">
    <my-navbar></my-navbar>
    <my-content1></my-content1>
    <my-content2></my-content2>
    <my-content3></my-content3>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar";
import MyButton from "@/components/UI/MyButton";
import '@/style/style.scss'
import MyContent1 from "@/components/MyContent1";
import MyContent2 from "@/components/MyContent2";
import MyContent3 from "@/components/MyContent3";

export default {
  components: {MyContent1, MyContent2, MyContent3, MyButton, MyNavbar}
}
</script>
<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.background {
  margin-top: 15px;
  background-image: linear-gradient(166deg, #fff, #f8f8f8);
}

</style>
