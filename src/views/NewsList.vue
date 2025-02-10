<template>
  <div v-show="Ready" id="index">
    <div class="sectionNewsList">
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
            首頁 ><span class="title-name">最新消息</span>
          </span>
          <div class="w3-row" v-for="(rowIndex) in (NewsRows)" :key="rowIndex" :title="rowIndex">
            <div v-for="(news, index) in NewsList">			
              <div class="w3-col w3-center" :key="news.NewsID" v-if="rowIndex == (Math.floor(index / 3) + 1)" :title="news.NewsID">        
                <router-link :to="`/news/${news.NewsID}`" title="點擊可進入最新消息內容">
                  <div class="section-item">
                    <img :src="news.ImageUrl|imageCDN" alt="最新消息主圖片"
                      class="section-item-img">
                      </br>
                      <div class="section-news-item-content">
                        <span class="section-item-date">{{ news.NewsTime }}</span>
                        </br>
                        <span class="section-item-title">{{ news.Title }}</span>
                      </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <Pagination :propsPage="Page" :propsLimit="Limit" :propsTotal="Total" @switchPage="getListBySwitchPage"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    Pagination
  },
  data() {
    return {
      Ready: false,
      Page: 1,
      Limit: 9,
      Total: 0,
      NewsList: [],
      NewsRows: 0,
    };
  },
  async mounted() {
    var response = await this.$api.getNewsList(1, 9);
    this.NewsList = response.NewsList;
    this.NewsRows = Math.ceil(response.NewsList.length / 3);
    this.Total = response.Total;
    this.Page = 1;
    this.Limit = 9;
    this.Ready = true;
  },
  methods: {
    async getListBySwitchPage(nowPage) {
      var response = await this.$api.getNewsList(nowPage, 9);
      this.NewsList = response.NewsList;
      this.NewsRows = Math.ceil(response.NewsList.length / 3);
      this.Total = response.Total;
      this.Page = nowPage;
    },
  },
};
</script>