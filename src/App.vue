<template>
  <div id="app" class="all">
    <Header v-if="FoundPageFlag" />
    <router-view @disable="FoundPageFlag = false"/>
    <Footer v-if="FoundPageFlag"/>
  </div>
</template>
<script>
import Vue from "vue";

Vue.prototype.setBase = function (cssClass) {
  var base = $("#app");
  var classList = base.attr("class").split(/\s+/);
  $.each(classList, function (index, item) {
    if (item !== "all") {
      base.removeClass(item);
    }
  });
  base.addClass(cssClass);
};

// const CURRENT_CLASSROOM_ID_SESSION_KEY = 'CURRENT_CLASSROOM_ID';

// Vue.prototype.setCurrentClassRoom = function (id) {
//   sessionStorage.setItem(CURRENT_CLASSROOM_ID_SESSION_KEY, id);
// };

// Vue.prototype.getCurrentClassRoom = function () {
//   return sessionStorage.getItem(CURRENT_CLASSROOM_ID_SESSION_KEY);
// };


import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  data() {
    return {
      FoundPageFlag: true,
    };
  },
  // metaInfo: {
  //   title: "故宮線上學校",
  // },
  name: "App",
  components: {
    Header,
    Footer
  },
}

</script>