<template>
  <main id="subPage">
    <section id="container">
      <section id="lnb">
        <h2>Handbook</h2>
        <ul>
          <li>
            <router-link to="/htmlcss" title="HTML" class="active">HTML</router-link>
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
            <router-link to="/git" title="GitHub">Git</router-link>
          </li>
        </ul>
      </section>
      <section id="contents">
        <article id="titleArea">
          <h2>Handbook</h2>
          <h3>HTML & CSS</h3>
        </article>
        <article id="contentArea">
          <article v-if="showContent" class="tab-component">
            <div id="tabs">
              <ul class="tab-menu">
                <li v-for="(tab, index) in tabs" :key="index" v-bind:class="{ active:currentTab === index }">
                  <a href="#" v-on:click="currentTab = index">{{ tab }}</a>
                </li>
              </ul>
              <div class="tab-content">
                <section v-show="currentTab == 0">
                  <!-- 참고문헌 및 참조-->
                  <article class="references">
                    <dl>
                      <dt>참고</dt>
                      <dd>Input 박스 : "placeholder" 기능이 필요할 경우 HTML로 작업, 기타의 경우 Vue로 작업</dd>
                    </dl>
                  </article>
                  <article>
                    <h3>HTML 가이드라인</h3>
                    <p class="paragraph">
                      HTML 가이드라인은 오류를 방지하고자 하는 것 보다 다른 사람이 코딩한 소스도 마치 내가 한것처럼 쉽게 접근할 수 있도록 정형화 시키는 거에 의미를 가짐
                    </p>
                    <article>
                      <h4>속성 및 태그</h4>
                      <div class="box-area">
                        <table class="default-table-view">
                          <caption class="sr-only">HTML 표기에 관한 설명</caption>
                          <colgroup>
                            <col style="width: 20%;"/>
                            <col style="width: 80%;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">ID 속성</th>
                              <td>반드시 두 단어를 사용하며 연결시 "<span class="bold">카멜케이스 기법</span>"으로 작업</td>
                            </tr>
                            <tr>
                              <th>CLASS 속성</th>
                              <td>한 단어 혹은 두단어를 사용하며 단어 연결시에는 "<span class="bold">하이픈(-)</span>"을 사용</td>
                            </tr>
                            <tr>
                              <th>&lt; br &gt; 태그</th>
                              <td>반응형에 취약하여 되도록이면 사용을 자제</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </article>
                    <article>
                      <h4>a태그와 버튼 사용</h4>
                      <table class="default-table-view">
                        <caption class="sr-only">a태그와 버튼 사용</caption>
                        <colgroup>
                          <col style="width: 20%;"/>
                          <col style="width: 80%;" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">&lt; a &gt;</th>
                            <td>
                              <ul>
                                <li>사용자가 검색 아이콘을 클릭했을 때 "<span class="bold">페이지가 이동해야 하는 경우</span>"에 사용</li>
                                <li>(특별한 이유가 없으면 "<span class="bold">title</span>요소를 추가하여 툴팁을 적용)</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>button</th>
                            <td>
                              <ul>
                                <li>사용자가 검색 아이콘을 클릭했을 때 "<span class="bold">페이지 이동없이 페이지에서 검색영역이 나타나는 경우</span>" 에 사용</li>
                                <li>(테그내에 반드시 <span class="bold">type="button"</span> 형식으로 작업)</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </article>
                  </article>
                  <article>
                    <h3>Bullet</h3>
                    <article>
                      <h4>paragraph</h4>
                      <p class="paragraph">[ 일반적인 문장을 작성할 때 사용 ]</p>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"paragraph"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>내용<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <p class="paragraph">내용</p>
                    </article>
                    <article>
                      <h4>Hyphen</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"hyphen"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>내용&nbsp;1<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"hyphen"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>내용&nbsp;2<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <ul>
                        <li class="hyphen">내용 1</li>
                        <li class="hyphen">내용 2</li>
                      </ul>
                    </article>
                    <article>
                      <h4>asterisk</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"asterisk"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>내용<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <p class="asterisk">내용</p>
                    </article>
                    <article>
                      <h4>asterisk-after</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"asterisk-after"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>내용<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <p class="asterisk-after">내용</p>
                    </article>
                    <article>
                      <h4>reference</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"reference"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>내용<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <p class="reference">내용</p>
                    </article>
                  </article>
                  <article>
                    <h3>Button</h3>
                    <article>
                      <h4>기본형</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">article</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"btn-list"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"btn"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>확인<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"btn-border"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>취소<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">article</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <article class="btn-list">
                        <button type="button" class="btn">확인</button>
                        <button type="button" class="btn-border">취소</button>
                      </article>
                    </article>
                    <article>
                      <h4>테이블 안에 버튼</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"button"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"table-in-btn"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>버튼<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <button type="button" class="table-in-btn">버튼</button>
                    </article>
                  </article>
                  <article>
                    <h3>Input</h3>
                    <article>
                      <h4>Input[type="text"]</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-style"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"sample"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>이름<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">placeholder</span>=<span style="color:#ffd500">"홍길동"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"place-hide"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"sample"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <ul class="input-style">
                        <li>
                          <label for="sample" class="hide">이름</label>
                          <input type="text" placeholder="홍길동" class="place-hide" id="sample">
                        </li>
                      </ul>
                    </article>
                    <article>
                      <h4>Input[type="password"]</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-style"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"sample"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>비밀번호<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"password"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">placeholder</span>=<span style="color:#ffd500">"비밀번호"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"place-hide"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"sample"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <ul class="input-style">
                        <li>
                          <label for="sample" class="hide">비밀번호</label>
                          <input type="password" placeholder="비밀번호" class="place-hide" id="sample">
                        </li>
                      </ul>
                    </article>
                    <article>
                      <h4>Input[type="radio"]</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-radio"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"title"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>스포츠<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"radio"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"baseball"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">name</span>=<span style="color:#ffd500">"sports"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"baseball"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">checked</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"baseball"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>야구<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"radio"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"baskball"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">name</span>=<span style="color:#ffd500">"sports"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"baskball"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"baskball"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>농구<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"radio"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"soccer"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">name</span>=<span style="color:#ffd500">"sports"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"soccer"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"soccer"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>축구<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <ul class="input-radio">
                        <li class="title">스포츠</li>
                        <li>
                          <input type="radio" id="baseball" name="sports" value="baseball" checked>
                          <label for="baseball" >야구</label>
                        </li>
                        <li>
                          <input type="radio" id="baskball" name="sports" value="baskball">
                          <label for="baskball">농구</label>
                        </li>
                        <li>
                          <input type="radio" id="soccer" name="sports" value="soccer">
                          <label for="soccer">축구</label>
                        </li>
                      </ul>
                    </article>
                    <article>
                      <h4>input[type="file"]</h4>
                      <div class="box-area">

                      </div>
                      <table class="default-table-view">
                        <caption class="sr-only">input[type="file"] 속성</caption>
                        <colgroup>
                          <col style="width: 20%;"/>
                          <col style="width: 80%;" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">accept</th>
                            <td>허용하는 파일 유형을 나타내는 하나 이상의 고유 파일 유형 지정자</td>
                          </tr>
                          <tr>
                            <th>capture</th>
                            <td>이미지 또는 비디오 데이터를 캡처할 때 사용 할 방법</td>
                          </tr>
                          <tr>
                            <th>files</th>
                            <td>선택한 파일을 나열</td>
                          </tr>
                          <tr>
                            <th>multiple</th>
                            <td>지정할 경우 사용자가 여러 개의 파일을 선택할 수 있음</td>
                          </tr>
                        </tbody>
                     </table>
                    </article>
                    
                    <article>
                      <h4>Select</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">label</span>&nbsp;<span style="color:#a8ff58">for</span>=<span style="color:#ffd500">"test"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>지역번호<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">label</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">select</span>&nbsp;<span style="color:#a8ff58">name</span>=<span style="color:#ffd500">"city"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"test"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"02"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">selected</span><span style="color:#f0f0f0">&gt;</span>서울<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"21"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>부산<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">option</span>&nbsp;<span style="color:#a8ff58">value</span>=<span style="color:#ffd500">"064"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제주도<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">option</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">select</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <label for="test" class="hide">지역번호</label>
                      <select name="city" id="test">
                        <option value="02" selected>서울</option>
                        <option value="21">부산</option>
                        <option value="064">제주도</option>
                      </select>
                    </article>
                    <article>
                      <h4>Textarea</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">textarea</span>&nbsp;<span style="color:#a8ff58">placeholder</span>=<span style="color:#ffd500">"내용을&nbsp;입력하세요"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"place-hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">textarea</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <textarea placeholder="내용을 입력하세요" class="place-hide"></textarea>
                    </article>
                  </article>
                  <article>
                    <h3>Image</h3>
                    <p class="paragraph">
                      개발영역과 퍼블리셔 영역을 구분을 짓기 위해 사용하며 이미지 태그를 사용시 페이지가 많다면 해당 페이지 찾는 시간이 더 걸리기 때문에 "<span class="bold">background</span>" 요소를 권장하며 background 요소는 alt 요소가 없어 화면 낭독기에서 인식을 못하는 점(웹 접근성)을 고려하여 "<span class="bold">대체 텍스트</span>"를 사용 
                    </p>
                    <article>
                      <h4>대체 텍스트</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"test-01"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">span</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>이미지&nbsp;추가&nbsp;방법<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">span</span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                    </article>
                    <article>
                      <h4>img 파일명</h4>
                      <div class="explanation">

                      </div>
                      <div class="box-area">

                      </div>
                    </article>
                  </article>
                  <article>
                    <h3>Image 태그</h3>
                    <p class="paragraph">
                      이미지 태그에 관한 속성 설명
                    </p>
                    <article>
                      <h4>object-fit</h4>
                      <table class="default-table-view">
                        <caption class="sr-only">object-fit 설명</caption>
                        <colgroup>
                          <col style="width: 20%;"/>
                          <col style="width: 80%;" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">fill</th>
                            <td>주어진 너비와 높이에 딱 맞도록 사이즈를 조절, 이미지 가로세로 비율 유 지되지 않음 (default)</td>
                          </tr>
                          <tr>
                            <th>contanin</th>
                            <td>
                              가로세로 비율을 유지한 채로 사이즈가 조절되지만, 이미지의 컨테이너 간의 비율이 맞지않는 경우엔 자리가 생김
                            </td>
                          </tr>
                          <tr>
                            <th>cover</th>
                            <td>가로세로 비율을 유지한 채로 사이즈가 조절되어 비율이 맞지 않더라도 이미지를 확대해 컨테이너를 완전히 채움</td>
                          </tr>
                          <tr>
                            <th>none</th>
                            <td>아무것도 하지않고 본래의 이미지 사이즈를 유지</td>
                          </tr>
                          <tr>
                            <th>scale-down</th>
                            <td>none 또는 contain 중에 더 적절한 방향으로 이미지 사이즈를 조절</td>
                          </tr>
                        </tbody>
                      </table>
                    </article>
                  </article>
                  <article>
                    <h3>background 태그</h3>
                    <p class="paragraph">
                      백그라운드 태그에 관한 속성 설명
                    </p>
                    <article>
                      <h4>background-attachment</h4>
                      <p class="paragraph mb10">
                        배경 이미지를 뷰포트 내에서 고정할지, 아니면 자신의 컨테이닝 블럭과 함께 스크롤 할지 지정
                      </p>
                      <table class="default-table-view">
                        <caption class="sr-only">background-attachment 설명</caption>
                        <colgroup>
                          <col style="width: 20%;"/>
                          <col style="width: 80%;" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">fixed</th>
                            <td>배경을 뷰포트에 고정, 요소에 스크롤이 존재해도 배경은 스크롤 되지 않음</td>
                          </tr>
                          <tr>
                            <th>local</th>
                            <td>
                              배경을 요소 콘텐츠에 고정, 요소에 스크롤이 존재하면 배경은 콘텐츠와 함께 스크롤 됨
                            </td>
                          </tr>
                          <tr>
                            <th>scroll</th>
                            <td>
                              <ul>
                                <li class="hyphen">배경을 요소 자체에 대해 고정, 요소에 스크롤이 존재해도 배경은 함께 스크롤 되지 않음</li>
                                <li class="hyphen">(즉 요소의 테두리에 배경 이미지를 부착한 것과 같은 효과)</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </article>
                    <article>
                      <h4>background-clip</h4>
                      <p class="paragraph mb10">
                        요소의 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할 지 지정
                      </p>
                      <table class="default-table-view">
                        <caption class="sr-only">background-clip 설명</caption>
                        <colgroup>
                          <col style="width: 20%;"/>
                          <col style="width: 80%;" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">border-box</th>
                            <td>배경이 테두리의 바?깥 경계까지 차지</td>
                          </tr>
                          <tr>
                            <th>padding-box</th>
                            <td>배경이 안쪽 여백의 바깥 경계까지 차지</td>
                          </tr>
                          <tr>
                            <th>content-box</th>
                            <td>배경을 콘텐츠 상자에 맞춤</td>
                          </tr>
                          <tr>
                            <th>text</th>
                            <td>배경을 전경 텍스트 위에만 그림</td>
                          </tr>
                        </tbody>
                      </table>
                    </article>
                  </article>
                  <article>
                    <h3>Table</h3>
                    <p>
                      테이블을 추가할 때 웹접근성을 고려하여 <span class="bold">&lt; caption &gt; </span> 태그를 반드시 추가
                    </p>
                    <article>
                      <h4>테이블 너비 고정</h4>
                      <div class="explanation">
                        table-layout: fixed;
                      </div>
                    </article>
                    <article>
                      <h4>기본 테이블 <span class="source" v-on:click="sourceBtn">소스보기</span></h4>
                      <div class="box-area">
                        <table class="default-table">
                          <caption class="sr-only">기본 테이블</caption>
                          <colgroup>
                            <col style="width: 70px;"/>
                            <col style="width: 75%;" />
                            <col style="width: 10%;" />
                            <col style="width: 10%;" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th scope="col">번호</th>
                              <th scope="col">제목</th>
                              <th scope="col">작성자</th>
                              <th scope="col">작성일</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row">1</td>
                              <td>제목</td>
                              <td>작성자</td>
                              <td>작성일</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </article>
                    <article>
                      <h4>기본 테이블 (상세보기)<span class="source" v-on:click="sourceBtn2">소스보기</span></h4>
                      <div class="box-area">
                        <table class="default-table-view">
                          <caption class="sr-only">기본 테이블 (상세보기)</caption>
                          <colgroup>
                            <col style="width: 20%;"/>
                            <col style="width: 80%;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">제목</th>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <th>제목</th>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <th>제목</th>
                              <td>내용</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </article>
                    <article>
                      <h4>body 스크롤 테이블<span class="source" v-on:click="sourceBtn3">소스보기</span></h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">table</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"default-table-scroll"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">caption</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"sr-only"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>body&nbsp;스크롤&nbsp;테이블<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">caption</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;20%"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">thead</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>번호<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제목<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>작성자<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>작성일<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>조회수<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">thead</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tbody</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"scroll"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>1<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>제목입니다,<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>홍길동<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>2022.06.14<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>100<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>2<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>제목입니다,<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>홍길동<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>2022.06.14<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>100<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>3<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>제목입니다,<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>홍길동<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>2022.06.14<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>100<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>4<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>제목입니다,<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>홍길동<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>2022.06.14<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>100<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>5<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>제목입니다,<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>홍길동<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>2022.06.14<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>100<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>6<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>제목입니다,<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>홍길동<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>2022.06.14<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>100<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tbody</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">table</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <div class="box-area">
                        <table class="default-table-scroll">
                          <caption class="sr-only">body 스크롤 테이블</caption>
                          <colgroup>
                            <col style="width: 20%">
                          </colgroup>
                          <thead>
                            <tr>
                              <th scope="col">번호</th>
                              <th scope="col">제목</th>
                              <th scope="col">작성자</th>
                              <th scope="col">작성일</th>
                              <th scope="col">조회수</th>
                            </tr>
                          </thead>
                          <tbody class="scroll">
                            <tr>
                              <td>1</td>
                              <td>제목입니다,</td>
                              <td>홍길동</td>
                              <td>2022.06.14</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>제목입니다,</td>
                              <td>홍길동</td>
                              <td>2022.06.14</td>
                              <td>100</td>
                            </tr>
                             <tr>
                              <td>3</td>
                              <td>제목입니다,</td>
                              <td>홍길동</td>
                              <td>2022.06.14</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>제목입니다,</td>
                              <td>홍길동</td>
                              <td>2022.06.14</td>
                              <td>100</td>
                            </tr>
                             <tr>
                              <td>5</td>
                              <td>제목입니다,</td>
                              <td>홍길동</td>
                              <td>2022.06.14</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>제목입니다,</td>
                              <td>홍길동</td>
                              <td>2022.06.14</td>
                              <td>100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </article>
                    <article>
                      <h4>IE에서 border 값 오류</h4>
                      <table class="default-table-view">
                        <caption class="sr-only">IE에서 border 값 오류 해결</caption>
                        <colgroup>
                          <col style="width: 20%;"/>
                          <col style="width: 80%;" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">해결</th>
                            <td>
                              <div class="box-area">
                                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">@media&nbsp;all&nbsp;and&nbsp;</span>(<span style="color:#a8ff58">-ms-high-contrast</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;none</span>)<span style="color:#ff3399"></span>,<span style="color:#ff3399">&nbsp;</span>(<span style="color:#a8ff58">-ms-high-contrast</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;active</span>)<span style="color:#ff3399"></span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;background-clip</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;padding-box</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </article>
                  </article>
                  <article>
                    <h3>애니메이션</h3>
                    <article>
                      <h4>도형 로딩 애니메이션</h4>
                      <div class="box-area">
                        <div class="loading">
                          <p></p>
                          <p></p>
                          <p></p>
                        </div>
                      </div>
                    </article>
                    <article>
                      <h4>아이콘 애니메이션</h4>
                      
                    </article>
                    <article>
                      <h4>Hide 관련 애니메이션</h4>
                      <section id="menuList">
                        <h2 class="title">하회마을 이미지</h2>
                        <article class="content">
                          <ul>
                            <li>Button 1</li>
                            <li>Button 2</li>
                          </ul>
                        </article>
                        <article class="footer">
                          <img src="../../../assets/images/capture/2021/travel/hahoe-village12.jpg" alt="image">
                        </article>
                      </section>
                    </article>
                  </article>
                  <article>
                    <h3>Effect</h3>
                    <article>
                      <h4>text-light</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">ul</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"input-style"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">li</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"text-light"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">placeholder</span>=<span style="color:#ffd500">"Your&nbsp;Name"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"place-hide"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">li</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">ul</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <ul class="input-style">
                        <li class="text-light">
                          <input type="text" placeholder="Your Name" class="place-hide">
                        </li>
                      </ul>
                    </article>
                    <article>
                      <h4>Tooltip</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"tooltip-icon"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">img</span>&nbsp;<span style="color:#a8ff58">src</span>=<span style="color:#ffd500">""</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">art</span>=<span style="color:#ffd500">"tootip"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">span</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;Lorem&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet&nbsp;consectetur,&nbsp;adipisicing&nbsp;elit.&nbsp;Voluptate&nbsp;consequatur&nbsp;officiis&nbsp;quos,&nbsp;ex&nbsp;nisi&nbsp;incidunt&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">span</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <div class="tooltip-icon">
                        <img src="../../../assets/images/capture/2021/travel/hahoe-village05.jpg" art="tootip">
                        <span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequatur officiis quos, ex nisi incidunt 
                        </span>
                      </div>
                    </article>
                    <article>
                      <h4>View Details</h4>
                      <section class="item-list">
                        <article class="item">
                          <img src="" alt="차후추가">
                          <div class="caption">
                            <h5>Title</h5>
                            <p>
                              Sold Out
                            </p>
                            <a href="" title="">View Details</a>
                          </div>
                        </article>
                        <article class="item">
                          <img src="" alt="차후추가">
                          <div class="caption">
                            <h5>Title</h5>
                            <p>
                              Sold Out
                            </p>
                            <a href="" title="">View Details</a>
                          </div>
                        </article>
                      </section>
                    </article>
                  </article> 
                </section>
                <section v-show="currentTab == 1">
                  <article>
                    <h3>CSS 가이드라인</h3>
                    <p class="paragraph">
                      HTML 가이드라인과 마찬가지로 오류를 방지하고자 하는 것 보다 다른 사람이 코딩한 소스도 마치 내가 한것처럼 쉽게 접근할 수 있도록 정형화 시키는 거에 의미를 가짐
                    </p>
                    <article>
                      <h4>한 화면에 꽉차게 작업</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">html</span>,<span style="color:#ff3399">&nbsp;body&nbsp;</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;margin</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;100%</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;overflow</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;hidden</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                      </div>
                    </article>
                    <article>
                      <h4>가운데 정렬방법</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">body</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;display</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;flex</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;justify-content</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;center</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;align-items</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;center</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;100vh</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                      </div>
                    </article>
                    <article>
                      <h4>input 기존 디자인 없애기</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">input</span>[<span style="color:#a8ff58">type</span><span style="color:#ff3399">=</span><span style="color:#a8ff58">"file"</span>]<span style="color:#ff3399"></span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;position</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;absolute</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;padding</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;width</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;border</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;overflow</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;hidden</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                      </div>
                    </article>
                    <article>
                      <h4>부모 opacity 무시</h4>
                      <p class="paragraph">
                        "background-color"를 rgba로 주게되면 원하는대로 나오게 된다.(부모요소와 자식요소 따로 작업)
                      </p>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">background-color</span><span style="color:#a8ff58">:&nbsp;rgba(0</span><span style="color:#ff3399"></span>,<span style="color:#ff3399">&nbsp;0</span>,<span style="color:#ff3399">&nbsp;0</span>,&nbsp;.5);</div></div></td></tr></table></div>
                      </div>
                    </article>
                  </article>
                  <article>
                    <h3>Media query</h3>
                    <article>
                      <h4>Media query 분기</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span><span style="color:#999999">/*&nbsp;핸드폰&nbsp;*/</span><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">@media&nbsp;</span>(<span style="color:#a8ff58">min-width</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;0</span>)<span style="color:#ff3399">&nbsp;and&nbsp;</span>(<span style="color:#a8ff58">max-width</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;767px</span>)<span style="color:#ff3399"></span>{<span style="color:#ff3399">&nbsp;&nbsp;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;</span><span style="color:#999999">/*&nbsp;Enter&nbsp;your&nbsp;style&nbsp;code&nbsp;*/</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span><span style="color:#999999">/*&nbsp;테블릿&nbsp;*/</span><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">@media&nbsp;</span>(<span style="color:#a8ff58">min-width</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;768px</span>)<span style="color:#ff3399">&nbsp;and&nbsp;</span>(<span style="color:#a8ff58">max-width</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;1024px</span>)<span style="color:#ff3399"></span>{<span style="color:#ff3399">&nbsp;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;</span><span style="color:#999999">/*&nbsp;Enter&nbsp;your&nbsp;style&nbsp;code&nbsp;*/</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                      </div>
                    </article>
                    <article>
                      <h4>ie 설정</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;</span><span style="color:#999999">/*&nbsp;IE10+&nbsp;*/</span><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">@media&nbsp;screen&nbsp;and&nbsp;</span>(<span style="color:#a8ff58">-ms-high-contrast</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;active</span>)<span style="color:#ff3399"></span>,<span style="color:#ff3399">&nbsp;</span>(<span style="color:#a8ff58">-ms-high-contrast</span><span style="color:#ff3399">:</span><span style="color:#a8ff58">&nbsp;none</span>)<span style="color:#ff3399">&nbsp;</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;</span><span style="color:#999999">/*&nbsp;Enter&nbsp;your&nbsp;style&nbsp;code&nbsp;*/</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                      </div>
                    </article>
                  </article>
                  <article>
                    <h3>선택자</h3>
                    <article>
                      <h4>선택자의 종류</h4>
                      <p class="paragraph">선택자는 종류가 많으나 여기서는 가끔 사용하는 선택자를 기재함</p>
                      <div class="box-area">
                        <table class="default-table-view">
                          <caption class="sr-only">선택자의 종류</caption>
                          <colgroup>
                            <col style="width: 20%;"/>
                            <col style="width: 80%;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">[id ^="sample"]</th>
                              <td>
                                <ul>
                                  <li>
                                    sample이라는 id명이 적혀있는 모든 선택자
                                  </li>
                                  <li>
                                    예) sample_01, sample_02
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <th>div:not(#sample)</th>
                              <td>id가 sample</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </article>
                  </article>
                  <article>
                    <h3>애니메이션</h3>
                    <article>
                      <h4>기본문법</h4>
                      <table class="default-table-view">
                        <caption class="sr-only">애니메이션 기본문법</caption>
                        <colgroup>
                          <col style="width: 20%;"/>
                          <col style="width: 80%;" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">animation</th>
                            <td>키프레임 이름 입력하여 사용하겠다고 정의</td>
                          </tr>
                          <tr>
                            <th>animation-delay</th>
                            <td>animation의 하위속성으로써 로드되고 나서 언제 애니메이션이 시작될지 지정</td>
                          </tr>
                          <tr>
                            <th>animation-fill-mode</th>
                            <td>animation의 하위속성으로써 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정(both)</td>
                          </tr>
                          <tr>
                            <th>animation-iteration-count</th>
                            <td>animation의 하위 속성으로써 애니메이션을 반복할지 설정(infinite)</td>
                          </tr>
                        </tbody>
                      </table>
                    </article>
                    <article>
                      <h4>keyframes</h4>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">@keyframes&nbsp;sliderShow</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;from&nbsp;</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;opacity&nbsp;</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;transform</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;translateY(100px)</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;color</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;aqua</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;</span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;to&nbsp;</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;opacity</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;1</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;transform</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;translateY(0)</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>
                      </div>
                    </article>
                    <article>
                      <h4>순차적 애니메이션</h4>
                      <p class="paragraph">slick slider 안에 애니메이션을 적용하려면 <span class="bold">slick-active</span>안에  순차적 애니메이션을 적용</p>
                      <div class="box-area">
                        <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">dl</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"stagger-wrapper1"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">dt</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"stagger-item"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>순차적&nbsp;애니메이션&nbsp;(제목)<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">dt</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">dd</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"stagger-item"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>순차적&nbsp;애니메이션&nbsp;(내용1)<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">dd</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">dd</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"stagger-item"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>순차적&nbsp;애니메이션&nbsp;(내용2)<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">dd</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">dl</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                      </div>
                      <dl class="stagger-wrapper">
                        <dt class="stagger-item">순차적 애니메이션 (제목)</dt>
                        <dd class="stagger-item">순차적 애니메이션 (내용1)</dd>
                        <dd class="stagger-item">순차적 애니메이션 (내용2)</dd>
                      </dl>
                    </article>
                  </article>
                </section>
              </div>
            </div>
          </article>
        </article>
      </section>
    </section>
    <layer-popup title="테이블 기본형" :popup.sync="popup">
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

    <layer-popup title="테이블 기본형(상세보기)" :popup.sync="popup2">
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

    <layer-popup title="테이블 body 스크롤" :popup.sync="popup3">
      <template #info>
        {{ title3 }}
      </template>
      <template #close>
        {{ close }}
      </template>
      <template #content>
        <p v-html="code3"></p>
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
      popup  : false,
      popup2 : false,
      popup3 : false,
      title1 : '기본 테이블',
      title2 : '기본 테이블 (상세보기)',
      title3 : 'body 스크롤 테이블',
      close  : '닫기',

      code1  : 
        '<span>'
      + '<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important; position:relative !important;overflow:auto">'
      + '<table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0">'
      + '<tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">table</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"default-table"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">caption</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"sr-only"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>기본&nbsp;테이블<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">caption</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;70px;"</span><span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;75%;"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;10%;"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;10%;"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">thead</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>번호<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제목<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>작성자<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"col"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>작성일<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">thead</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tbody</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"row"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>1<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>제목<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>작성자<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>작성일<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span>'
      + '<span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tbody</span>'
      + '<span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">table</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>'
      + '</span>',

      code2  : 
      '<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">table</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"default-table-view"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">caption</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"sr-only"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>기본&nbsp;테이블&nbsp;(상세보기)<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">caption</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;20%;"</span><span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">col</span>&nbsp;<span style="color:#a8ff58">style</span>=<span style="color:#ffd500">"width:&nbsp;80%;"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">/</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">colgroup</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tbody</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span>&nbsp;<span style="color:#a8ff58">scope</span>=<span style="color:#ffd500">"row"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>제목<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>내용<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span>제목<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>내용<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span>제목<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">th</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span>내용<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">td</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tr</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">tbody</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">table</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>',

      code3 : 
      '<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div><div style="line-height:130%">16</div><div style="line-height:130%">17</div><div style="line-height:130%">18</div><div style="line-height:130%">19</div><div style="line-height:130%">20</div><div style="line-height:130%">21</div><div style="line-height:130%">22</div><div style="line-height:130%">23</div><div style="line-height:130%">24</div><div style="line-height:130%">25</div><div style="line-height:130%">26</div><div style="line-height:130%">27</div><div style="line-height:130%">28</div><div style="line-height:130%">29</div><div style="line-height:130%">30</div><div style="line-height:130%">31</div><div style="line-height:130%">32</div><div style="line-height:130%">33</div><div style="line-height:130%">34</div><div style="line-height:130%">35</div><div style="line-height:130%">36</div><div style="line-height:130%">37</div><div style="line-height:130%">38</div><div style="line-height:130%">39</div><div style="line-height:130%">40</div><div style="line-height:130%">41</div><div style="line-height:130%">42</div><div style="line-height:130%">43</div><div style="line-height:130%">44</div><div style="line-height:130%">45</div><div style="line-height:130%">46</div><div style="line-height:130%">47</div><div style="line-height:130%">48</div><div style="line-height:130%">49</div><div style="line-height:130%">50</div><div style="line-height:130%">51</div><div style="line-height:130%">52</div><div style="line-height:130%">53</div><div style="line-height:130%">54</div><div style="line-height:130%">55</div><div style="line-height:130%">56</div><div style="line-height:130%">57</div><div style="line-height:130%">58</div><div style="line-height:130%">59</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, \'Liberation Mono\', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">table</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&amp;.default-table-scroll</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;thead</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tr</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;th</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-color</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;$line-orange</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-top</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;2px&nbsp;solid&nbsp;$line-orange</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-bottom</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;2px&nbsp;solid&nbsp;$line-orange</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-right</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;1px&nbsp;solid&nbsp;$line-gray</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-left</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;1px&nbsp;solid&nbsp;$line-gray</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;50px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line-height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;50px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font&nbsp;</span><span style="color:#ff3399">:</span><span style="color:#ff3399">&nbsp;</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size&nbsp;</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0.9375rem</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weight</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;700</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;</span><span style="color:#a8ff58">:first-child</span><span style="color:#ff3399"></span>,<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;</span><span style="color:#a8ff58">:last-child</span><span style="color:#ff3399"></span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-left</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-right</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0</span><span style="color:#ff3399">;</span><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;tbody</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tr</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;td</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-bottom</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;1px&nbsp;solid&nbsp;$line-gray</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;50px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;center</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line-height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;50px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font&nbsp;</span><span style="color:#ff3399">:</span><span style="color:#ff3399">&nbsp;</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;0.9375rem</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;</span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&amp;.default-table-scroll</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;thead,</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;tbody&nbsp;tr</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;table</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;100%</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table-layout</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;fixed</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;tbody</span>{<span style="color:#ff3399"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;.scroll</span>{<span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;block</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max-height</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;100px</span><span style="color:#ff3399">;</span><span style="color:#4be6fa"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#4be6fa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overflow-y</span><span style="color:#ff3399">:</span><span style="color:#E083FF">&nbsp;scroll</span><span style="color:#ff3399">;</span><span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF">&nbsp;&nbsp;</span>}<span style="color:#E083FF"></span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#E083FF"></span>}</div></div></td></tr></table></div>',
      //Tab Menu
      currentTab : 0,
      showContent: true,
      tabs       : ['HTML', 'CSS'],
    }
  },
  components :{
    LayerPopup
  },
 
  methods:{
    sourceBtn(){
      this.popup = !this.popup;
    },
    sourceBtn2(){
      this.popup2 = !this.popup2;
    },
    sourceBtn3(){
      this.popup3 = !this.popup3;
    },
  },

  mounted(){
    let category = this.$route.meta.category; 
    EventBus.$emit('emitCategory', category);
  },
}
</script>

<style>

</style>