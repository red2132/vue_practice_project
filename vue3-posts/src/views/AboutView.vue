<template>
	<div>
		<h2>About View!</h2>
		<p>router path: {{ $route.path }}</p>
		<button class="btn btn-primary" @click="goHomePage">홈으로 이동</button>
		<hr />
		<h2>store</h2>
		<p>Counter: {{ counter }}</p>
		<p>Double Counter: {{ doubleCount }}</p>
		<button @click="increment()">up!</button>
	</div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useCounterStore();
// store는 reactive 객체로, 그냥 받으면 반응성을 잃으므로, storeToRefs로 받음
const { counter, doubleCount } = storeToRefs(store);
const { increment } = store;

const goHomePage = () => {
	router.push({
		name: 'home',
	});
};
</script>

<style lang="scss" scoped></style>
