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
                <router-link to="/travel2020" title="travel" >2020</router-link>
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
                <router-link to="/food2021" title="food" class="active">2021</router-link>
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
          <h3>Food</h3>
        </article>
        <article id="contentArea">
          <article class="references">
            음식 사진은 대부분 휴대폰 카메라로 찍은 것입니다. (보케있는 사진 제외)
          </article>
          <article>
            <article>
              <h3>2021 Food</h3>
              <section class="photo-list">
                <article v-for="url in food2021" :key="url">
                  <img :src="url" alt="음식2021" @click="zoom(url)">
                  <div v-if="selectedImage" class="zoom-img">
                    <img :src="selectedImage" alt="" @click.stop="selectedImage = null">
                  </div>
                </article>
              </section>
            </article>
            <article>
              <h3>Pixel phone</h3>
              <p class="paragraph">해당 사진은 구글 <span class="bold">pixcel phone6 pro</span> 로 찍은 사진입니다.</p>
              <section class="photo-list">
                <article v-for="url in pixel2021" :key="url">
                  <img :src="url" alt="음식2021" @click="zoom(url)">
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

     
      food2021 : [
        require(`../../../assets/images/capture/2021/food/food2021-02.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-03.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-04.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-05.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-06.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-07.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-08.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-09.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-10.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-11.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-12.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-13.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-14.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-15.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-16.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-17.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-18.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-19.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-20.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-21.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-22.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-23.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-24.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-25.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-26.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-27.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-28.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-29.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-30.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-31.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-32.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-33.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-34.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-35.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-36.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-37.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-38.jpg`),
        require(`../../../assets/images/capture/2021/food/food2021-39.jpg`),
      ],

      pixel2021 : [
        require(`../../../assets/images/capture/2021/food/pixel2021-01.jpg`),
        require(`../../../assets/images/capture/2021/food/pixel2021-02.jpg`),
        require(`../../../assets/images/capture/2021/food/pixel2021-03.jpg`),
        require(`../../../assets/images/capture/2021/food/pixel2021-04.jpg`),
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