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
          <div class="wrapper-activityHistory">
            <div class="w3-row" v-for="(rowIndex) in (ActivityHistoryRows)" :key="rowIndex" :title="rowIndex">
              <div v-for="(activity, index) in ActivityHistoryList">			
                <div class="w3-col w3-center" :key="activity.ActivityID" v-if="rowIndex == (Math.floor(index / ColCount) + 1)" :title="activity.ActivityID">        
                  <router-link :to="`/activityHistory/${activity.ActivityID}`" title="點擊可進入活動集錦內容">
                    <div class="section-item">
                      <img src="img/index_img/4-0-2@2x.png" alt="活動集錦主圖片"
                        class="section-item-img">
                        </br>
                        <div class="section-item-content">
                          <span class="section-item-date">{{ activity.CreateTime | dateFormat }}</span>
                          </br>
                          <span class="section-item-title">{{ activity.Title }}</span>
                        </div>
                    </div>
                  </router-link>
                </div>
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
let mql = null;
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
      ActivityHistoryRows: 0,
      ColCount: 3,
      Width: 0
    };
  },
  async mounted() {
    var response = await this.$api.getActivityHistoryList(1, 9);
    this.ActivityHistoryList = response.ActivityHistoryList;
    this.ActivityHistoryRows = Math.ceil(response.ActivityHistoryList.length / this.ColCount);
    this.Total = response.Total;
    this.Page = 1;
    this.Limit = 9;
    this.Ready = true;
    window.addEventListener('resize', this.handleResize);
  },
  watch: {
    Width: {
      immediate: true,
      deep: true,
      handler(val) {
        var w = val;
        if (980 <= w && w < 1365) {
          this.ColCount = 2;
        } else if (0 <= w && w < 980) {
          this.ColCount = 1;
        } else {
          this.ColCount = 3;
        }
        console.log("螢幕寬度為：" + this.Width);
        console.log("欄數：" + this.ColCount);
        this.getListBySwitchPage(this.Page);
      }
    }
  },
  methods: {
    async getListBySwitchPage(nowPage) {
      var response = await this.$api.getActivityHistoryList(nowPage, 9);
      this.ActivityHistoryList = response.ActivityHistoryList;
      this.ActivityHistoryRows = Math.ceil(response.ActivityHistoryList.length / this.ColCount);
      this.Total = response.Total;
      this.Page = nowPage;
    },
    async handleResize() {
      this.Width = window.innerWidth;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>
