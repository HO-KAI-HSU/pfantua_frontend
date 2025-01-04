<template>
  <div v-show="Ready" id="index">
    <div class="sectionCollageInfo">
      <div class="wrapper">
        <div class="w3-center">
          <img src="img/collage_img/line-3.png"
          srcset="img/collage_img/line-3@2x.png 2x,
                  img/collage_img/line-3@3x.png 3x"
          class="section-title-line1">
        </div>
      </div>
      <div class="wrapper">
        <div class="w3-center">
          <span class="section-title">
            關於本院
          </span>
        </div>
      </div>
      <div class="wrapper">
        <div class="w3-center">
          <img src="img/collage_img/line-12.png"
          srcset="img/collage_img/line-12@2x.png 2x,
                  img/collage_img/line-12@3x.png 3x"
          class="section-title-line2">
        </div>
      </div>
      <div class="wrapper">
        <div class="w3-center">
          <img src="img/collage_img/ellipse-6.png"
          srcset="img/collage_img/ellipse-6@2x.png 2x,
                  img/collage_img/ellipse-6@3x.png 3x"
          class="section-title-ellipse">
        </div>
      </div>
      <div class="wrapper">
        <div class="section-background">
          <span class="section-nav">
            首頁 > <span class="title-name">關於本院</span>
          </span>
          <div class="section-banner">
            <img src="img/collage_img/rectangle-114.png"
              srcset="img/collage_img/rectangle-114@2x.png 2x,
                      img/collage_img/rectangle-114@3x.png 3x"
              class="banner-block">
            <img :src="Collage.CollageImageUrl|imageCDN" alt="學院簡介主圖片"
              class="banner-background">
          </div>
          <div class='section-title-info'>
            <span class="section-title">
              學院簡介
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-titl-line">
          </div>
          <div class='section-content-container'>
            <span class="section-content" v-html="CollageIntroduction">
            </span>
          </div>
          <div class='section-title-info'>
            <span class="section-title">
              院景沿革
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-titl-line">
          </div>
          <div class='section-content-container'>
            <span class="section-content" v-html="CollageHistory">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Ready: false,
      Collage: {},
      CollageIntroduction: "",
      CollageHistory: "",
    };
  },
  async mounted() {
    var response = await this.$api.getCollageInfo();
    this.Collage = response.Collage;
    this.CollageIntroduction = response.Collage.CollageIntroduction;
    this.CollageHistory = response.Collage.CollageHistory;
    this.Ready = true;
  },
};
</script>
