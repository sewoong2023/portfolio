<template>
  <main id="subPage">
     <section id="container">
      <section id="lnb">
        <h2>Handbook</h2>
        <ul>
          <li>
            <router-link to="/htmlcss" title="HTML">HTML</router-link>
          </li>
          <li>
            <router-link to="/sass" title="SCSS">SCSS</router-link>
          </li>
          <li>
            <router-link to="/vue" title="Vue">Vue</router-link>
          </li>
          <li>
            <router-link to="/Jquery" title="Java Script" class="active">JS</router-link>
          </li>
          <li>
            <router-link to="/ts" title="Type Script">TS</router-link>
          </li>
          <li>
            <router-link to="/git" title="GitHub">Git</router-link>
          </li>
        </ul>
      </section>
      <section id="contents">
        <article id="titleArea">
          <!-- 대제목 & 중제목 -->
          <h2>Handbook</h2>
          <h3>Jquery</h3>
        </article>
        <article id="contentArea">
          <!-- 참고문헌 및 참조-->
          <article class="references">
            <dl>
              <dt>참고문헌</dt>
              <dd><i></i></dd>
            </dl>
          </article>
          <article>
            <!-- 중제목 -->
            <h3>Data binding</h3>
            <article>
              <!-- 소제목 -->
              <h4>In Selectbox</h4>
              <!-- 소스 -->
              <div class="box-area">
              </div>
              <!-- 출력 -->
            </article>
          </article>
        </article>
      </section>
     </section>
  </main>
</template>

<script>
import { EventBus } from '../../../event-bus';

export default {
  data(){
    return{
    }
  },

  mounted(){
    let category = this.$route.meta.category;
    EventBus.$emit('emitCategory', category);
  }
}
</script>

<style>

</style>