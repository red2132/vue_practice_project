<template>
	<div>
		<h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
		<hr class="my-4" />
		<!-- @submit.prevent: 새로 실행되지 않게(새로고침 or 새로 창) 하기 위해 -->
		<PostForm
			v-if="visibleForm"
			@submit.prevent="save"
			v-model:title="post.title"
			v-model:content="post.content"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import PostForm from '@/components/Posts/PostForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const post = ref({
	title: null,
	content: null,
});

const save = () => {
	try {
		const data = {
			...post.value,
			createdAt: Date.now(),
		};

		// 데이터 추가 api 호출
		createPost(data);

		// 추가 후, list 화면으로 이동
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};

const goListPage = () => router.push({ name: 'PostList' });
const visibleForm = ref(true);
</script>

<style lang="scss" scoped></style>
