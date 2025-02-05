<template>
  <div v-show="Ready" id="index">
    <div class="sectionActivityHistory">
      <div class="wrapper">
        <div class="w3-center">
          <img src="img/index_img/line-3.png"
          srcset="img/index_img/line-3@2x.png 2x,
                  img/index_img/line-3@3x.png 3x"
          class="section-title-line1">
        </div>
      </div>
      <div class="wrapper">
        <div class="w3-center">
          <span class="section-title">
            活動集錦
          </span>
        </div>
      </div>
      <div class="wrapper">
        <div class="w3-center">
          <img src="img/index_img/line-12.png"
          srcset="img/index_img/line-12@2x.png 2x,
                  img/index_img/line-12@3x.png 3x"
          class="section-title-line2">
        </div>
      </div>
      <div class="wrapper">
        <div class="w3-center">
          <img src="img/index_img/ellipse-7.png"
          srcset="img/index_img/ellipse-7@2x.png 2x,
                  img/index_img/ellipse-7@3x.png 3x"
          class="section-title-ellipse">
        </div>
      </div>
      <div class="wrapper">
        <div class="w3-center">
          <div class="activityHistory-tabs">
            <router-link to="#" v-scroll-to="'#image'" class="courseStudentPage" title="點擊可跳至活動花絮">
              <span class="tabs-name">活動花絮</span>
            </router-link>
            <router-link to="#" v-scroll-to="'#video'" class="courseStudentPage" title="點擊可跳至活動影音">
              <span class="tabs-name">活動影音</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="section-background">
          <span class="section-nav">
            首頁 > 活動集錦 > <span class="title-name">集錦內容</span>
          </span>
          <div class='section-title-info' id="image">
            <span class="section-title">
              活動花絮
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-title-line">
          </div>
          <div class="section-container">
            <div class="w3-row" v-for="(rowIndex) in (ActivityHistoryImageRows)" :key="rowIndex" :title="rowIndex">
              <div class="w3-col w3-container" v-for="(activityImage, index) in ActivityHistoryImages" v-if="rowIndex == (Math.floor(index / 2) + 1)">
                <div class="section-image-container">
                  <img :src="activityImage.ImageUrl|imageCDN" alt="活動花絮圖片" class="image">
                </div>
              </div>
            </div>
          </div>
          <div class='section-title-info' id="video">
            <span class="section-title">
              活動影音
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-title-line">
          </div>
          <div class="section-container">
            <div class="w3-row" v-for="(rowIndex) in (ActivityHistoryVideoRows)" :key="rowIndex" :title="rowIndex">
              <div class="w3-col w3-container" v-for="(activityVideo, index) in ActivityHistoryVideos" v-if="rowIndex == (Math.floor(index / 2) + 1)">
                <div class="section-video-container">
                    <iframe id="video_detail" width="100%" height="100%" :src="activityVideo.VideoUrl" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
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
      ActivityHistory: {},
      ActivityHistoryImages:[],
      ActivityHistoryVideos:[],
      ActivityHistoryImageRows:0,
      ActivityHistoryVideoRows:0
    };
  },
  async mounted() {
    var response = await this.$api.getActivityHistoryInfo(this.$route.params.id);
    this.ActivityHistory = response;
    this.ActivityHistoryImages = this.ActivityHistory.ImageFiles;
    this.ActivityHistoryVideos = this.ActivityHistory.VideoFiles;
    this.ActivityHistoryImageRows = Math.ceil(this.ActivityHistoryImages.length / 2);
    this.ActivityHistoryVideoRows = Math.ceil(this.ActivityHistoryVideos.length / 2);
    this.Ready = true;
  },
};
</script>
