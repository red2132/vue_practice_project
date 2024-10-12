<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">Provide Inject component</div>
      <div class="card-body">
        <button @click="count++">count up</button>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import Child from './Child.vue';

export default {
  components: {
    Child
  },
  setup () {
    const staticMessage = 'static message';
    const message = ref('message');
    const count = ref(10);
    
    // provide를 이용해 특정 정보 내보냄
    provide('static-message', staticMessage);
    provide('message', message);
    provide('count', count);
    
    return {
      count
    }
  }
}
</script>

<style lang="scss" scoped>

</style>