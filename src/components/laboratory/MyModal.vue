<template>
  <div class="my-modal" v-if="showPopup" @click.self="handleWrapperClick">
    <div class="my-modal__dialiog">
      <header class="my-modal__header">
        <span>{{ title }}</span>
        <button @click="$emit('update:showPopup', !showPopup)">close</button>
      </header>
      <main class="my-modal__body">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showPopup:{
      type: Boolean,
      require: true,
      default: false
    },
    title:{
      type: String,
      require: false,
    },
  },
  
  methods:{
    handleWrapperClick(){
      this.$emit('update:showPopup', false)
    },
  }
}
</script>

<style lang="scss">
  .my-modal{
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

   .my-modal__dialiog{
      position: absolute;
      margin-bottom: 50px;
      background: #FFFFFF;
      left: 50%;
      top: 50%;
      width: 600px;
      height: 500px;
      transform: translate(-50%, -50%);
    }

    .my-modal__header{
      position: relative;
      display: flex;
      padding: 16px 16px 0 25px;
      font-size: 28px;
      font-weight: bold;
      line-height: 1.29;
    }

    .my-modal__body{
      padding: 25px;
      min-height: 150px;
      max-height: 412px;
      overflow-y: scroll;
    }
  }
</style>