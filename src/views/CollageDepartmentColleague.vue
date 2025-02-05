<template>
  <div v-show="Ready" id="index">
    <div class="sectionCollageHead">
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
            師資陣容
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
            首頁 > 關於本院 > <span class="title-name">師資陣容</span>
          </span>
        </div>
        <div class="section-head-title-info">
          <div class="w3-col">
            <div class="section-banner">
              <img src="img/collage_img/rectangle-114.png"
                srcset="img/collage_img/rectangle-114@2x.png 2x,
                        img/collage_img/rectangle-114@3x.png 3x"
                class="banner-block">
              <img :src="CollageColleague.ImageUrl|imageCDN" alt="師資主圖片"
                class="banner-background">
            </div>
          </div>
          <div class="w3-col">
            <div class="section-title-info">
              <span class="name">
                {{ CollageColleague.Name }}
              </span>
              <span class="positionType">現職|</span>
              <span class="content" v-html="CollageColleague.Title">
              </span>
            </div>
          </div>
        </div>
        <div class="section-head-content">
          <div class='section-title-info'>
            <span class="section-title">
              師資簡介
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-title-line">
          </div>
          <div class='section-content-container'>
            <span class="section-content" v-html="CollageColleague.Content">
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
      CollageColleague: {}
    };
  },
  async mounted() {
    var response = await this.$api.getCollageColleagueInfo(this.$route.params.id);
    this.CollageColleague = response[0];
    this.Ready = true;
  },
};
</script>
