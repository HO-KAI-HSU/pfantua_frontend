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
                    法規章程
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
                    首頁 > <span class="title-name">法規章程</span>
                </span>
                </div>
            </div>
        </div>
        <section class="download_box">
        <div class="container">
            <div class="doc_rule_regular">
                <h3>法規章程文件下載</h3>
                <table>
                    <tr v-for="regulation in Regulations">
                        <td class="doc_rule_text">{{ regulation.Title }}</td>
                        <td class="doc_rule_btn"><a class="blue_btn" :href="regulation.FileUrl" target="_blank">立即下載</a></td>
                    </tr>
                </table>
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
        Regulations: [],
      };
    },
    async mounted() {
      var response = await this.$api.getRegulationsList();
      this.Regulations = response;
      this.Ready = true;
    },
  };
  </script>