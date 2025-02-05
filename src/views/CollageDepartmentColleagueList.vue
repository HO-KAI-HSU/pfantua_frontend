<template>
  <div v-show="Ready" id="index">
    <div class="sectionCollageInfoDepartmentColleague">
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
          <div v-for="(departmentColleague, index) in DepartmentColleagues">
            <div class='section-title-info' :key="departmentColleague.CollageDepartmentCode">
              <span class="section-title">
                {{ departmentColleague.CollageDepartmentName }}
              </span>
              <img src="img/collage_img/line-19.png"
                srcset="img/collage_img/line-19@2x.png 2x,
                        img/collage_img/line-19@3x.png 3x"
                class="section-title-line">
            </div>
            <div class="section-head-container">
              <div class="w3-row" v-for="(rowIndex) in (Math.ceil(departmentColleague.CollageColleagues.length / 2))" :key="rowIndex" :title="rowIndex">
                <div class="w3-col w3-container" v-for="(collageColleague, index) in departmentColleague.CollageColleagues" :key="collageColleague.CollageColleagueID" v-if="rowIndex == (Math.floor(index / 2) + 1)" :title="collageColleague.CollageColleagueID">
                  <router-link :to="`/collageDepartmentColleague/${collageColleague.CollageColleagueCode}`" title="點擊可進入師資資訊">
                    <div class='section-head-card-info'>
                      <div class='head-card-line'>
                      </div>
                      <div class='head-card-container'>
                        <span class='name'>
                          {{ collageColleague.Name }}
                        </span>
                        <span class='positionType'>
                          {{ collageColleague.PositionType }}
                        </span>
                        <div class='content'>
                            <span class="email">Email｜</span>{{ collageColleague.Email }}
                            </br>
                            <span class="phone">電話｜</span>{{ collageColleague.Phone }}
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      Ready: false,
      DepartmentColleagues: [],
      PositionType: ['professor', 'associate-professor', 'assistant-professor', 'lecturer', 'assistant', 'administrative-staff'],
      PositionTypeTw: ['教授', '副教授', '助理教授', '講師', '助理', '行政人員'],
    };
  },
  async mounted() {
    var response = await this.$api.getAllDepartmentColleagues();
    response.forEach((i) => {
      i.CollageColleagues.forEach((j) => {
        j.PositionType = this.PositionTypeTw[this.PositionType.indexOf(j.PositionType)];
      });
      this.DepartmentColleagues.push(i);
    });
    this.Ready = true;
  },
};
</script>
