<template>
  <div v-show="Ready" id="index">
    <div class="sectionNews">
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
            最新消息
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
        <div class="section-background">
          <span class="section-nav">
            首頁 > 最新消息 > <span class="title-name">消息內容</span>
          </span>
        </div>
        <div class="w3-col" style="width:45%">
          <img :src="News.ImageUrl|imageCDN" alt="最新消息主圖片"
            class="image">
        </div>
        <div class="w3-col" style="width:45%">
          <span class="title">
            {{ News.Title }}
          </span>
          </br></br></br>
          <span class="newsDate">
            {{ News.NewsTime }}
          </span>
          </br></br>
          <span class="content" v-html="News.Content">
          </span>
        </div>
      </div>
      <div class="wrapper">
        <router-link to="/newsList" title="點擊可回到最新消息列表">
          <div class="return-btn">
              <span class="btn-name">返回列表</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Ready: false,
      News: {},
    };
  },
  async mounted() {
    var response = await this.$api.getNews(this.$route.params.id);
    this.News = response[0];
    this.Ready = true;
  },
};
</script>
