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
        <div class="w3-center">
          <div class="collageInfo-tabs">
            <router-link to="#" v-scroll-to="'#info'" class="courseStudentPage" title="點擊可跳至學院簡介">
              <span class="tabs-name">學院簡介</span>
            </router-link>
            <router-link to="#" v-scroll-to="'#history'" class="courseStudentPage" title="點擊可跳至院景沿革">
              <span class="tabs-name">院景沿革</span>
            </router-link>
            <router-link to="#" v-scroll-to="'#newHead'" class="courseStudentPage" title="點擊可跳至現任院長">
              <span class="tabs-name">現任院長</span>
            </router-link>
            <router-link to="#" v-scroll-to="'#oldHead'" class="courseStudentPage" title="點擊可跳至歷屆院長">
              <span class="tabs-name">歷屆院長</span>
            </router-link>
            <router-link to="/collageDepartmentColleagueList" class="courseStudentPage" title="點擊可跳至師資陣容">
              <span class="tabs-name">師資陣容</span>
            </router-link>
          </div>
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
          <div class='section-title-info' id="info">
            <span class="section-title">
              學院簡介
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-title-line">
          </div>
          <div class='section-content-container'>
            <span class="section-content" v-html="CollageIntroduction">
            </span>
          </div>
          <div class='section-title-info' id="history">
            <span class="section-title">
              院景沿革
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-title-line">
          </div>
          <div class='section-content-container'>
            <span class="section-content" v-html="CollageHistory">
            </span>
          </div>
          <div class='section-title-info' id="newHead">
            <span class="section-title">
              現任院長
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-title-line">
          </div>
          <div class="section-head-container">
            <div class="w3-row">
              <div class="w3-col w3-container">
                <router-link :to="`/collageHead/${CollageHead.CollageColleagueCode}`" title="點擊可進入現任院長資訊">
                  <div class='section-head-card-info'>
                    <div class='head-card-line'>
                    </div>
                    <div class='head-card-container'>
                      <span class='name'>
                        {{ CollageHead.Name }}
                      </span>
                      <span class='positionType'>
                        {{ CollageHead.PositionType }}
                      </span>
                      <div class='content'>
                          <span class="email">Email｜</span>{{ CollageHead.Email }}
                          </br>
                          <span class="phone">電話｜</span>{{ CollageHead.Phone }}
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class='section-title-info' id="oldHead">
            <span class="section-title">
              歷任院長
            </span>
            <img src="img/collage_img/line-19.png"
              srcset="img/collage_img/line-19@2x.png 2x,
                      img/collage_img/line-19@3x.png 3x"
              class="section-title-line">
          </div>
          <div class="section-head-container">
            <div class="w3-row" v-for="(rowIndex) in (CollageHistoryHeadRows)" :key="rowIndex" :title="rowIndex">
              <div class="w3-col w3-container" v-for="(head, index) in CollageHistoryHeads" :key="head.CollageHeadID" v-if="rowIndex == (Math.floor(index / 2) + 1)" :title="head.CollageHeadID">
                <router-link :to="`/collageHistoryHead/${head.CollageColleagueCode}`" title="點擊可進入歷任院長資訊">
                  <div class='section-head-card-info'>
                    <div class='head-card-line'>
                    </div>
                    <div class='head-card-container'>
                      <span class='name'>
                        {{ head.Name }}
                      </span>
                      <span class='positionType'>
                        {{ head.PositionType }}
                      </span>
                      <div class='content'>
                          <span class="email">Email｜</span>{{ head.Email }}
                          </br>
                          <span class="phone">電話｜</span>{{ head.Phone }}
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CollageHead from './CollageHead.vue';

export default {
  data() {
    return {
      Ready: false,
      Collage: {},
      CollageHeadHistorys: [],
      CollageHead: {},
      CollageHistoryHeads: [],
      CollageIntroduction: "",
      CollageHistory: "",
      CollageHistoryHeadRows: 0,
      PositionType: ['professor', 'associate-professor', 'assistant-professor', 'lecturer', 'assistant', 'administrative-staff'],
      PositionTypeTw: ['教授', '副教授', '助理教授', '講師', '助理', '行政人員'],
    };
  },
  async mounted() {
    var response = await this.$api.getCollageInfo();
    this.Collage = response.Collage;
    this.CollageHeadHistorys = response.CollageHeadHistorys;
    this.CollageIntroduction = response.Collage.CollageIntroduction;
    this.CollageHistory = response.Collage.CollageHistory;
    this.CollageHead = response.CollageHeadHistorys
    this.CollageHeadHistorys.forEach((i) => {
        i.PositionType = this.PositionTypeTw[this.PositionType.indexOf(i.PositionType)];
        if (i.IsHead == "1") {
          this.CollageHead = i;
        } else {
          this.CollageHistoryHeads.push(i);
        }
      });
    this.CollageHistoryHeadRows = Math.ceil(this.CollageHistoryHeads.length / 2);
    this.Ready = true;
  },
};
</script>
