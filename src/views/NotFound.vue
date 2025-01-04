<template>
    <div>
     <h1> 404 Not Found </h1>
     <p> The page you are looking for does not exist. </p>
     <div class="logo">
        <router-link to="/" title="點擊回首頁(另開新視窗)" target="_blank"><img src="/img/logo.png" alt="故宮Logo圖"/></router-link>
      </div>
    </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      Lessons: [],
    };
  },
  async mounted() {
    await this.$emit('disable');
  },
};
</script>