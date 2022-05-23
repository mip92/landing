<template>
  <div class="background">
    <my-navbar :isOpen="isOpen" @open="setOpenNavbarBurger"></my-navbar>
    <my-content1 :isOpen="isOpen"></my-content1>
    <my-content2></my-content2>
    <my-content3></my-content3>
    <my-content4></my-content4>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar";
import MyButton from "@/components/UI/MyButton";
import '@/style/style.scss'
import MyContent1 from "@/components/MyContent1";
import MyContent2 from "@/components/MyContent2";
import MyContent3 from "@/components/MyContent3";
import MyContent4 from "@/components/MyContent4";


export default {
  components: {MyContent1, MyContent2, MyContent3, MyContent4, MyButton, MyNavbar},
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    setOpenNavbarBurger() {
      this.isOpen = !this.isOpen
    },
  }
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
