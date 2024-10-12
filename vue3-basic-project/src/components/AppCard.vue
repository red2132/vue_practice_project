<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot :child-message="childMessage"></slot>
    </div>
    <div class="card-footer text-muted" v-if="hasFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup (props, {slots}) {
    const childMessage = ref('자식 메시지');

    // setup의 context에서 slot 정보 가져올 수 있음
    const hasFooter = computed(() => {
      !!slots.footer
    })
    return {
      childMessage,
      hasFooter
    }
  }
}
</script>

<style lang="scss" scoped>

</style>