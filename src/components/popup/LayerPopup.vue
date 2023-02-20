<template>
  <div class="popup-layer" v-if="popup" @click.self="close">
    <section class="popup">
      <article class="title">
        <ul>
          <li>
            <slot name="info"></slot>
          </li>
          <li @click="$emit('update:popup', !popup)">
            <slot name="close"></slot>
          </li>
        </ul>
      </article>
      <article class="content">
        <div class="content-inner">
          <slot name="content"></slot>
        </div>
      </article>
    </section>
    <section id="dim"></section>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    popup:{
      type    : Boolean,
      require : true,
      default : false
    },
    title:{
      type    : String,
      require : false,
    }
  },
  methods : {
    close(){
      this.$emit('update:popup', false)
    }
  },
}
</script>

<style>

</style>