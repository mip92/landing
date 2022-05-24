<template>
  <div class="dialog" v-if="show === true" >
    <div @click.stop class="dialog__content">
      <div class="dialogBtn">
        <button @click="hideDialog"></button>
      </div>
      <div class="dialogContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  },

}
</script>

<style scoped lang="scss">
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
  position: fixed;
  display: flex;

  .dialog__content {
    margin: auto;
    background: white;
    min-height: 50px;
    min-width: 300px;
    display: flex;
    flex-direction: column;

    .dialogBtn {

      margin-left: auto;
      button {
        background-color: transparent;
        background-image: url(/public/imgs/closeDialog.svg);
        cursor: pointer;
        width: 44px;
        height: 44px;
        border: none;
      }
      .dialogContent {

      }
    }
  }
}

@media screen and (min-width: 768px) {
  .dialog {
    .dialog__content {
      width: 633px;
      object-fit: contain;
      box-shadow: 0 10px 30px 0 rgba(30, 30, 30, 0.25);
      background-image: linear-gradient(140deg, #fff, #efefef 100%);
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .dialog {
    .dialog__content {
      width: 345px;
      height: 753px;
      object-fit: contain;
      box-shadow: 0 10px 30px 0 rgba(30, 30, 30, 0.25);
      background-image: linear-gradient(140deg, #fff, #efefef 100%);
    }
  }
}


</style>