<template>
  <div v-show="Ready" id="index">
    <div class="slideLogin">
      <div class="mainSlide">
          <div class="slide" v-for="b in BannerList" :key="b.BannerID">
            <a :href="b.TargetUrl" target="_blank" tltle="Banner資訊連結">
              <img :src="b.ImageUrl | imageCDN" alt="課程主圖圖示(另開新視窗)" class="img"/>
            </a>
          </div>
      </div>
    </div>
    <section class="section6">
      <div class="wrapper">
        <div class="item-container" v-for="(collageDepartment, index) in CollageDepartmentList">
          <div class="item-dept-container" :key="collageDepartment.CollageDepartmentID">
            <a :href="collageDepartment.CollageDepartmentLinkUrl" target="_blank" :title="collageDepartment.Name">
              <span class="item-dept">{{ collageDepartment.Name }}</span>
            </a>
            <img src="img/index_img/line-15.png" class="item-dept-line" v-if="index != (CollageDepartmentList.length - 1)">
          </div>
        </div>
      </div>
    </section>
    <section class="section7">
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
      <div class="wrapper-activity">
        <div class="w3-row">
          <div v-for="(activity, index) in ActivityList">			
            <div class="w3-col w3-center" :key="activity.NewsID" :title="activity.NewsID">
              <router-link :to="`/news/${activity.NewsID}`" title="點擊可進入活動內容">
                <div class="section-activity-item">
                  <img :src="activity.ImageUrl|imageCDN" alt="活動資訊主圖片"
                    class="section-activity-item-img">
                  </br>
                  <div class="section-activity-item-content">
                    <span class="section-activity-item-date">{{ activity.NewsTime }}</span>
                    </br>
                    <span class="section-activity-item-title">{{ activity.Title }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="more-container">
          <router-link to="/activityList" title="點擊可進入活動資訊列表">
            <div class="section-more-btn">
              <span class="section-more-title">更多內容</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="section8">
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
        <div class="w3-row" v-for="(rowIndex) in 2" :key="rowIndex" :title="rowIndex">
          <div v-for="(news, index) in NewsList">	
            <div class="w3-col w3-container" :key="news.NewsID" v-if="rowIndex == (Math.floor(index / 2) + 1) && news.NewsID.indexOf('nan') == -1" :title="news.NewsID">
              <router-link :to="`/news/${news.NewsID}`" title="點擊可進入活動內容">
                <div class="section-news-date-container">
                    <span class="year">{{ news.NewsTime | toYYYY }}</span>
                    </br>
                    <span class="date">{{ news.NewsTime | toMMDD }}</span>
                </div>
                <div class="section-news-content-container">
                    <span class="content">{{ news.Title }}</span>
                </div>
              </router-link>
            </div>
            <div class="w3-col-nan w3-center" :key="news.NewsID" v-if="rowIndex == (Math.floor(index / 2) + 1) && news.NewsID.indexOf('nan') >= 0" :title="news.NewsID">        
            </div>
          </div>
        </div>
      </div>	
      <div class="wrapper">
        <div class="more-container">
          <router-link to="/newsList" title="點擊可進入最新消息列表">
            <div class="section-more-btn">
                <span class="section-more-title">更多內容</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="wrapper">
        <div class="wrapper-gap">
        </div>
      </div>	
    </section>
  </div>
</template>
<script>

export default {
  data() {
    return {
      Ready: false,
      BannerList: [],
      CollageDepartmentList: [],
      ActivityList: [],
      NewsList: [],
    };
  },
  async mounted() {
    var response = await this.$api.getHomeInfo();
    this.BannerList = response.BannerList;
    this.CollageDepartmentList = response.CollageDepartmentList;
    this.ActivityList = response.ActivityList;
    this.NewsList = response.NewsList;
    this.addNewsEmptyGrid();

    this.$nextTick(() => {
      $(".mainSlide").slick({
        arrows: false,
        autoplay: true,
      });
    });

    this.Ready = true;
    this.loadCustomJs();
  },
  methods: {
    addNewsEmptyGrid() {
      console.log("NewsList.length Before: " + this.NewsList.length);
      console.log("ColCount : " + 2);
      if ((this.NewsList.length % 2) != 0) {
        var addCount = (2 - (this.NewsList.length % 2));
        console.log("Add Count : " + addCount);
        for (var i = 0; i < addCount; i++) {
          this.NewsList.push(new Object(
            {
              NewsID: "nan" + i,
            }
          ));
        }
      }
      console.log("NewsList.length After: " + this.NewsList.length);
    }    
  },
};
</script>
