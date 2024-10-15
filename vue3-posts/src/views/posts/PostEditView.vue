<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent="save">
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">제목</label>
				<input
					type="text"
					class="form-control"
					id="title"
					v-model="post.title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					class="form-control"
					id="content"
					rows="3"
					v-model="post.content"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form>
	</div>
</template>
<script setup>
import { getPostById, updatePost } from '@/api/posts';
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
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
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
