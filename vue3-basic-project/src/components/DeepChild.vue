<template>
  <div class="card">
    <div class="card-header">Deep child components</div>
    <div class="card-body">
      <p>{{ staticMessage }}</p>
      <p>{{ message }}</p>
      <p>{{ count }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup () {
    const staticMessage = inject('static-message', 'default message');
    const message = inject('message');
    const count = inject('count');
    return {
      staticMessage,
      message,
      count
    }
  }
}
</script>

<style lang="scss" scoped>

</style>