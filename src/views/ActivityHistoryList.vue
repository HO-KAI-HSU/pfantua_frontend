<template>
  <div v-show="Ready" id="index">
    <div class="sectionActivityHistoryList">
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
        <div class="section-background">
          <span class="section-nav">
            首頁 ><span class="title-name">活動集錦</span>
          </span>
          <div class="w3-row" v-for="(rowIndex) in (ActivityHistoryRows)" :key="rowIndex" :title="rowIndex">
            <div v-for="(activity, index) in ActivityHistoryList">			
              <div class="w3-col w3-center" :key="activity.ActivityID" v-if="rowIndex == (Math.floor(index / 3) + 1)" :title="activity.ActivityID">        
                <router-link :to="`/activityHistory/${activity.ActivityID}`" title="點擊可進入活動集錦內容">
                  <div class="section-item">
                    <img src="img/index_img/4-0-2@2x.png" alt="活動集錦主圖片"
                      class="section-item-img">
                      </br>
                      <span class="section-item-date">{{ activity.CreateTime | dateFormat }}</span>
                      </br>
                      <span class="section-item-title">{{ activity.Title }}</span>
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
      ActivityHistoryList: [],
      ActivityHistoryRows: 0
    };
  },
  async mounted() {
    var response = await this.$api.getActivityHistoryList(1, 9);
    this.ActivityHistoryList = response.ActivityHistoryList;
    this.ActivityHistoryRows = Math.ceil(response.ActivityHistoryList.length / 3);
    this.Total = response.Total;
    this.Page = 1;
    this.Limit = 9;
    this.Ready = true;
  },
  methods: {
    async getListBySwitchPage(nowPage) {
      var response = await this.$api.getActivityHistoryList(nowPage, 9);
      this.ActivityHistoryList = response.ActivityHistoryList;
      this.ActivityHistoryRows = Math.ceil(response.ActivityHistoryList.length / 3);
      this.Total = response.Total;
      this.Page = nowPage;
    },
  },
};
</script>
