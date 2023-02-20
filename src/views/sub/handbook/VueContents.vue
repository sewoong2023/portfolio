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
            <router-link to="/vue" title="Vue" class="active">Vue</router-link>
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
          <h2>Handbook</h2>
          <h3>Vue.js</h3>
        </article>
        <article id="contentArea">
          <!-- 참고문헌 및 참조-->
          <article class="references">
            <dl>
              <dt>참고</dt>
              <dd>일부 "소스보기"에서 {{}} 이 빠졌있으니 개발자도구 참조(제목에 표시)</dd>
            </dl>
            <dl>
              <dt>참고강의</dt>
              <dd><i>캡틴판교, ⎾Vue.js 시작하기⏌, 인프런</i></dd>
            </dl>
            <dl>
              <dt>참고문헌</dt>
              <dd>
                <i>고승원, ⎾Vue.js 프로젝트 투입 1주일 전⏌, 비제이퍼블릭</i>
              </dd>
              <dd>
                <i>알렉스 키디아키디스, 쉽고 빠르게 배우는 Vue.js2 프로그래밍, 위키북스 </i>
              </dd>
            </dl>
          </article>
          <article>
            <h3>인스턴스</h3>
            <p class="paragraph">인스턴스는 뷰로 개발할 때 필수로 생성해야 하는 코드</p>
            <article>
              <h4>인스턴스 생성</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">new</span>&nbsp;Vue();</div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <h4>인스턴스 확인</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">var</span>&nbsp;vm&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vue();</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">console</span>.log(vm);</div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <h4>인스턴스 옵션 속성</h4>
              <table class="default-table-view">
                <caption class="sr-only">인스턴스 옵션 속성</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">el</th>
                    <td>인스턴스가 그려지는 화면의 시작점</td>
                  </tr>
                  <tr>
                    <th>template</th>
                    <td>화면에 표시할 요소</td>
                  </tr>
                  <tr>
                    <th>data</th>
                    <td>뷰의 반응성(Reactivity)가 반영된 데이터 속성</td>
                  </tr>
                  <tr>
                    <th>methods</th>
                    <td>화면의 동작과 이벤트 로직을 제어하는 메서드</td>
                  </tr>
                  <tr>
                    <th>created</th>
                    <td>뷰의 라이프 사이클과 관련된 속성</td>
                  </tr>
                  <tr>
                    <th>watch</th>
                    <td>data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성</td>
                  </tr>
                </tbody>
              </table>
            </article>
          </article>
          <article>
            <h3>컴포넌트</h3>
            <article>
              <h4>컴포넌트란!?</h4>
              <p class="paragraph">화면의 영역을 구분하여 개발할 수 있는 뷰의 기능, 컴포넌트 기반으로 화면을 개발하게 되면 <span class="bold">코드의 재사용성</span>이 올라가고 빠르게 화면을 제작할 수 있다.</p>
            </article>
            <article>
              <h4>컴포넌트 통신</h4>
              <p class="paragraph">
                뷰 컴포넌트는 각각 고유한 데이터 유효범위를 갖고 데이트를 주고 받기 위해서는 다음과 같은 규칙이 있다.
              </p>
              <ul>
                <li class="hyphen">props : 상위에서 하위로 데이터를 내려줌</li>
                <li class="hyphen">event : 하위에서 상위로 이벤트를 올려줌</li>
              </ul>
            </article>
            <article>
              <h4>Props &#123;&#125;</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">app-header</span>&nbsp;<span style="color:#a8ff58">v-bind:프롭스</span>&nbsp;<span style="color:#a8ff58">속성</span>&nbsp;<span style="color:#a8ff58">이름</span>&nbsp;<span style="color:#a8ff58"></span>=<span style="color:#ffd500">"상위컴포넌트의&nbsp;데이터&nbsp;이름"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <h5>예시</h5>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">app-header</span>&nbsp;<span style="color:#a8ff58">v-bind:propsdata</span>=<span style="color:#ffd500">"message"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#999999">//전역&nbsp;컴포넌트</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399">var</span>&nbsp;appHeader&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;template:&nbsp;<span style="color:#ffd500">'&lt;h1&gt;{{&nbsp;propsdata&nbsp;}}&lt;/h1&gt;'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;props:&nbsp;[<span style="color:#ffd500">'propsdata'</span>]</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;el:<span style="color:#ffd500">'#app'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;components:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd500">'app-header'</span>&nbsp;:&nbsp;appHeader</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;data:{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message:<span style="color:#ffd500">'hi'</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;})</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <h4>Event-emit</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">app-header</span>&nbsp;<span style="color:#a8ff58">v-on:하위</span>&nbsp;<span style="color:#a8ff58">컴포넌트에서</span>&nbsp;<span style="color:#a8ff58">발생한</span>&nbsp;<span style="color:#a8ff58">이벤트</span>&nbsp;<span style="color:#a8ff58">이름</span>=<span style="color:#ffd500">"상위&nbsp;컴포넌트&nbsp;메소드&nbsp;이름"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <h5>예시</h5>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">app-header</span>&nbsp;<span style="color:#a8ff58">v-on:pass</span>=<span style="color:#ffd500">"logText"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399">var</span>&nbsp;appHeader&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;template:&nbsp;<span style="color:#ffd500">'&lt;button&nbsp;v-on:click="passEvent"&gt;click&nbsp;me&lt;/button&gt;'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;methods:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;passEvent:&nbsp;<span style="color:#ff3399">function</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.$emit(<span style="color:#ffd500">'pass'</span>);&nbsp;&nbsp;&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;el&nbsp;:&nbsp;<span style="color:#ffd500">'#app'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;components:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd500">'app-header'</span>&nbsp;:&nbsp;appHeader</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;methods:{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logText:&nbsp;<span style="color:#ff3399">function</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">console</span>.log(<span style="color:#ffd500">'hi'</span>);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;});</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <h4>같은 레벨에서의 컴포넌트 통신 방법</h4>
            </article>
          </article>
          <article>
            <h3>데이터 바인딩</h3>
            <article>
              <h4>데이터 바인딩의 종류</h4>
              <table class="default-table-view">
                <caption class="sr-only">데이터 바인딩</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">v-model</th>
                    <td>"INPUT"에 입력된 텍스트 값을 동적으로 연결</td>
                  </tr>
                  <tr>
                    <th scope="row">v-html</th>
                    <td>텍스트 값을 동적으로 Vue의 인스턴스에 매핑</td>
                  </tr>
                </tbody>
              </table>
            </article>
            <article>
              <h4>문자열 데이터 바인딩 &#123;&#125;</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#ffd500">"World"</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <p>Hello {{ title }}</p>
            </article>
            <article>
              <h4>HTML 데이터 바인딩</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span>&nbsp;<span style="color:#a8ff58">v-html</span>=<span style="color:#ffd500">"htmlString"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
                <p v-html="htmlString"></p>
            </article>
            <article>
              <h4>Form 입력 데이터 바인딩</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-style"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"valueModel"</span><span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <ul class="input-style">
                <li><input type="text" v-model="valueModel"/></li>
              </ul>
            </article>
            <article>
              <h4>Textarea</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">textarea</span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"message"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">textarea</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div>
                <textarea v-model="message"></textarea>
              </div>
            </article>
            <article>
              <h4>Select</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"test"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>지역번호<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">select</span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"city"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"02"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>서울<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"21"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>부산<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"064"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제주<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">select</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div> 
              </div>
              <label for="test" class="hide">지역번호</label>
              <select v-model="city" @change="changeSelect">
                <option value="02">서울</option>
                <option value="21">부산</option>
                <option value="064">제주</option>
              </select>
            </article>
            <article>
              <h4>체크박스 &#123;&#125;</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"check-list"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"checkbox"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"checked"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">true-value</span>=<span style="color:#ffd500">"동의&nbsp;합니다."</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">false-value</span>=<span style="color:#ffd500">"동의하지&nbsp;않습니다."</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span>{{&nbsp;checked&nbsp;}}<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <ul class="check-list">
                <li>
                  <input type="checkbox" v-model="checked" true-value="동의 합니다." false-value="동의하지 않습니다.">
                  <label>{{ checked }}</label>
                </li>
              </ul>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"check-list"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"checkbox"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"multiChecked"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">value</span>=ㅌㅌㅌㅌㅌ<span style="color:#ffd500">"서울"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"seoul"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"seoul"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>서울<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"checkbox"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"multiChecked"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"부산"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"busan"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"busan"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>부산<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"checkbox"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"multiChecked"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"제주"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"jeju"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"jeju"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제주<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">{{&nbsp;multiChecked&nbsp;}}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <ul class="check-list">
                <li>
                  <input type="checkbox" v-model="multiChecked" value="서울" id="seoul">
                  <label for="seoul">서울</label>
                </li>
                <li>
                  <input type="checkbox" v-model="multiChecked" value="부산" id="busan">
                  <label for="busan">부산</label>
                </li>
                <li>
                  <input type="checkbox" v-model="multiChecked" value="제주" id="jeju">
                  <label for="jeju">제주</label>
                </li>
              </ul>
              <div>
              {{ multiChecked }}
              </div>
            </article>
            <article>
              <h4>Radio</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"radio-list"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"radio"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-bind:value</span>=<span style="color:#ffd500">"radioValue1"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"picked"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"seoul-radio"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"seoul-radio"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>서울<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"radio"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-bind:value</span>=<span style="color:#ffd500">"radioValue2"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"picked"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"busan-radio"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"busan-radio"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>부산<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"radio"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-bind:value</span>=<span style="color:#ffd500">"radioValue3"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"picked"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"jeju-radio"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"jeju-radio"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제주<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span>선택한&nbsp;지역&nbsp;:&nbsp;{{&nbsp;picked&nbsp;}}<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <ul class="radio-list">
                <li>
                  <input type="radio" v-bind:value="radioValue1" v-model="picked" id="seoul-radio" checked>
                  <label for="seoul-radio">서울</label>
                </li>
                <li>
                  <input type="radio" v-bind:value="radioValue2" v-model="picked" id="busan-radio">
                  <label for="busan-radio">부산</label>
                </li>
                <li>
                  <input type="radio" v-bind:value="radioValue3" v-model="picked" id="jeju-radio">
                  <label for="jeju-radio">제주</label>
                </li>
              </ul>
              <p>선택한 지역 : {{ picked }}</p>
            </article>
            <article>
              <h4>Button 객체의 disabled</h4>
              <p class="paragraph">
                  버튼에 대항 "disabled" 속성은 다음과 같은 경우 적용하는 것이 필요합니다. 조회화면에서 조회 조건 중 필수 입력 조건이 모두 입력이 되었을 때 버튼을 활성화합니다. 그리고 권한이 있는 사용자에게만 허용되는 버튼에 대해서 활성화 합니다.
              </p>
              <i>고승원, ⎾Vue.js 프로젝트 투입 1주일 전⏌, 비제이퍼블릭, p106</i>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-style"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"textValue"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-bind:disabled</span>=<span style="color:#ffd500">"textValue==''"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>Ckick<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="input-style">
                <input type="text" v-model="textValue" />
                <button type="button" v-bind:disabled="textValue==''">Ckick</button>
              </div>
            </article>
            <article>
              <h4>Backgroud  이미지 안나올 때</h4>
              <p class="paragraph">
                정확한 이유는 모르나 경로쪽을 수정 하면 됩니다.
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">background:&nbsp;url</span>(<span style="color:#a8ff58">'~@/assets/images/bg/bg.png'</span>);</div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <h4>v-bind:class</h4>
              <p class="paragraph">
                클래스 ON, OFF 할때 사용하며 "v-bind:class='{클래스명 : 데이터명}'" 혹은 ":class='{클래스명 : 데이터명}'"로 선언할 수 있다.
              </p>
              <div class="box-area">

              </div>
              <button @click="classTest">Class Btn</button>
              <div :class="{on : isClass}" class="class-test">
                클래스 "on"이 추가 되었습니다.
              </div>
            </article>
          </article>
          <article>
            <h3>리스트 랜더링</h3>
            <article>
              <h4>v-for</h4>
              <table class="default-table">
                <caption class="sr-only">리스트 랜더링</caption>
                <colgroup>
                  <col style="width: 70px;"/>
                  <col style="width: 75%;" />
                  <col style="width: 10%;" />
                  <col style="width: 10%;" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제품명</th>
                    <th scope="col">가격</th>
                    <th scope="col">카테고리</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="i" v-for="(product, i) in productList">
                    <td scope="row">{{ product.product_num }}</td>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.product_price }}</td>
                    <td>{{ product.product_category }}</td>
                  </tr>
                </tbody>
              </table>
            </article>
          </article>
          <article>
            <h3>Vue 디렉티브</h3>
            <p class="paragraph">
              v-if 와 v-show를 사용할 때는 해당 HTML 블록이 화면내에서 자주 Toggle이 일어난다면 v-show를 사용하고 빈도가 작다면 v-if를 사용
            </p>
            <article>
              <h4>v-if</h4>
              <p class="paragraph">
                v-if가 지정된 엘리먼트는 DOM이 유지되지 않는다. 여러개의 엘리먼트를 한번에 토글해야 하는 경우에 사용
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">table</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"default-table-view"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">caption</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"sr-only"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>v-if&nbsp;설명<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">caption</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;20%;"</span><span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;80%;"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tbody</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"row"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>주소<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-style"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">v-if</span>=<span style="color:#ffd500">"inputAddress&nbsp;===&nbsp;false"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;경기도&nbsp;하남시&nbsp;미사강변대로&nbsp;270</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">v-else</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-style"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">placeholder</span>=<span style="color:#ffd500">"우편번호"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"place-hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">placeholder</span>=<span style="color:#ffd500">"주소"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"place-hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">placeholder</span>=<span style="color:#ffd500">"상세주소"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"place-hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">v-if</span>=<span style="color:#ffd500">"addressBtn&nbsp;===&nbsp;false"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"table-in-btn"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">@click</span>=<span style="color:#ffd500">"changeAddress"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>수정<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">v-else</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"table-in-btn"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">@click</span>=<span style="color:#ffd500">"updateAddress"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>수정<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"table-in-btn&nbsp;border"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">@click</span>=<span style="color:#ffd500">"cancleAddress"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>취소<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tbody</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">table</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inputAddress&nbsp;&nbsp;:&nbsp;<span style="color:#c10aff">false</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;addressBtn&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#c10aff">false</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;methods:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;changeAddress(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.inputAddress&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">!</span><span style="color:#4be6fa">this</span>.inputAddress</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.addressBtn&nbsp;&nbsp;&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">!</span><span style="color:#4be6fa">this</span>.addressBtn</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;updateAddress(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.inputAddress&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">!</span><span style="color:#4be6fa">this</span>.inputAddress</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.addressBtn&nbsp;&nbsp;&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">!</span><span style="color:#4be6fa">this</span>.addressBtn</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;cancleAddress(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.inputAddress&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">!</span><span style="color:#4be6fa">this</span>.inputAddress</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.addressBtn&nbsp;&nbsp;&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">!</span><span style="color:#4be6fa">this</span>.addressBtn</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <table class="default-table-view">
                <caption class="sr-only">v-if 설명</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">주소</th>
                    <td>
                      <ul class="input-style">
                        <li>
                          <div v-if="inputAddress === false">
                            경기도 하남시 미사강변대로 270
                          </div>
                          <div v-else>
                            <ul class="input-style">
                              <li>
                                <input type="text" placeholder="우편번호" class="place-hide">
                              </li>
                              <li>
                                <input type="text" placeholder="주소" class="place-hide">
                              </li>
                              <li>
                                <input type="text" placeholder="상세주소" class="place-hide">
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div v-if="addressBtn === false">
                            <button type="button" class="table-in-btn" @click="changeAddress">수정</button>
                          </div>
                          <div v-else>
                            <button type="button" class="table-in-btn" @click="updateAddress">수정</button>
                            <button type="button" class="table-in-btn border" @click="cancleAddress">취소</button>
                          </div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </article>
            <article>
              <h4>v-show</h4>
              <p class="paragraph">
                v-show가 지정된 엘리먼트는 항상 렌더링되어 DOM에 유지됩니다. v-show는 단순히 엘리먼트의 display CSS 속성을 토글하는 역할을 합니다.
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">textarea</span>&nbsp;<span style="color:#a8ff58">name</span>=<span style="color:#ffd500">"directive-if"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">""</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">cols</span>=<span style="color:#ffd500">"30"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">rows</span>=<span style="color:#ffd500">"10"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"directiveIf"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">textarea</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">h5</span>&nbsp;<span style="color:#a8ff58">v-show</span>=<span style="color:#ffd500">"!directiveIf"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">span</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"orange&nbsp;asterisk"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>내용을&nbsp;입력&nbsp;해&nbsp;주세요.<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">span</span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">h5</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">v-show</span>=<span style="color:#ffd500">"directiveIf"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"directive"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>sand<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;directiveIf&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#ffd500">''</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <textarea name="directive-if" id="" cols="30" rows="10" v-model="directiveIf"></textarea>
              <h5 v-show="!directiveIf"><span class="orange asterisk">내용을 입력 해 주세요.</span></h5>
              <button v-show="directiveIf" type="button" class="directive">sand</button>
            </article>
          </article>
          <article>
            <h3>이벤트 처리(v-on)</h3>
            <article>
              <h4>하위 요소에서 상위요소로</h4>
              <div class="box-area">
                <h5>하위요소 HTML</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">template</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">v-show</span>=<span style="color:#ffd500">"showModal"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#999999">&lt;!--&nbsp;컨텐츠&nbsp;부분&nbsp;--&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">template</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <h5>하위요소 Script</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showModal&nbsp;:&nbsp;<span style="color:#c10aff">false</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;methods:{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;popupClose(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#999999">//&nbsp;this.$emit('상위요소&nbsp;커스텀명')</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.$emit(<span style="color:#ffd500">'closePopup'</span>)</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <h5>상위요소 HTML</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">!</span><span style="color:#aaffaa"></span><span style="color:#ff3399">-</span><span style="color:#aaffaa"></span><span style="color:#ff3399">-</span>&nbsp;popup&nbsp;area&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">-</span><span style="color:#aaffaa"></span><span style="color:#ff3399">-</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>pop<span style="color:#aaffaa"></span><span style="color:#ff3399">-</span>up&nbsp;v<span style="color:#aaffaa"></span><span style="color:#ff3399">-</span>show<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#ffd500">"showModal"</span>&nbsp;id<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#ffd500">"popupEx"</span>&nbsp;v<span style="color:#aaffaa"></span><span style="color:#ff3399">-</span>on:closePopup<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#ffd500">"close"</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>template&nbsp;#info<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;이벤트&nbsp;emit</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>template<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>template&nbsp;#<span style="color:#4be6fa">content</span><span style="color:#ff3399">-</span>inner<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;이해하면&nbsp;쉬워요.</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>template<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>pop<span style="color:#aaffaa"></span><span style="color:#ff3399">-</span>up<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <h5>상위 Script</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showModal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#c10aff">false</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;methods:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">close</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.showModal&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#c10aff">false</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="guide">
                <article class="btn-list">
                  <button type="button" class="btn" @click="registrationBtn">확인</button>
                  <button type="button" class="btn-border">취소</button>
                </article>
              </div>
            </article>
            <article>
              <h4>클릭 이벤트(v-on:click) &#123;&#125;</h4>
              <p class="paragraph">
                클릭 이벤트를 통해 지정된 파라미터를 지정하는 방법 (함수 호출시 파라밐터를 설정)
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"ml0"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">@click</span>=<span style="color:#ffd500">"setCounter(7)"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>set<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span>The&nbsp;counter&nbsp;is&nbsp;{{&nbsp;counter&nbsp;}}<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="explanation">
                <button type="button" class="ml0" @click="setCounter(7)">set</button>
                <p>The counter is {{ counter }}</p>
              </div>
            </article>
            <article>
              <h4>체인지 이벤트(v-on:change)</h4>
              <p class="paragraph">
                Change 이벤트가 가장 많이 사용되는 HTML 태그는 select 이다. 사용자가 select에서 option을 바꿀 때 마다 Change 이벤트가 발생
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">select</span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"selectedValue"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">@change</span>=<span style="color:#ffd500">"changeSelect2"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"서울"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>서울<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"부산"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>부산<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"제주"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제주<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">select</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selectedValue&nbsp;:&nbsp;<span style="color:#ffd500">""</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;methods:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;changeSelect2(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">alert</span>(<span style="color:#4be6fa">this</span>.selectedValue);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <select v-model="selectedValue" @change="changeSelect2">
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="제주">제주</option>
              </select>
              <p class="paragraph">
                다음은 <span class="bold">input[type="file"]</span> 커스텀에 사용한 예입니다.
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"file-custom"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"upload-name"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>{{&nbsp;fileName &nbsp;}}<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"file"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"file"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">@change</span>=<span style="color:#ffd500">"fileSelect"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"file"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>파일선택<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#ffd500">'파일명'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;methods:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;fileSelect(e){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.firstName&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;e.target.files[<span style="color:#c10aff">0</span>].<span style="color:#4be6fa">name</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="file-custom">
                <p class="upload-name">{{ fileName }}</p>
                <input type="file" id="file" @change="fileSelect" />
                <label for="file">파일선택</label>
              </div>
            </article>
            <article>
              <h4>엔터 이벤트 (v-on:keyup.enter=""?)</h4>
              <p class="paragraph">
                키보드 enter키를 이용하여 클릭과 같은 이벤트 발생
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"inputBox&nbsp;shadow"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"newTodoItem"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-on:keyup.enter</span>=<span style="color:#ffd500">"addTodo"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">span</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"addContainer"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-on:click</span>=<span style="color:#ffd500">"addTodo"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">i</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"fas&nbsp;fa-plus&nbsp;addBtn"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">i</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">span</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div><div style="line-height:130%">16</div><div style="line-height:130%">17</div><div style="line-height:130%">18</div><div style="line-height:130%">19</div><div style="line-height:130%">20</div><div style="line-height:130%">21</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data:&nbsp;<span style="color:#ff3399">function</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newTodoItem&nbsp;:&nbsp;<span style="color:#ffd500">""</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;methods:{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;addTodo:&nbsp;<span style="color:#ff3399">function</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">console</span>.log(<span style="color:#4be6fa">this</span>.newTodoItem);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#999999">//localㄴtorage&nbsp;안에&nbsp;저장하는&nbsp;로직</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localStorage.setItem(<span style="color:#4be6fa">this</span>.newTodoItem,&nbsp;<span style="color:#4be6fa">this</span>.newTodoItem);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.clearInput();</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;clearInput:&nbsp;<span style="color:#ff3399">function</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.newTodoItem&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ffd500">''</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="inputBox shadow">
                <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
                <span class="addContainer" v-on:click="addTodo">
                  <i class="fas fa-plus addBtn"></i>
                </span>
              </div>
            </article>
          </article>
          <article>
            <h3>Computed와 Watch</h3>
            <p class="paragraph">
              computed와 watch는 둘 다 Vue 인스턴스 내의 정의된 데이터 값에 변경이 일어나는지를 감시하고, 변경될 때마다 정의된 함수가 실행, 데이터의 값이 변경이 되었는지를 계속 감시한다는 측면에서는 매우 비슷해 보이지만 사용되는 용도에는 차이가 있음
            </p>
            <article>
              <h4>computed</h4>
              <p class="paragraph">
                Computed는 Vue 인스턴스 내에 정의된 데이터 값과 연관된 또 하나의 데이터를 정의해서 사용할 수 있도록 함
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%">script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;firstName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#ffd500">'Se&nbsp;Woong'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#ffd500">'byeon'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;computed:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;fullName(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>&nbsp;<span style="color:#4be6fa">this</span>.firstName&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">+</span>&nbsp;<span style="color:#ffd500">'&nbsp;'</span>&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">+</span>&nbsp;<span style="color:#4be6fa">this</span>.lastName;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="explanation">
                Full Name : {{ fullName }}
              </div>
            </article>
            <article>
              <h4>watch</h4>
              <p class="paragraph">
                watch는 데이터 변경이 일어나기 전까지는 실행이 되지 않음
              </p>
              <div class="box-area">

              </div>
              <div class="explanation">
                Full Name : {{ watchfullName }}
              </div>
            </article>
          </article>
          <article>
            <h3>Vue Router</h3>
            <article>
              <h4>Router 설치</h4>
              <p class="paragraph">
                터미널에 "<span class="bold">npm i vue-router --save</span>" 명령어 입력
              </p>
              <p class="paragraph">
                터미널에 "<span class="bold">npm i vue-router@3.5.3</span>" 명령어 입력 (22년 변경됨)
              </p>
              <div class="box-area">
                
              </div>
            </article>
            <article>
              <h4>Router.js 표기법</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%">{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;path&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span style="color:#ffd500">'/food2022'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;component&nbsp;&nbsp;&nbsp;:&nbsp;Food2022,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;meta&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;category&nbsp;&nbsp;:&nbsp;[<span style="color:#ffd500">"Photo"</span>,&nbsp;<span style="color:#ffd500">"food"</span>]</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">},</div></div></td></tr></table></div>
              </div>
            </article>
            <article>
              <table class="default-table-view">
                <caption class="sr-only">라우터 설명</caption>
                <colgroup>
                  <col style="width: 20%;"/>
                  <col style="width: 80%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">routers:[{}]</th>
                    <td>페이지의 라우팅 정보(배열안에 객체 형태로)</td>
                  </tr>
                  <tr>
                    <th>path</th>
                    <td>페이지의 URL의 이름</td>
                  </tr>
                  <tr>
                    <th>component</th>
                    <td>해당 url에서 표시 될 컴포넌트</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </article>
            <article>
              <h4>페이지 이동</h4>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">this</span>.$router.push(<span style="color:#ffd500">'/'</span>);</div></div></td></tr></table></div>
              </div>
              <div class="input-style">
                <button type="button" @click="pageMove">페이지 이동</button>
              </div>
            </article>
          </article>
          <article>
            <h3>EventBus</h3>
            <article>
              <h4>EventBus 란!?</h4>
              <p class="paragraph">
                컴포넌트간에 데이터를 주고받기 위한 방법으로써 변수를 전역으로 사용 할 수 있고 간편한 구조로 되어 있어 중소규모의 프로젝트에서 많이 사용(현 사이트 카테고리 적용)
              </p>
            </article>
            <article>
              <h4>EventBus 사용방법</h4>
              <div class="box-area">
                <h5>event-bus.js</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;Vue&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">'vue'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">const</span>&nbsp;EventBus&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vue();</div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <h5>이벤트 발행</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;{&nbsp;EventBus&nbsp;}&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">'../../../event-bus'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;mounted(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#999999">//&nbsp;이벤트&nbsp;발행</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">let</span>&nbsp;category&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#4be6fa">this</span>.$route.meta.category;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;EventBus.$emit(<span style="color:#ffd500">'emitCategory'</span>,&nbsp;category);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <h5>router.js</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">const</span>&nbsp;router&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;VueRouter({</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;mode:&nbsp;<span style="color:#ffd500">'history'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;routes:&nbsp;[</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path:<span style="color:#ffd500">'/vue'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component:VueContents,</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meta:&nbsp;{&nbsp;category:&nbsp;[<span style="color:#ffd500">"Handbook"</span>,<span style="color:#ffd500">"vue.js"</span>]&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;]</div><div style="padding:0 6px; white-space:pre; line-height:130%">});</div></div></td></tr></table></div>
              </div>
            </article>
          </article>
          <article>
            <h3>Axios</h3>
            <article>
              <h4>Axios</h4>
              <p class="paragraph">
                axios로 받을 json파일은 <span class="bold">root > public </span> 폴더 내에 위치
              </p>
              <div class="box-area">
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;axios&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">'axios'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;data(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sourceView:&nbsp;[],</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;mounted(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;axios</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;.get(<span style="color:#ffd500">"./codetest.json"</span>)</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#999999">//.get("https://jsonplaceholder.typicode.com/users")</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;.then(response&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span>&nbsp;{<span style="color:#4be6fa">this</span>.sourceView&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;response.data;})</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></div></td></tr></table></div>
              </div>
            </article>
          </article>
          <article>
            <h3>Vuex</h3>
            <article>
              <h4>Vuex 란?</h4>
              <p class="paragraph">
                복잡한 애플리케이션에서 컴포넌트 수가 많아지면 컴포넌트 간의 데이터 전달이 어려워집니다. Vuex는 Vue.js 애플리케이션을 위한 상태관리 패턴+ 라이브러리 입니다. 모든 컴포넌트에 대한 중앙집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있습니다.
              </p>
              <p class="paragraph">
                Vuex를 이용하지 않는다면 컴포넌트 간에 데이터를 주고받는 것은 방법이 있지만 대규모 프로젝트가 될수록 매우 복잡해집니다. 데이터를 store에 저장하고, 프로젝트 전체에서 사용할 수 있도록 해주는 것이 Vuex 입니다.
              </p>
              <p><i>고승원, ⎾Vue.js 프로젝트 투입 1주일 전⏌, 비제이퍼블릭 p204</i></p>
            </article>
            <article>
              <h4>State</h4>
              <p class="paragraph">
                "state"는 프로젝트 전체에서 공통으로 사용할 변수를 정의하는 곳으로 변수를 정의함으로써 모든 컴포넌트에서 사용이 가능합니다.
              </p>
              <p class="paragraph">
                state에 정의된 변수는 Vue컴포넌트에서 <span class="bold">computed</span> 속성을 이용해서 그 변경사항을 항상 추적할 수 있습니다.
              </p> 
              <div class="box-area">
                <h5>Store.js</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;Vue&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">"vue"</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;Vuex&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">'vuex'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">Vue.use(Vuex);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">const</span>&nbsp;store&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vuex.Store({</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;state:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;counter:&nbsp;<span style="color:#c10aff">0</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">});</div></div></td></tr></table></div>
              </div>
              <div class="box-area">
                <h5>Vue file</h5>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%">computed:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;count(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>&nbsp;<span style="color:#4be6fa">this</span>.$store.state.count;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div></td></tr></table></div>
              </div>
              <div class="explanation">
                <p>Count : {{ $store.state.counter }}</p>
                <div class="btn-list">
                  <button type="button" class="table-in-btn" @click="addCounter">+</button>
                  <button type="button" class="table-in-btn border" @click="subCounter">-</button>
                </div>
              </div>
            </article>
            <article>
              <h4>Getters</h4>
              <p class="paragraph">
              </p>
            </article>
            <article>
              <h4>Mutations</h4>
              <p class="paragraph">
                mutations은 state을 변경시키는 역할을 합니다. Mutations는 비동기 처리가 아니라 동기 처리를 통해 state에 정의된 변수의 변경사항을 추적할 수 있게 해줍니다.
              </p>
            </article>
            <article>
              <h4>Actions</h4>
              <p class="paragraph">
              </p>
            </article>
          </article>
          <article>
            <h3>Require</h3>
            <div class="paragraph">
              "element"의 속성을 동적으로 처리 할때 사용, 일반적으로 HTML 태그들의 속성을 바인딩 할 경우가 생기는데 필자같은 경우 img 태그의 src 속성을 바인딩 할 때 사용
            </div>
            <article>
              <h4>Require 사용 예시</h4>
              <div class="box-area">

              </div>
              <div class="explanation">
                <img :src="imgsrc" width="300px" alt="require 사용예시">
              </div>
            </article>
          </article>
          <article>
            <h3>활용</h3>
            <article>
              <h4>Tab 메뉴</h4>
              <tab-menu>

              </tab-menu>
            </article>
            <article>
              <h4>썸네일 생성</h4>
              <pre-view>

              </pre-view>
            </article>
          </article>
          <article>
            <h3>프로젝트 빌드하기</h3>
            <p class="paragraph">

            </p>
            <article>
              <h4>프로젝트 빌드하기</h4>
            </article>
          </article>
        </article>
      </section>
      <!-- popup area -->
      <pop-up v-show="showModal" id="popupEx" v-on:closePopup="close">
        <template #info>
          이벤트 emit
        </template>
        <template #content-inner>
          이해하면 쉬워요.
        </template>
      </pop-up>
    </section>
  </main>
</template>

<script>
import { EventBus } from '../../../event-bus';
import TabMenu      from '../../../components/layout/TabMenu.vue';
import PopUp        from '../../../components/popup/VueExample.vue';
import PreView      from '../../../components/layout/thumbnailAdd.vue';

export default {
  data(){
    return{
      title         : "World",
      htmlString    : "<span style='color:blue;'>HTML 데이터바인딩</span>",
      valueModel    : "홍길동",
      message       : "내용을 입력하세요.",
      city          : "064",
      checked       : "동의하지 않습니다.",
      multiChecked  : [],
      picked        : "",
      radioValue1   : '서울',
      radioValue2   : '부산',
      radioValue3   : '제주',
      textValue     : "",
      selectedValue : "",
      counter       : "",
      firstName     : 'Se Woong',
      lastName      : 'byeon',
      directiveIf   : '',
      imgsrc        : require(`@/assets/images/capture/2022/test01.jpeg`),
      inputAddress  : false,
      addressBtn    : false,
      fileName      : '파일명',
      propsdata     :'',
      watchfullName :'',
      newTodoItem   :'',
      isClass       : false,
      showModal     : false,
      productList   : [
        {
        "product_num"      : "1",
        "product_name"     : "기계식 키보드",
        "product_price"    : "25000",
        "product_category" : "노트북"
        },
        {
        "product_num"      : "2",
        "product_name"     : "무선마우스",
        "product_price"    : "10000",
        "product_category" : "노트북"
        },
        {
        "product_num"      : "3",
        "product_name"     : "아이패드",
        "product_price"    : "600000",
        "product_category" : "테블릿"
        },
        {
        "product_num"      : "4",
        "product_name"     : "무선충전기",
        "product_price"    : "20000",
        "product_category" : "악세사리"
        }
      ]
    }
  },

  components:{
    TabMenu,
    PreView,
    PopUp,
  },

  methods: {
    changeSelect(){
      alert(this.city);
    },

    addCounter(){
      this.$store.state.counter++;
    },

    subCounter(){
      this.$store.state.counter--;
    },

    changeSelect2(){
      alert(this.selectedValue);
    },

    setCounter(counter){
      this.counter = counter;
    },

    changeAddress(){
      this.inputAddress = !this.inputAddress
      this.addressBtn   = !this.addressBtn
    },

    updateAddress(){
      this.inputAddress = !this.inputAddress
      this.addressBtn   = !this.addressBtn
    },

    cancleAddress(){
      this.inputAddress = !this.inputAddress
      this.addressBtn   = !this.addressBtn
    },

    fileSelect(e){
      this.firstName = e.target.files[0].name;
    },

    addTodo: function(){
      console.log(this.newTodoItem);
      //localㄴtorage 안에 저장하는 로직
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },

    clearInput: function(){
      this.newTodoItem = '';
    },

pageMove(){
  this.$router.push('/');
},

    classTest(){
      this.isClass = !this.isClass;
    },

    registrationBtn(){
      this.showModal = true;
    },
    close(){
      this.showModal = false;
    }
  },

  mounted(){
    // 이벤트 발행
    let category = this.$route.meta.category;
    EventBus.$emit('emitCategory', category);
  },

  computed: {
    count(){
      return this.$store.state.count;
    },

    fullName(){
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    display: flex;
    background: white;
    width: 200px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input{
    border-style: none;
    border: 1px solid;
    font-size: .5rem;
    width: 100%;
    
    height: 50px;
  }

  .addContainer {
    position: relative;
    background: linear-gradient(to right, #6478FB, #B763FB);
    display: block;
    width: 100px;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>