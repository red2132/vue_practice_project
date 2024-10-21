<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			@submit.prevent="save"
			v-model:title="post.title"
			v-model:content="post.content"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" /> -->
	</div>
</template>
<script setup>
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/Posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { vAlert, vSuccess } = useAlert();
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const post = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	const { data } = await getPostById(id);
	setPost(data);
};

fetchPost();

const save = () => {
	try {
		const data = {
			...post.value,
			createdAt: Date.now(),
		};

		// 데이터 수정 api 호출
		updatePost(id, data);

		// 수정 후, 해당 화면으로 이동
		router.push({ name: 'PostDetail', params: { id } });
		vSuccess('수정이 완료되었습니다!');
	} catch (error) {
		vAlert(error.message);
	}
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
