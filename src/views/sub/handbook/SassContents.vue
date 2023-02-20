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
            <router-link to="/sass" title="SCSS" class="active">SCSS</router-link>
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
            <router-link to="/git" title="GitHub">Git</router-link>
          </li>
        </ul>
      </section>
      <section id="contents">
        <article id="titleArea">
          <!-- 대제목 & 중제목 -->
          <h2>Handbook</h2>
          <h3>SCSS</h3>
        </article>
        <article id="contentArea">
          <article class="references">
            <!-- 참고문헌 및 참조-->
          </article>
          <article>
            <!-- 중제목 -->
            <h3>SASS 초기셋팅</h3>
            <article>
              <!-- 소제목 -->
              <h4>css 편집기와 연결</h4>
              <!-- 출력 -->
              <ol class="num">
                <li>"<span class="bold">Window > Preferences</span>" 로 이동</li>
                <li>"<span class="bold">General > Editors > File Associations</span>"로 이동</li>
                <li>파일연결 창에서 오른쪽 상단의 "<span class="bold">add...</span>" 버튼을 클릭</li>
                <li>File Type에 "<span class="bold">*.scss</span>"를 입력한 다음 ok 버튼을 클릭</li>
                <li>*.scss 목록에서 File Associations 항목을 찾아서 선택</li>
                <li>*.scss 를 선택한 후 하단 창 Associated editors에서 "<span class="bold">Add</span>"버튼을 클릭</li>
                <li>상단에 internal editors 가 선택되어 있는지 확인한 다음 "<span class="bold">CSS Editor</span>" 를 찾아서 선택한 다음 ok버튼을 클릭 </li>
              </ol>
            </article>
            <article>
              <h4>.scss 파일 형식을 기본 CSS 편집기에 추가 </h4>
              <div class="box-area">
              </div>
              <ol class="num">
                <li>"<span class="bold">Window > Preferences</span>" 로 이동</li>
                <li>"<span class="bold">General > Content Types</span>"메뉴 클릭</li>
                <li>Content Type에서 "<span class="bold">Text</span>" 를 펼친 후 CSS를 선택</li>
                <li>CSS를 선택한 후 하단  "<span class="bold">File associations</span>"창에서 Add 버튼을 클릭</li>
                <li>Content type에 "<span class="bold">*.scss</span>"를 입력한 다음 ok를 클릭</li>
                <li>OK를 클릭하고 환경설정 창을 닫음</li>
              </ol>
            </article>
          </article>
          <article>
            <!-- 중제목 -->
            <h3>SASS 표기법</h3>
            <p class="paragraph">
             "HTML" 페이지와 마찬가지로 정형화가 목적
            </p>
            <article>
              <h4>속성및 태그</h4>
              <table class="default-table-view">
                <caption class="sr-only">SASS 속성 및 태그</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">가상선택자<span>(before / after)</span></th>
                    <td>
                      <ul>
                        <li>before(after)은 구분을 위해 "::" 두개 사용</li>
                        <li>&::before(after)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>font 속성</th>
                    <td>
                      <p> " : " 앞뒤로 여백</p>
                      <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">font&nbsp;</span><span style="color:#a8ff58">:&nbsp;</span><span style="color:#ff3399"></span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;size&nbsp;</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0.9375rem</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;weight</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;700</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                    </td>
                  </tr>
                  <tr>
                    <th>태그</th>
                    <td>
                      <p>태그와 태그 사이</p>
                      <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&amp;.slick-prev</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;left</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;45px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&amp;</span><span style="color:#ff3399">:</span><span style="color:#4be6fa"></span><span style="color:#ff3399">:</span><span style="color:#ff3399">before</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;content</span><span style="color:#ff3399">:</span><span style="color:#E083FF">"prev"</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;font&nbsp;</span><span style="color:#ff3399">:</span><span style="color:#ff3399">&nbsp;</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;1rem</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weight</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;500</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </article>
          </article>
          <article>
            <h3>내장함수</h3>
            <article>
              <h4>내장함수 종류</h4>
              <table class="default-table-view">
                <caption class="sr-only">내장함수 종류</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>unquite()</th>
                    <td>문자에서 따옴표를 제거</td>
                  </tr>
                  <tr>
                    <th>unitless()</th>
                    <td>"px"등 단위가 있는지 확인</td>
                  </tr>
                  <tr>
                    <th>percentage()</th>
                    <td>CSS의 데이터 형식을 백분율로 나타냄	</td>
                  </tr>
                </tbody>
              </table>
            </article>
          </article>
          <article>
            <h3>반복문</h3>
            <article>
              <h4>For 문</h4>
              <p class="paragraph">
                "image" 파일명이나 반복적인 box가 있을 경우 사용
              </p>
            </article>
            <article>
              <h4>
                응용(배터리)
                <span class="source" v-on:click="sourceBtn1">hHTML소스</span>
                <span class="source" v-on:click="sourceBtn2">CSS소스</span>
              </h4>
              <p class="paragraph">
                <span class="bold">data속성</span>과 내장함수인 <span class="bold">percentage</span>를 같이 사용
              </p>
              <div class="box-area">
                <section class="battery">
                  <article class="battery-icon">
                    <div class="graph" data-width="50%"></div>
                  </article>
                </section>
              </div>
            </article>
          </article>
        </article>
      </section>
    </section>
    <layer-popup title="배터리 HTML" :popup.sync="popup1">
      <template #info>
        {{ title1 }}
      </template>
      <template #close>
        {{ close }}
      </template>
      <template #content>
        <p v-html="code1"></p>
      </template>
    </layer-popup>
    <layer-popup title="배터리 CSS" :popup.sync="popup2">
      <template #info>
        {{ title2 }}
      </template>
      <template #close>
        {{ close }}
      </template>
      <template #content>
        <p v-html="code2"></p>
      </template>
    </layer-popup>
  </main>
</template>

<script>
import { EventBus } from '../../../event-bus';
import LayerPopup from '../../../components/popup/LayerPopup.vue';

export default {
  data(){
    return{
      popup1 : false,
      popup2 : false,
      title1 : '배터리 HTML',
      title2 : '배터리 CSS',
      close  : '닫기',
      code1  : '<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">section</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"battery"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">article</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"battery-icon"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"graph"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">data-width</span>=<span style="color:#ffd500">"50%"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">article</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">section</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>',
      code2  : '<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">.battery</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;.battery-icon</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;position</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;relative</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;padding</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;2px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;border</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;1px&nbsp;solid</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;background</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;white</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;width</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;30px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;20px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;box-sizing</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;border-box</span><span style="color:#ff3399">;</span><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;.graph</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;14px</span><span style="color:#ff3399">;</span><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@for&nbsp;$i&nbsp;from&nbsp;0&nbsp;through&nbsp;100</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;[data-width="#</span>{<span style="color:#E083FF">$i</span>}<span style="color:#ff3399">%"]</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;#33CF06</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;percentage($i&nbsp;/&nbsp;100)</span><span style="color:#ff3399">;</span><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@if(percentage($i&nbsp;/&nbsp;100)&nbsp;&lt;=&nbsp;50)</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;#FF0000</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;</span>[<span style="color:#a8ff58">data-width</span><span style="color:#ff3399">=</span><span style="color:#a8ff58">"0%"</span>]<span style="color:#ff3399"></span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;#cccccc</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;100%</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&amp;</span><span style="color:#a8ff58">::after</span><span style="color:#ff3399"></span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;""</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;absolute</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;3px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;-8px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;10px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;10px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;1px&nbsp;solid</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z-index</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;-1</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>'
    }
  },
  components :{
    LayerPopup
  },
  mounted(){
    let category = this.$route.meta.category;
    EventBus.$emit('emitCategory', category);
  },
  methods:{
    sourceBtn1(){
      this.popup1 = !this.popup1;
    },

    sourceBtn2(){
      this.popup2 = !this.popup2;
    }
  }
}
</script>

<style>

</style>