<template>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 컴포넌트 메시지');
		// context.slots
		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>