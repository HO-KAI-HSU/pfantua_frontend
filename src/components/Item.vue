<template>
  <div class="item-container">
    <a :href="link" target="_blank">
      <div class="title-wrapper" :style="style">{{ title }}</div>
      <div class="content-wrapper">{{ content }} </div>
    </a>
  </div>
</template>
<script>

export default {
  props: [
    "outerLink",
    "title",
    "content",
    "type"
  ],
  computed: {
    link() {
      console.log(this.outerLink);
      return this.outerLink;
    },
    style() {
      if (this.type === 'student') {
        return {
          backgroundColor: '#ccbe97'
        }
      }
      if (this.type === 'special') {
        return {
          backgroundColor: '#2f1b53'
        }
      }
      if (this.type === 'normal') {
        return {
          backgroundColor: '#9d232f'
        }
      }
    }
  }
};
</script>