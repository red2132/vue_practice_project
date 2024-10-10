<template>
	<div>
		<h2>Home View!</h2>
		<!-- $route로 라우터 객체에 접근할 수 있음 -->
		<p>router path: {{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">
			about 페이지로 이동
		</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// useRouter를 이용해 router 객체를 가져와 사용할 수 있음
const router = useRouter();
const goAboutPage = () => {
	router.push({
		name: 'About',
	});
};
</script>

<style lang="scss" scoped></style>
