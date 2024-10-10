<template>
	<div>
		<h2>About View!</h2>
		<p>router path: {{ $route.path }}</p>
		<button class="btn btn-primary" @click="goHomePage">홈으로 이동</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goHomePage = () => {
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
