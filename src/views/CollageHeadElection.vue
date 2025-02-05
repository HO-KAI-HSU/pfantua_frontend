<template>
  <div v-show="Ready" id="index">
      <div class="sectionFile">
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
                  院長遴選
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
                    首頁 > <span class="title-name">院長遴選</span>
                </span>
                <section class="download_box">
                    <div class="container">
                        <div class="doc_rule_regular">
                            <h3>{{ CollageHeadElection.Title }}</h3>
                            <table>
                                <tr v-for="file in CollageHeadElectionFiles">
                                    <td class="doc_rule_text">{{ file.Name }}</td>
                                    <td class="doc_rule_btn"><a class="blue_btn" :href="file.Url|imageCDN" target="_blank">立即下載</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
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
      CollageHeadElection: {},
      CollageHeadElectionFiles: [],
    };
  },
  async mounted() {
    var response = await this.$api.getCollageHeadElectionInfo();
    this.CollageHeadElection = response;
    this.CollageHeadElectionFiles = response.CollageHeadElectionFiles;
    console.log(this.CollageHeadElectionFiles);
    this.Ready = true;
  },
};
</script>