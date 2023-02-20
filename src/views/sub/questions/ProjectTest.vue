<template>
  <main id="subPage">
     <section id="container">
        <section id="lnb">
          <h2>Questions</h2>
          <ul>
            <li>
              <router-link to="/test" title="research & development">R&D</router-link>
            </li>
            <li>
              <router-link to="" title="Q&A">Q&A</router-link>
            </li>
            <li>
              <router-link to="" title="SiteMap">SiteMaps</router-link>
            </li>
          </ul>
        </section>
        <section id="contents">
          <article id="titleArea">
            <!-- 대제목 & 중제목 -->
            <h2></h2>
            <h3></h3>
          </article>
          <article id="contentArea">
            <article>
              <!-- 중제목 -->
              <h3>양방향 데이터 바인딩 활용(.sync)</h3>
              <article>
                <!-- 소제목 -->
                <h4>레이어 팝업 컴포넌트</h4>
                <!-- 참고문헌 및 참조-->
                <div class="references">
                  <dl>
                    <dt>참고사이트</dt>
                    <dd><a href="https://jeongwooahn.medium.com/vue-js-%EC%96%91%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%94%EC%9D%B8%EB%94%A9-%ED%99%9C%EC%9A%A9-%EB%AA%A8%EB%8B%AC-%EB%A0%88%EC%9D%B4%EC%96%B4%ED%8C%9D%EC%97%85-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0%EB%A5%BC-%ED%86%B5%ED%95%98%EC%97%AC-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-sync-4e2a5cf70dc4" alt="레이어팝업 양방향통신">레이어팝업 양방향통신</a></dd>
                  </dl>
                </div>
                <!-- 소스 -->
                <div class="box-area">
                </div>
                <!-- 출력 -->
                <button @click="showBtn">Toggle Modal</button>
                <app-my-modal title="This is modal" :showPopup.sync="showPopup"></app-my-modal>
              </article>
            </article>
            <article>
              <!-- 중제목 -->
              <h3>Vuex</h3>
              <article>
                <h4>State</h4>
                <p class="paragraph">
                  "state"는 컴포넌트 간에 공유 할 data 속성을 의미
                </p>
                <div>
                  <p>Count : {{ $store.state.counter }}</p>
                  <button type="button" @click="addCounter">+</button>
                  <button type="button" @click="subCounter">-</button>
                </div>
              </article>
              <article>
                <h4>Axios</h4>
                <ul :key="i" v-for="(source, i) in sourceView"> 
                  <li>{{ source.title }}</li>
                </ul>
              </article>
            </article>
            <article>

            </article>
          </article>
        </section>
     </section>
  </main>
</template>

<script>
import { EventBus } from '../../../event-bus';
import axios from 'axios';
import myModal from '../../../components/laboratory/MyModal.vue';

export default {
  data(){
    return{
      showPopup: false,
      sourceView: [],
    }
  },

  components:{
    appMyModal: myModal,
  },

  methods:{
    addCounter(){
      this.$store.state.counter++;
    },
    subCounter(){
      this.$store.state.counter--;
    },

    showBtn(){
      this.showPopup = !this.showPopup
    },
  },

  mounted(){
    let category = this.$route.meta.category; 
    EventBus.$emit('emitCategory', category);

    axios
    .get("./htmlcode.json")
    //.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {this.sourceView = response.data;})
  },
}
</script>

<style>

</style>