<template>
	<div>
		<div
			class="text"
			:class="classObject"
		>
			텍스트 입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="errorToggle">toggleError</button>
	</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
    const hasError = ref(false);

		// const classObject = reactive({
		// 	active: isActive,
		// 	'text-danger': hasError,
		// });

    const classObject = computed(() => {
      return {
			active: isActive.value,
			'text-danger': hasError.value,
		}
    })

		const toggle = () => {
			isActive.value = !isActive.value;
		};
    const errorToggle = () => {
			hasError.value = !hasError.value;
		};
		return { isActive, hasError, toggle, errorToggle, classObject };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>