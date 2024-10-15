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
		<AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
	</div>
</template>
<script setup>
import { getPostById, updatePost } from '@/api/posts';
import AppAlert from '@/components/app/AppAlert.vue';
import PostForm from '@/components/Posts/PostForm.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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

		// tnwjd 후, list 화면으로 이동
		//router.push({ name: 'PostList' });
		vAlert('수정이 완료되었습니다!', 'success');
	} catch (error) {
		console.error(error);
		vAlert('네트워크 오류');
	}
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });

//alert 관련
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('error');

const vAlert = (message, type = 'error') => {
	showAlert.value = true;
	alertMessage.value = message;
	alertType.value = type;
	setTimeout(() => {
		showAlert.value = false;
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
