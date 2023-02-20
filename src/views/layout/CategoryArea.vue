<template>
  <section id="category">
    <article>
      <h2 class="hide">카테고리</h2>
      <ul>
        <li>홈 > </li>
        <li> &nbsp;{{ mainCategory }} > </li>
        <li> &nbsp;{{ subCategory }} </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { EventBus } from '../../event-bus.js';

export default {
  data() {
    return{
      mainCategory: '대분류',
      subCategory: '소분류',
    }
  },

  created() {
    EventBus.$on('emitCategory', res => {
      this.mainCategory = res[0];
      this.subCategory = res[1];
    });
  },
}
</script>

<style>

</style>