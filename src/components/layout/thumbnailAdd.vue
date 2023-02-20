<template>
  <section>
    <article class="file-custom">
      <p class="upload-name">파일명</p>
      <input type="file" id="fileSelect" ref="files" @change="fileSelect" multiple />
      <label for="fileSelect">파일선택</label>
    </article>
    <article v-if="!files.length" class="image-area"></article>
    <article v-else class="image-area on">
      <section class="image-box" v-for="(file, index) in files" :key="index">
        <article @click="fileDeleteBtn" :name="file.number" class="closeBtn">
          <div>x</div>
        </article>
        <img :src="file.preview" title="썸네일"/>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  data(){
    return {
      files            : [], //업로드용 파일
      filesPreview     : [],
      uploadImageIndex : 0, // 이미지 업로드를 위한 변수
      fileName         : "파일명"
    }
  },

  methods: {
    fileSelect() {
      console.log(this.$refs.files.files);

      //하나의 배열로 넣기
      let num = -1;
      for (let i = 0; i < this.$refs.files.files.length; i++){
        this.files = [
          ...this.files,

          //이미지 업로드
          {
            //실제 파일
            file : this.$refs.files.files[i],

            //이미지 푸리뷰
            preview : URL.createObjectURL(this.$refs.files.files[i]),
            
            //삭제 및 관리를 위한 number
            number : i
          }
        ];

        num = i;
      }

      this.uploadImageIndex = num + 1;  // 이미지 index의 마지막 값 + 1 저장
      console.log(this.files);
    },

    // 삭제 버튼
    fileDeleteBtn(e){
      const name = e.target.getAttribute('name');
      this.files = this.files.filter(data => data.number !== Number(name));
    }
  }
}
</script>

<style>

</style>