<template>
  <div class="container">
    <Item 
      v-for="item in list" 
      :key="item.index" 
      :title="item.title" 
      :content="item.content"
      :type="item.type" 
    />
  </div>
</template>
<script>
import Item from '@/components/Item.vue';
export default {
  components: {
    Item
  },
  data() {
    return {
      // TODO: replace this with your api data
      list: [
        {
          index: '1',
          type: 'normal',
          title: '行政資訊',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '2',
          type: 'student',
          title: '學生專區',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '3',
          type: 'normal',
          title: '行政資訊',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '4',
          type: 'special',
          title: '特殊活動',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '5',
          type: 'student',
          title: '學生專區',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '6',
          type: 'normal',
          title: '行政資訊',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '7',
          type: 'special',
          title: '特殊活動',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '8',
          type: 'normal',
          title: '行政資訊',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '9',
          type: 'normal',
          title: '行政資訊',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        },
        {
          index: '10',
          type: 'special',
          title: '特殊活動',
          content: '臺灣藝術大學表演藝術學院大關國際表演藝術節-2023 [勾心鬥角一跨界藝象4.0] 即將登場亮相！'
        }
      ]
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  justify-items: center;
  padding: 64px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>