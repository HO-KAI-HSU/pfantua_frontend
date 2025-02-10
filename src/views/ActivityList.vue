<template>
  <div v-show="Ready" id="index">
    <div class="sectionActivityList">
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
            活動資訊
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
            首頁 ><span class="title-name">活動資訊</span>
          </span>
          <div class="w3-row" v-for="(rowIndex) in (ActivityRows)" :key="rowIndex" :title="rowIndex">
            <div v-for="(activity, index) in ActivityList">			
              <div class="w3-col w3-center" :key="activity.NewsID" v-if="rowIndex == (Math.floor(index / 3) + 1)" :title="activity.NewsID">        
                <router-link :to="`/activity/${activity.NewsID}`" title="點擊可進入活動資訊內容">
                  <div class="section-item">
                    <img :src="activity.ImageUrl|imageCDN" alt="活動資訊主圖片"
                      class="section-item-img">
                      </br>
                      <div class="section-activity-item-content">
                        <span class="section-item-date">{{ activity.NewsTime }}</span>
                        </br>
                        <span class="section-item-title">{{ activity.Title }}</span>
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
      ActivityList: [],
      ActivityRows: 0
    };
  },
  async mounted() {
    var response = await this.$api.getActivityList(1, 9);
    this.ActivityList = response.NewsList;
    this.ActivityRows = Math.ceil(response.NewsList.length / 3);
    this.Total = response.Total;
    this.Page = 1;
    this.Limit = 9;
    this.Ready = true;
  },
  methods: {
    async getListBySwitchPage(nowPage) {
      var response = await this.$api.getActivityList(nowPage, 9);
      this.ActivityList = response.NewsList;
      this.ActivityRows = Math.ceil(response.NewsList.length / 3);
      this.Total = response.Total;
      this.Page = nowPage;
    },
  },
};
</script>
