<template>
	<div>
		<h2>Home View!</h2>
		<!-- $route로 라우터 객체에 접근할 수 있음 -->
		<p>router path: {{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">
			about 페이지로 이동
		</button>
		<hr class="my-4" />
		<AppGrid :items="items" v-slot="{ item }">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
	</div>
	<hr class="my-4" />
	<h2>{{ $person.name }}</h2>
	<button class="btn btn-primary" @click="person.say">click person</button>
</template>
<script>
export default {
	// 컴포넌트 인스턴스는 set up 이전에 생성되기 때문에 가져오려면 created훅을 따로 만들어 사용
	created() {
		// console.log(this.$person.name);
		// this.$person.say();
	},
};
</script>
<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const items = ref(['사과', '딸기', '포도', '바나나']);
// useRouter를 이용해 router 객체를 가져와 사용할 수 있음
const router = useRouter();
const goAboutPage = () => {
	router.push({
		name: 'About',
	});
};
const person = inject('person');
</script>

<style lang="scss" scoped></style>
