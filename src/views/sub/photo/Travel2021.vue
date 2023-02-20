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
                <router-link to="/travel2022" title="travel" >2022</router-link>
              </li>
              <li>
                <router-link to="/travel2021" title="travel" class="active">2021</router-link>
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
                <router-link to="/food2022" title="food">2021</router-link>
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
            해당 사진은 소니 "<span class="bold">SEL24F14GM</span>" 렌즈를 사용하여 촬영하였습니다.
          </article>
          <article>
            <h3>안동 (월영교)</h3>
            <article>
              <section class="photo-list">
                <article v-for="url in WolyeongBridge" :key="url">
                  <img :src="url" alt="월영교" @click="zoom(url)">
                  <div v-if="selectedImage" class="zoom-img">
                    <img :src="selectedImage" alt="" @click.stop="selectedImage = null">
                  </div>
                </article>
              </section>
            </article>
          </article>
          <article>
            <h3>안동 (하회마을)</h3>
            <article>
              <section class="photo-list">
                <article v-for="url in HahoeVillage" :key="url">
                  <img :src="url" alt="하회마을" @click="zoom(url)">
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

      WolyeongBridge : [
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge01.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge02.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge03.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge04.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge05.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge06.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge07.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge08.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge09.jpg`),
        require(`../../../assets/images/capture/2021/travel/wolyeong-bridge10.jpg`),
      ],

      HahoeVillage   : [
        require(`../../../assets/images/capture/2021/travel/hahoe-village01.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village02.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village03.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village04.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village05.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village06.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village07.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village08.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village09.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village10.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village11.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village12.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village13.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village14.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village15.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village16.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village17.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village18.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village19.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village20.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village21.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village22.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village23.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village24.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village25.jpg`),
        require(`../../../assets/images/capture/2021/travel/hahoe-village26.jpg`),
      ],
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
      this.foodMenu = !this.foodMenu;
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