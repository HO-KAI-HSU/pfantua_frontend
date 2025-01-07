<template>
  <div v-show="Ready" id="index">
    <div class="sectionCollageDepartment">
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
            系所單位
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
            首頁 > <span class="title-name">系所單位</span>
          </span>
          <div v-for="(department, index) in CollageDepartments">
            <a :href="department.CollageDepartmentLinkUrl" target="_blank" :title="department.CollageDepartmentName">
              <div class='section-title-info' :key="department.CollageDepartmentCode">
                <span class="section-title">
                  {{ department.Name }}
                </span>
                <!-- <img src="img/collage_img/line-19.png"
                  srcset="img/collage_img/line-19@2x.png 2x,
                          img/collage_img/line-19@3x.png 3x"
                  class="section-title-line"> -->
              </div>
              <div class='head-card-line'>
              </div>
              <div class ="section-content">
                {{ department.Content }}
              </div>
            </a>
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
      CollageDepartments: [],
    };
  },
  async mounted() {
    var response = await this.$api.getCollageDepartmentList();
    this.CollageDepartments = response;
    this.Ready = true;
  },
};
</script>
