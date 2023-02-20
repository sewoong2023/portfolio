import Vue from 'vue';
import VueRouter from 'vue-router';

// 메인페이지
import MainPage       from '../views/main/MainPage.vue';

// 가이드라인
import GuideLine      from '../views/sub/GuideLine.vue';

// sub (handbook)
import HtmlCss        from '../views/sub/handbook/HtmlCss.vue';
import VueContents    from '../views/sub/handbook/VueContents.vue';
import SassContents   from '../views/sub/handbook/SassContents.vue';
import JqueryContent  from '../views/sub/handbook/JqueryContent.vue';
import TypeScript     from '../views/sub/handbook/TypeScript.vue';
import GithubContents from '../views/sub/handbook/GithubContents.vue';

// sub (photo)
import Travel2022     from '../views/sub/photo/Travel2022.vue';
import Travel2021     from '../views/sub/photo/Travel2021.vue';
import Travel2020     from '../views/sub/photo/Travel2020.vue';

import Food2022       from '../views/sub/photo/Food2022.vue';
import Food2021       from '../views/sub/photo/Food2021.vue';
import Food2020       from '../views/sub/photo/Food2020.vue';

// sub (questions)
import ProjectTest from '../views/sub/questions/ProjectTest.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path        : '/',
      redirect    : '/main',
    },
    {
      path        : '/main',
      name        : 'main',
      component   : MainPage,
    },
    {
      path        : '/guideline',
      component   : GuideLine,
      meta        : {
        category  : ["Handbook","Guideline"],
        title     : '포토폴리오 : 가이드 라인',
      },
    },

    // sub (handbook)
    {
      path        : '/htmlcss',
      component   : HtmlCss,
      meta        : {
        category  : ["Handbook","HTML&CSS"],
        title     :'포토폴리오 : HTML/CSS', 
      },
    },
    {
      path        : '/vue',
      component   : VueContents,
      meta        : { 
        category  : ["Handbook","vue.js"],
        title     :'포토폴리오 : Vue.js', 
      },
    },
    {
      path        : '/Jquery',
      component   : JqueryContent,
      meta        : {
        category  : ["Handbook","Jquery"],
        title     :'포토폴리오 : Jquery',
      }
    },
    {
      path        : '/sass',
      component   : SassContents,
      meta        : {
        category  : ["Handbook", "SASS"],
        title     :'포토폴리오 : SASS',
      },
    },
    
    {
      path        : '/ts',
      component   : TypeScript,
      meta        : { 
        category  : ["Handbook", "TypeScript"],
        title     :'포토폴리오 : TypeScript',
      },
    },
    {
      path        : '/git',
      component   : GithubContents,
      meta        : { 
        category  : ["Handbook", "Github"],
        title     :'포토폴리오 : Github',
      },
    },
    // sub (photo)
    {
      path        : '/travel2022',
      component   : Travel2022,
      meta        : { 
        category  : ["Photo", "travel"],
        title     :'포토폴리오 : 여행사진',
      }
    },
    {
      path        : '/travel2021',
      component   : Travel2021,
      meta        : { 
        category  : ["Photo", "travel"],
        title     :'포토폴리오 : 여행사진',
      }
    },
    {
      path        : '/travel2020',
      component   : Travel2020,
      meta        : { 
        category  : ["Photo", "travel"],
        title     :'포토폴리오 : 여행사진',
      }
    },
    {
      path        : '/food2020',
      component   : Food2020,
      meta        : {
        category  : ["Photo", "food"],
        title     :'포토폴리오 : 음식사진',
      }
    },
    {
      path        : '/food2021',
      component   : Food2021,
      meta        : {
        category  : ["Photo", "food"],
        title     :'포토폴리오 : 음식사진',
      }
    },
    {
      path        : '/food2022',
      component   : Food2022,
      meta        : {
        category  : ["Photo", "food"],
        title     :'포토폴리오 : 음식사진',
      }
    },

    // sub (questions)
    {
      path        : '/test',
      component   : ProjectTest,
      meta        : { 
        category  : ["questions", "test"],
        title     :'포토폴리오 : 테스트 페이지', 
      },
    }
  ]
});

//타이틀 제공
router.afterEach((to, from) => {
  const title = to.meta.title === undefined ? 'portfolio' : to.meta.title;

  Vue.nextTick(() => {
    document.title = title;
  });
})

//포커스 초기화
router.beforeEach((to, from, next) => {
  document.body.setAttribute('tabindex', '-1');
  document.body.focus();
  document.body.removeAttribute('tabindex');
  next();
});