<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup () {
    const book = reactive({
      author: 'Vue Team',
      year: '2024',
      title: 'vue3 Basic',
      description: 'vue3 공부하기',
      price: '10000'
    })

    // toRefs를 이용해 반응형을 잃지 않게 하기
    const { author, title } = toRefs(book);

    return {
      author, title, book
    }
  }
}
</script>

<style lang="scss" scoped>

</style>