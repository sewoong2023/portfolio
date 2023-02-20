<template>
  <div id="app">
   <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <gnb-area></gnb-area>
    <category-area v-if="$route.name !== 'main'"></category-area>
    <router-view></router-view>
    <footer-area></footer-area>
  </div>
</template>
<script>
  import GnbArea from './views/layout/GnbArea.vue';
  import CategoryArea from './views/layout/CategoryArea.vue';
  import FooterArea from './views/layout/FooterArea.vue';

  export default {
    components: {
      GnbArea,
      CategoryArea,
      FooterArea
    }
  }
</script>

<style>

</style>