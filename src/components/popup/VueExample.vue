<template>
  <div v-show="showModal">
    <section>
      <article class="popup-title">
        <slot name="info"></slot>
      </article>
      <article class="popup-content">
        <slot name="content-inner"></slot>
      </article>
      <article class="btn-list">
        <button type="button" class="btn" @click="popupClose">확인</button>
        <button type="button" class="btn-border" @click="popupClose">취소</button>
      </article>
    </section>
    <div id="dim"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showModal : false,
    }
  },
  methods:{
    popupClose(){
      // this.$emit('상위요소 커스텀명')
      this.$emit('closePopup')
    }
  }
}
</script>

<style>

</style>