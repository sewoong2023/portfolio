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
            <router-link to="/Jquery" title="Java Script">JS</router-link>
          </li>
          <li>
            <router-link to="/ts" title="Type Script">TS</router-link>
          </li>
          <li>
            <router-link to="/git" title="GitHub" class="active">Git</router-link>
          </li>
        </ul>
      </section>
      <section id="contents">
        <article id="titleArea">
          <!-- 대제목 & 중제목 -->
          <h2>Handbook</h2>
          <h3>GitHub</h3>
        </article>
        <article id="contentArea">
          <!-- 참고문헌 및 참조-->
          <article class="references">
            <dl>
              <dd>[ Git ] 관련 가이드라인 제공</dd>
            </dl>
          </article>
          <article>
            <h3>How to use</h3>
            <article>
              <h4>Git & GitHub 환경설정</h4>
              <ol class="num">
                <li>
                  Git 설치여부 확인 : 명령 프롬프트 (혹은 VC 터미널)에서 "<span class="bold">git</span>" 입력 (만약 명령어 목록이 나오지 않으면 설치)
                </li>
                <li>
                  Git 초기화 : "<span class="bold">git init</span>" 명령어 입력
                </li>
                <li>
                  저장소 주소 : "<span class="bold">git remote add origin [ git주소 ]</span>"
                </li>
                <li>
                  push하기 : "<span class="bold">git push origin master</span>" 여기서 [master]는 브랜츠명
                </li>
              </ol>
            </article>
          </article>
          <article>
            <!-- 중제목 -->
            <h3>Error</h3>
            <article>
              <!-- 소제목 -->
              <h4>LF will be replaced by CRLF</h4>
              <!-- 소스 -->
              <table class="default-table-view">
                <caption class="sr-only">LF will be replaced by CRLF 에러</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">해결방법</th>
                    <td>
                      <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">git</span>&nbsp;<span style="color:#4be6fa">config</span>&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">-</span><span style="color:#0086b3"></span><span style="color:#ff3399">-</span>global&nbsp;core.autocrlf&nbsp;<span style="color:#c10aff">true</span></div></div></td></tr></table></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- 출력 -->
            </article>
            <article>
              <!-- 소제목 -->
              <h4>Vue-Cli-Service 에러 (외부 명령, 실행할 수 있는 프로그램 ...</h4>
              <!-- 소스 -->
              <table class="default-table-view">
                <caption class="sr-only">기본 테이블 (상세보기)</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">해결방법</th>
                    <td>
                      <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#0086b3"></span><span style="color:#ff3399">/</span><span style="color:#0086b3"></span><span style="color:#ff3399">/</span>&nbsp;<span style="color:#c10aff">1.</span>설치하기&nbsp;이전에&nbsp;기존&nbsp;vue<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>cli&nbsp;삭제</div><div style="padding:0 6px; white-space:pre; line-height:130%">npm&nbsp;uninstall&nbsp;vue<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>cli&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>g</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#0086b3"></span><span style="color:#ff3399">/</span><span style="color:#0086b3"></span><span style="color:#ff3399">/</span>&nbsp;<span style="color:#c10aff">2.</span>&nbsp;재설치</div><div style="padding:0 6px; white-space:pre; line-height:130%">npm&nbsp;install&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>g&nbsp;@vue<span style="color:#0086b3"></span><span style="color:#ff3399">/</span>cli</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#0086b3"></span><span style="color:#ff3399">/</span><span style="color:#0086b3"></span><span style="color:#ff3399">/</span>&nbsp;<span style="color:#c10aff">3.</span>&nbsp;문제&nbsp;발생시&nbsp;[node_modules&nbsp;삭제]</div><div style="padding:0 6px; white-space:pre; line-height:130%">npm&nbsp;uninstall&nbsp;node_modules</div></div></td></tr></table></div>
                    </td>
                  </tr>
                </tbody>
              </table>
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