<template>
  <main>
    
  </main>
</template>

<script>
import { EventBus } from '../../event-bus';

export default {
  mounted(){
    let category = this.$route.meta.category;
    EventBus.$emit('emitCategory', category);
  }
}
</script>

<style>

</style>