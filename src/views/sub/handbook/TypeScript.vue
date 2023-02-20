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
            <router-link to="" title="SCSS">SCSS</router-link>
          </li>
          <li>
            <router-link to="/vue" title="Vue" >Vue</router-link>
          </li>
          <li>
            <router-link to="/Jquery" title="Java Script">JS</router-link>
          </li>
          <li>
            <router-link to="/ts" title="Type Script" class="active">TS</router-link>
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
          <h3>TypeScript</h3>
        </article>
        <article id="contentArea">
          <!-- 참고문헌 및 참조-->
          <article class="references">
            <dl>
              <dt>참고</dt>
              <dd><i>프론트앤드 개발 올인원 패키지, 패스트컴퍼스</i></dd>
            </dl>
          </article>
          <article>
            <!-- 중제목 -->
            <h3>타입스크립트 컴파일러</h3>
            <article>
              <!-- 소제목 -->
              <h4>타입스크립트 컴파일러 설치</h4>
              <!-- 소스 -->
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%">(sudo)&nbsp;npm&nbsp;install&nbsp;typescript&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>g</div></div></td></tr></table></div>
              </div>
              <!-- 출력 -->
            </article>
            <article>
              <h4>타입스크립트 컴파일러 실행</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%">npx&nbsp;tsc&nbsp;파일명.ts</div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <h4>최신 자바스크립트로 컴파일</h4>
              <div class="box-area">
                <h5>hello.ts</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%">npx&nbsp;tsc&nbsp;파일명.ts&nbsp;--target&nbsp;es6</div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;add&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">'./util'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">const</span>&nbsp;value&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;add(<span style="color:#c10aff">1</span>,<span style="color:#c10aff">2</span>);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">console</span>.log(value);</div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <h4>컴파일러 설정파일</h4>
            </article>
          </article>
          <article>
            <h3>모듈 시스템</h3>
            <article>
              <h4>모듈 시스템 이해</h4>
              <div class="box-area">
                <h5>util.ts</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;<span style="color:#ff3399">function</span>&nbsp;add(a,&nbsp;b){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399">return</span>&nbsp;a&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">+</span>&nbsp;b;</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <h5>hello.ts</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;add&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">'./util'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">const</span>&nbsp;value&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;add(<span style="color:#c10aff">1</span>,<span style="color:#c10aff">2</span>);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">console</span>.log(value);</div></div></td></tr></table></div>
              </div>
            </article>
          </article>
        </article>
      </section>
     </section>
  </main>
</template>
<script type="module" src="../../../assets/js/assets/ts/hello.js"></script>
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