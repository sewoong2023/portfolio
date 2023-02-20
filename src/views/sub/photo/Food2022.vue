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
                <router-link to="/travel2020" title="travel">2020</router-link>
              </li>  
            </ul>  
          </li>
          <li>
            <p @click="foodList">Food</p>
            <ul v-show="foodMenu">
              <li>
                <router-link to="/food2022" title="food" class="active">2022</router-link>
              </li>
              <li>
                <router-link to="/food2021" title="food">2021</router-link>
              </li>
              <li>
                <router-link to="/food2021" title="food">2020</router-link>
              </li>  
            </ul> 
          </li>
        </ul>
      </section>
      <section id="contents">
        <article id="titleArea">
          <h2>Photo</h2>
          <h3>Food</h3>
        </article>
        <article id="contentArea">
          <article class="references">
            음식 사진은 대부분 휴대폰 카메라로 찍은 것입니다. (보케있는 사진 제외)
          </article>
          <article>
            <article>
              <h3>2022 Food</h3>
              <p class="paragraph">2022년 음식사진 기다리는 중</p>
              <section class="photo-list">
                <article v-for="url in food2022" :key="url">
                  <img :src="url" alt="음식2022" @click="zoom(url)">
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
      travelMenu    : false,
      foodMenu      : true,
      photoList     : "",
      selectedImage : null,

      food2022 : [
        // require(`../../../assets/images/capture/2021/food/food2021-02.jpg`),
        
      ],
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
      this.foodMenu   = false;
    },

    foodList(){
      this.foodMenu   = !this.foodMenu;
      this.travelMenu = false;
    }
  }
}
</script>

<style>

</style>