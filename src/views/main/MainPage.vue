<template>
  <main id="mainPage">
    <section id="mainSlider">
      <vue-slick-carousel :arrows="true" :dots="false">
        <div>
          <dl class="stagger-wrapper">
            <dt class="stagger-item">Hand Book</dt>
            <dd class="stagger-item">10년간의 노하우</dd>
            <dd class="stagger-item">test</dd>
          </dl>
        </div>
        <div>
          <dl class="stagger-wrapper">
            <dt class="stagger-item">About</dt>
            <dd class="stagger-item">나는!??</dd>
          </dl>
        </div>
        <div>
          <dl class="stagger-wrapper">
            <dt class="stagger-item">Photo</dt>
            <dd class="stagger-item">일상생활 사진으로 담다.</dd>
          </dl>
        </div>
        <div>
          <dl class="stagger-wrapper">
            <dt class="stagger-item">Hobby</dt>
            <dd class="stagger-item">취미생활</dd>
          </dl>
        </div>
        <div>
          <dl class="stagger-wrapper">
            <dt class="stagger-item">Questions</dt>
            <dd class="stagger-item">뭐하는 곳인고!?</dd>
          </dl>
        </div>
      </vue-slick-carousel> 
    </section>
    <section id="myProject">
      <h2>My Project</h2>
      <h3>2022</h3>
      <section class="project-list">
        <article>
          <figure>
            <img src="../../assets/images/main/2022/main-capture-24.png" alt="부천 스마트시티">
            <figcaption>부천 스마트시티<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2022/main-capture-25.png" alt="부천 시티패스">
            <figcaption>부천 시티패스<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="" alt="">
            <figcaption>남양주 주차포탈<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="" alt="">
            <figcaption>한솔홈데코 2D시뮬레이션<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <div class="noimg">
              <p>NO <span class="br">IMAGE</span></p>
            </div>
            <figcaption>경기도 주식회사 (관리자)<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
      </section>
      <h3>2021</h3>
      <section class="project-list">
        <article>
          <figure>
            <img src="../../assets/images/main/2021/main-capture-20.png" alt="부천한빛도서관 정산기">
            <figcaption>부천 한빛도서관<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2021/main-capture-21.png" alt="평택주차포탈">
            <figcaption>평택주차포탈<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2021/main-capture-22.png" alt="화성주차포탈">
            <figcaption>화성주차포탈<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
      </section>
      <h3>2020</h3>
      <section class="project-list">
        <article>
          <figure>
            <img src="../../assets/images/main/2020/main-capture-13.png" alt="양주주차포탈">
            <figcaption>양주시 주차포털<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2020/main-capture-14.png" alt="부천노상">
            <figcaption>부천 노상앱<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2020/main-capture-15.png" alt="수원주차포탈">
            <figcaption>수원시 주차포탈<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2020/main-capture-16.png" alt="부천주차포탈">
            <figcaption>부천시 주차포탈<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2020/main-capture-17.png" alt="한강주차포탈">
            <figcaption>한강 주차포탈<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2020/main-capture-18.png" alt="관리자페이지">
            <figcaption>Inerv-manager<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2020/main-capture-19.png" alt="대시보드">
            <figcaption>대시보드<span>(유지보수)</span></figcaption>
          </figure>
        </article>
      </section>
      <h3>2019</h3>
      <section class="project-list">
        <article>
          <figure>
            <img src="../../assets/images/main/2019/main-capture-07.png" alt="뉴오리진">
            <figcaption>뉴 오리진<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2019/main-capture-08.png" alt="강아지왕국&고양이왕국">
            <figcaption>강아지왕국?(&고양이왕국)<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2019/main-capture-09.png" alt="동원몰">
            <figcaption>동원몰<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2019/main-capture-10.png" alt="빅커피">
            <figcaption>빅커피<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2019/main-capture-11.png" alt="사진노리">
            <figcaption>사진노리<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2019/main-capture-12.png" alt="픽스토리">
            <figcaption>픽스토리<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <div class="noimg">
              <p>NO <span class="br">IMAGE</span></p>
            </div>
            <figcaption>성원부동산<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <div class="noimg">
              <p>NO <span class="br">IMAGE</span></p>
            </div>
            <figcaption>범아<span>(유지보수)</span></figcaption>
          </figure>
        </article>
      </section>
      <h3>2018</h3>
      <section class="project-list">
        <article>
          <figure>
            <img src="../../assets/images/main/2018/main-capture-03.png" alt="구리시여성노인회관">
            <figcaption>구리시여성노인화관<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2018/main-capture-04.png" alt="인천영종역사관">
            <figcaption>인천영종역사관<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2018/main-capture-05.png" alt="IFEZ">
            <figcaption>IFEZ<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2018/main-capture-23.png" alt="서울열린데이터">
            <figcaption>서울열린데이터<span>(유지보수)</span></figcaption>
          </figure>
        </article>
      </section>
      <h3>2012~2017</h3>
      <section class="project-list">
        <article>
          <figure>
            <img src="../../assets/images/main/2017/main-capture-01.png" alt="정부24">
            <figcaption>정부24<span>(유지보수)</span></figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <img src="../../assets/images/main/2017/main-capture-02.png" alt="충남지역사회서비스지원단">
            <figcaption>충남지역사회서비스지원단<span>(신규 퍼블리싱)</span></figcaption>
          </figure>
        </article>
      </section>
    </section>
    <section id="skillList">
      <h2>Skill</h2>
      <article class="skill-item">
        <ul>
          <li>웹접근성및 웹표준</li>
          <li>100%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 100%"></div>
        </div>
      </article>
      <article class="skill-item">
        <ul>
          <li>HTML</li>
          <li>100%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 100%"></div>
        </div>
      </article>
      <article class="skill-item">
        <ul>
          <li>SCSS</li>
          <li>90%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 90%"></div>
        </div>
      </article>
      <article class="skill-item">
        <ul>
          <li>photoshop</li>
          <li>70%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 70%"></div>
        </div>
      </article>
      <article class="skill-item">
        <ul>
          <li>Jquery</li>
          <li>70%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 70%"></div>
        </div>
      </article>
      <article class="skill-item">
        <ul>
          <li>Vue.js</li>
          <li>60%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 60%"></div>
        </div>
      </article>
      <article class="skill-item">
        <ul>
          <li>React</li>
          <li>40%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 40%"></div>
        </div>
      </article>
      <article class="skill-item">
        <ul>
          <li>PHP</li>
          <li>40%</li>
        </ul>
        <div class="progress">
          <div class="graph" style="width: 40%"></div>
        </div>
      </article>
    </section>
    <popup-type v-if="showPopup">
      <template #info>
        {{ title }}
      </template>
      <template #close>
        {{ close }}
      </template>
      <template #content>
        <p v-html="msg"></p>
      </template>
    </popup-type>
  </main>
</template>

<script>
import  VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import PopupType from '../../components/popup/PopupType.vue'

export default {
  data(){
    return{
      showPopup : true,
      title     : "공지사항",
      close     : "닫기",
      msg       : '<span>공사중</span>'
    }
  },

  components: { 
    PopupType,
    VueSlickCarousel 
  },
}
</script>

<style>

</style>