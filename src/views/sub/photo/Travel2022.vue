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
                <router-link to="/travel2022" title="travel" class="active">2022</router-link>
              </li>
              <li>
                <router-link to="/travel2021" title="travel">2021</router-link>
              </li>
              <li>
                <router-link to="/travel2020" title="travel">2020</router-link>
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
            해당 사진에서 풍경은 "<span class="bold">SEL24F14GM</span>" 렌즈를 인물(근접 촬영)은 "<span class="bold">SEL50F18</span>"사용하여 촬영하였습니다.
          </article>
          <article>
            <h3>안목해변</h3>
            <article>
              <section class="photo-list">
                <article v-for="url in AnmokBeach" :key="url">
                  <img :src="url" alt="안목해변" @click="zoom(url)">
                  <div v-if="selectedImage" class="zoom-img">
                    <img :src="selectedImage" alt="" @click.stop="selectedImage = null">
                  </div>
                </article>
              </section>
            </article>
          </article>
          <article>
            <h3>산정호수</h3>
            <article>
              <section class="photo-list">
                <article v-for="url in sanjeongLake" :key="url">
                  <img :src="url" alt="산정호수" @click="zoom(url)">
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

      AnmokBeach    : [
        require(`../../../assets/images/capture/2022/travel/anmok-beach01.jpg`),
        require(`../../../assets/images/capture/2022/travel/anmok-beach02.jpg`),
        require(`../../../assets/images/capture/2022/travel/anmok-beach03.jpg`),
        require(`../../../assets/images/capture/2022/travel/anmok-beach04.jpg`),
        require(`../../../assets/images/capture/2022/travel/anmok-beach05.jpg`),
        require(`../../../assets/images/capture/2022/travel/anmok-beach06.jpg`),
      ],

      sanjeongLake  : [
        require("../../../assets/images/capture/2022/travel/sanjeong-Lake01.jpg"),
        require("../../../assets/images/capture/2022/travel/sanjeong-Lake02.jpg"),
        require("../../../assets/images/capture/2022/travel/sanjeong-Lake03.jpg"),
        require("../../../assets/images/capture/2022/travel/sanjeong-Lake04.jpg"),
        require("../../../assets/images/capture/2022/travel/sanjeong-Lake05.jpg"),
      ]
    }
  },

  mounted(){
    let category = this.$route.meta.category;
    EventBus.$emit('emitCategory', category);
  },

  methods : {
    travelList(){
      this.travelMenu = !this.travelMenu;
      this.foodMenu   = false;
    },

    foodList(){
      this.foodMenu   = !this.foodMenu;
      this.travelMenu = false;
    },

    zoom(url){
      console.log("zoom", url);
      this.selectedImage = url;  
    }

  }
}
</script>

<style>

</style>