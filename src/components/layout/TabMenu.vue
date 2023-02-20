<template>
  <section v-if="showContent">
    <article id="tabs">
      <ul class="tab-menu">
        <li v-for="(tab, index) in tabs" :key="index" v-bind:class="{ active:currentTab === index }">
          <a href="#" v-on:click="currentTab = index">{{ tab }}</a>
        </li>
      </ul>
      <section class="tab-content">
        <article v-show="currentTab == 0">tab cont1</article>
        <article v-show="currentTab == 1">tab cont2</article>
        <article v-show="currentTab == 2">tab cont3</article>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  data(){
    return {
      currentTab  : 0,
      showContent : true,
      tabs        : ['tab111', 'tab2', 'tab3']
    }
  }
}
</script>

<style>

</style>