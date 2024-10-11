<template>
  <div>
    <button v-on:click="increment">Click {{ state.count }}</button>
    <button v-on:click="deepIncrement">deep Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup () {
    const state = reactive({
      count: 0,
      deep: {
        count: 0
      }
    })

    const increment = () => {
      state.count++
    }
    const deepIncrement = () => {
      state.deep.count++
    }

    return {
      state,
      increment,
      deepIncrement,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>