<template>
  <header v-on:mouseover="over" v-on:mouseleave="leave">
    <!-- <section class="go-to">
      <router-link to="/">본문바로가기<span class="hide">본문바로가기</span></router-link>
    </section> -->
    <section class="clear">
      <h1><router-link to="/">What to do !? <span class="hide">PortFolio</span></router-link></h1>
      <h2 class="hide">메뉴</h2>
      <!-- Web -->
      <nav>
        <ul class="gnb">
          <li>
            <router-link to="/htmlcss" title="Hand book" data-menu="Hand book"></router-link>
            <article v-show="active">
              <div>
                <ul>
                  <li>
                    <router-link to="/htmlcss" title="HTML">HTML</router-link>
                  </li>
                  <li>
                    <router-link to="/sass" title="SCSS">SCSS</router-link>
                  </li>
                  <li>
                    <router-link to="/vue" title="Vue.js">Vue.js</router-link>
                  </li>
                  <li>
                      <router-link to="/Jquery" title="Java Script">JS</router-link>
                  </li>
                  <li>
                    <router-link to="/ts" title="Type Script">TS</router-link>
                  </li>
                  <li>
                    <router-link to="/git" title="GitHub">Git</router-link>
                  </li>
                </ul>
              </div>
            </article>
          </li>
          <li>
            <router-link to="/" title="About" data-menu="About"></router-link>
            <article v-show="active">
              <div>
                <ul>
                  <li>
                    <router-link to="/" title="">Media</router-link>
                  </li>
                </ul>
              </div>
            </article>
          </li>
          <li>
            <router-link to="/travel2022" title="Photo" data-menu="Photo"></router-link>
            <article v-show="active">
              <div>
                <ul>
                  <li>
                    <router-link to="/travel2022" title="">여행</router-link>
                    <ul>
                      <li><router-link to="/travel2022" title="2022년 여행">2022</router-link></li>
                      <li><router-link to="/travel2021" title="">2021</router-link></li>
                      <li><router-link to="/travel2020" title="">2020</router-link></li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/food2022" title="">음식</router-link>
                    <ul>
                      <li>
                        <router-link to="/food2022" title="">2022</router-link>
                      </li>
                      <li>
                        <router-link to="/food2021" title="">2021</router-link>
                      </li>
                      <li>
                        <router-link to="/food2020" title="">2020</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </article>
          </li>
          <li>
            <router-link to="/" title="Hobby" data-menu="Hobby"></router-link>
            <article v-show="active">
              <div>
                <ul>
                  <li>
                    <router-link to="/" title="">프로야구</router-link>
                  </li>
                  <li>
                    <router-link to="/" title="">영화</router-link>
                  </li>
                  <li>
                    <router-link to="/" title="">게임</router-link>
                  </li>
                </ul>
              </div>
            </article>          
          </li>
          <li>
            <router-link to="/test" title="Questions" data-menu="Questions"></router-link>
            <article v-show="active">
              <div>
                <ul>
                  <li>
                    <router-link to="/test" title="research & development">R&D</router-link>
                  </li>
                  <li>
                    <router-link to="/" title="">Q&A</router-link>
                  </li>
                  <li>
                    <router-link to="/" title="">SiteMap</router-link>
                  </li>
                </ul>
              </div>
            </article>         
          </li>
        </ul>
      </nav>

      <!-- Mobile -->
      <font-awesome-icon icon="fa-brands fa-twitter" />
      <font-awesome-icon :icon="['fa-solid', 'fa-bars']" class="menu" @click="clickMenu"/> 
      <nav v-show="menuToggle" class="m-menu">
        <!-- <p class="temporary">공사중</p> -->
        <ul>
          <li>
            <router-link to="/htmlcss" title="Hand book" >HANDBOOK</router-link>
          </li>
          <li>
            <router-link to="/" title="About" data-menu="About">ABOUT</router-link>
          </li>
          <li>
            <router-link to="/travel2022" title="Photo" data-menu="Photo">PHOTO</router-link>
          </li>
          <li>
            <router-link to="/" title="Hobby" data-menu="Hobby">HOBBY</router-link>
          </li>
          <li>
            <router-link to="/test" title="Questions" data-menu="Questions">QUESTIONS</router-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="bg-cnt" v-show="active">
      <article>
        이미지
      </article>
    </section>
  </header>
</template>

<script>
export default {
  data(){
    return{
      active     : false,
      menuToggle : false,
    }
  },
  methods:{
    over(){
      this.active = true;
    },
    leave(){
      this.active = false;
    },
    clickMenu(){
      this.menuToggle = !this.menuToggle;
    }
  }
}
</script>

<style>

</style>