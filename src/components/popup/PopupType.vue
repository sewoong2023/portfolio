<template>
  <div id="popup" v-show="showPopup">
    <section class="popup">
      <article class="title">
        <ul>
          <li>
            <slot name="info"></slot>
          </li>
          <li @click="close">
            <slot name="close"></slot>
          </li>
        </ul>
      </article>
      <article class="content">
        <div class="content-inner">
          <slot name="content"></slot>
        </div>
      </article>
      <article class="btn-list">
        <slot name="button"></slot>
      </article>
    </section>
    <section id="dim"></section>    
  </div>
</template>

<script>
export default {
  data(){
    return{
      showPopup : true,
    }
  },
  methods : {
    close(){
      this.showPopup = false
    }
  }
}
</script>

<style>

</style>