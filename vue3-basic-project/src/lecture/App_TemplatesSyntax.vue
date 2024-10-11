<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">click</button>
    <hr>
    <h2>v-html 차이 이해하기</h2>
    <p>{{ rawHtml }}</p>
    <p>html을 동적으로 렌더링하면 xss 취약점이 있음</p>
    <p v-html="rawHtml"></p>
    <hr>
    <h2>속성 바이닝</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려봐요~</div>
    <input v-bind="attrs" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const message = ref('안녕하세요')
    const rawHtml = ref('<strong>안녕하세요</strong>')
    const dynamicTitle = ref('해피해요~')
    const attrs =ref({
      type: 'password',
      value: '1234567',
      disabled: false
    })

    return {
      message,
      rawHtml,
      dynamicTitle,
      attrs
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
