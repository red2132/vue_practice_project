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
import AppError from '@/components/app/AppError.vue';
import PostForm from '@/components/Posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/composables/useAxios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { vAlert, vSuccess } = useAlert();
const router = useRouter();
const post = ref({
	title: null,
	content: null,
});
const { error, loading, execute } = useAxios(
	'/posts',
	{
		method: 'post',
	},
	{
		immediate: false,
		onSuccess: () => {
			// 추가 후, list 화면으로 이동
			router.push({ name: 'PostList' });
			vSuccess('등록이 완료되었습니다');
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
const save = async () => {
	execute({ ...post.value, createdAt: Date.now() });
};

const goListPage = () => router.push({ name: 'PostList' });
const visibleForm = ref(true);
</script>

<style lang="scss" scoped></style>
