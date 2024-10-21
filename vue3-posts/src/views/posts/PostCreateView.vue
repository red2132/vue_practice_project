<template>
	<div>
		<h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
		<hr class="my-4" />
		<!-- @submit.prevent: 새로 실행되지 않게(새로고침 or 새로 창) 하기 위해 -->
		<AppError v-if="error" :message="error.message" />
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
				<button class="btn btn-primary" :disabled="loading">
					<template v-if="loading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span role="status">저장 중...</span>
					</template>
					<template v-else>저장</template>
				</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import AppError from '@/components/app/AppError.vue';
import PostForm from '@/components/Posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 화면 상태 관리 반응성 변수
const loading = ref(false);
const error = ref(null);

const { vAlert, vSuccess } = useAlert();
const router = useRouter();
const post = ref({
	title: null,
	content: null,
});

const save = async () => {
	try {
		loading.value = true;
		// 데이터 추가 api 호출
		await createPost({
			...post.value,
			createdAt: Date.now(),
		});

		// 추가 후, list 화면으로 이동
		router.push({ name: 'PostList' });
		vSuccess('등록이 완료되었습니다');
	} catch (err) {
		vAlert(err.message);
		error.value = err;
	} finally {
		loading.value = false;
	}
};

const goListPage = () => router.push({ name: 'PostList' });
const visibleForm = ref(true);
</script>

<style lang="scss" scoped></style>
