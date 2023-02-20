<template>
  <main id="subPage">
    <section id="container">
      <section id="lnb">
        <h2>Photo</h2>
        <ul>
          <li>
            <p  @click="travelList">Travel</p>
            <ul v-show="travelMenu">
              <li>
                <router-link to="/travel2022" title="travel">2022</router-link>
              </li>
              <li>
                <router-link to="/travel2021" title="travel">2021</router-link>
              </li>
              <li>
                <router-link to="/travel2020" title="travel" class="active">2020</router-link>
              </li>  
            </ul>  
          </li>
          <li>
            <p @click="foodList">Food</p>
            <ul v-show="foodMenu">
              <li>
                <router-link to="/food2022" title="food">2022</router-link>
              </li>
              <li>
                <router-link to="/food2021" title="food">2021</router-link>
              </li>
              <li>
                <router-link to="/food2020" title="food">2020</router-link>
              </li>  
            </ul> 
          </li>
        </ul>
      </section>
      <section id="contents">
        <article id="titleArea">
          <h2>Photo</h2>
          <h3>Travel</h3>
        </article>
        <article id="contentArea">
          <article class="references">
            해당 사진은 번들렌즈인 "<span class="bold">FE2860</span>" 렌즈를 사용하여 촬영하였습니다.
          </article>
          <article>
            <h3>일본 (후쿠오카)</h3>
            <article>
              <section class="photo-list">
                <article v-for="url in JapenFukuoka" :key="url">
                  <img :src="url" alt="후쿠오카" @click="zoom(url)">
                  <div v-if="selectedImage" class="zoom-img">
                    <img :src="selectedImage" alt="" @click.stop="selectedImage = null">
                  </div>
                </article>
              </section>
            </article>
          </article>
          <article>
            <h3>부산</h3>
            <article>
              <section class="photo-list">
                <article v-for="url in CentumCity" :key="url">
                  <img :src="url" alt="부산" @click="zoom(url)">
                  <div v-if="selectedImage" class="zoom-img">
                    <img :src="selectedImage" alt="" @click.stop="selectedImage = null">
                  </div>
                </article>
              </section>
            </article>
          </article>
        </article>
      </section>
    </section>
    <layer-popup title="v-for" :popup.sync="popup">
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
  </main>
</template>

<script>
import { EventBus } from '../../../event-bus';

export default {
  data(){
    return{
      travelMenu    : true,
      foodMenu      : false,
      photoList     : "",
      selectedImage : null,

     
      JapenFukuoka  : [
        require(`../../../assets/images/capture/2020/travel/japen-fukuoka01.jpg`),
        require(`../../../assets/images/capture/2020/travel/japen-fukuoka02.jpg`),
        require(`../../../assets/images/capture/2020/travel/japen-fukuoka03.jpg`),
        require(`../../../assets/images/capture/2020/travel/japen-fukuoka04.jpg`),
        require(`../../../assets/images/capture/2020/travel/japen-fukuoka05.jpg`),
        require(`../../../assets/images/capture/2020/travel/japen-fukuoka06.jpg`),
        require(`../../../assets/images/capture/2020/travel/japen-fukuoka07.jpg`),
      ],

      CentumCity    : [
        require("../../../assets/images/capture/2020/travel/busan-centumcity01.jpg"),
        require("../../../assets/images/capture/2020/travel/busan-centumcity02.jpg"),
        require("../../../assets/images/capture/2020/travel/busan-centumcity03.jpg"),
        require("../../../assets/images/capture/2020/travel/busan-centumcity04.jpg"),
        require("../../../assets/images/capture/2020/travel/busan-centumcity05.jpg"),
      ]
    }
  },

  mounted(){
    let category = this.$route.meta.category;
    EventBus.$emit('emitCategory', category);
  },

  methods : {
    zoom(url){
      console.log("zoom", url);
      this.selectedImage = url;  
    },
    travelList(){
      this.travelMenu = !this.travelMenu;
      this.foodMenu = false;
    },

    foodList(){
      this.foodMenu = !this.foodMenu;
      this.travelMenu = false;
    }

  }
}
</script>

<style>

</style>