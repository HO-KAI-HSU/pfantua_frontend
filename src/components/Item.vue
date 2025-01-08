<template>
  <div class="item-container">
    <div class="title-wrapper" :style="style">{{ title }}</div>
    <div class="content-wrapper">{{ content }} </div>
  </div>
</template>
<script>

export default {
  props: [
    "title",
    "content",
    "type"
  ],
  computed: {
    style() {
      if (this.type === 'student') {
        return {
          backgroundColor: 'red'
        }
      }
      if (this.type === 'special') {
        return {
          backgroundColor: 'purple'
        }
      }

      return {
        backgroundColor: 'red'
      }
    }
  }
};
</script>
<style scoped lang="sass">
.item-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.title-wrapper {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  padding: 4px 16px;
  background-color: red;
  color: white;
}
.content-wrapper {
  display: flex;
  border-radius: 0px 0px 0px 64px;
  border: 1px solid #707070;
  margin-top: 16px;
  padding: 42px 24px;
  max-width: 620px;
  max-height: 165px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16), inset 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>