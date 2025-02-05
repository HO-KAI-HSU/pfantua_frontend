<template>
  <div v-show="Ready" id="index">
    <div class="sectionRelatedResource">
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
            相關資源
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
              首頁 > <span class="title-name">相關資源</span>
          </span>
          <div class="container">
            <Item 
              v-for="item in list" 
              :outerLink="item.outerLink"
              :key="item.index" 
              :title="item.title" 
              :content="item.content"
              :type="item.type"
            />
          </div>
          <Pagination 
            :propsPage="Page" 
            :propsLimit="Limit" 
            :propsTotal="Total" 
            @switchPage="getListBySwitchPage"
            />
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Item from '@/components/Item.vue';
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    Item,
    Pagination
  },
  data() {
    return {
      Ready: false,
      Page: 1,
      Limit: 10,
      Total: 0,
      list: []
    }
  },
  async mounted() {
    var relatedResourceCategories = await this.$api.getRelatedResourceCategoryList();
    localStorage.setItem("relatedResourceCategories", JSON.stringify(relatedResourceCategories))
    var relatedResources = await this.$api.getRelatedResourceList(1, 10);
    this.list = relatedResources.RelatedResourceList.map((resource) => {
      return {
        outerLink: resource.RelatedResourceUrl,
        index: resource.RelatedResourceID,
        type: relatedResourceCategories.find((category) => category.RelatedResourceCategoryID === resource.RelatedResourceCategoryID).Key,
        title: relatedResourceCategories.find((category) => category.RelatedResourceCategoryID === resource.RelatedResourceCategoryID).Name,
        content: resource.Title
      }
    });
    this.Total = relatedResources.Total;
    this.Page = 1;
    this.Limit = 10;
    this.Ready = true;
  },
  methods: {
    async getListBySwitchPage(nowPage) {
      var relatedResourceCategories = JSON.parse(localStorage.getItem("relatedResourceCategories"));
      var relatedResources = await this.$api.getRelatedResourceList(nowPage, 10);
      this.list = relatedResources.RelatedResourceList.map((resource) => {
        return {
          outerLink: resource.RelatedResourceUrl,
          index: resource.RelatedResourceID,
          type: relatedResourceCategories.find((category) => category.RelatedResourceCategoryID === resource.RelatedResourceCategoryID).Key,
          title: relatedResourceCategories.find((category) => category.RelatedResourceCategoryID === resource.RelatedResourceCategoryID).Name,
          content: resource.Title
        }
      });
      this.Total = relatedResources.Total;
      this.Page = nowPage;
    },
  },
};
</script>