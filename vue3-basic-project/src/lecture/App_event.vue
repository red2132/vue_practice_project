<template>
  <div>
    <button @click="printEventInfo('hello Vue3', $event)">
      안녕 vue3!!
    </button>
    <hr>
    <input type="text" @keyup="onKeyHandler">
  </div>
</template>

<script>
export default {
  setup () {
    const printEventInfo =(message, event) => {
      console.log('message: '+message)
      console.log('event.target: '+event.target)
      console.log('event.target: '+event.target.tagName)
    }

    const onKeyHandler = event => {
      console.log('event key: '+ event.key)
    }

    return {
      printEventInfo,
      onKeyHandler
    }
  }
}
</script>

<style lang="scss" scoped>

</style>