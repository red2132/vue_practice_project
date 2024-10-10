<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<!-- @submit.prevent: 새로 실행되지 않게(새로고침 or 새로 창) 하기 위해 -->
		<form @submit.prevent>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">제목</label>
				<input type="text" class="form-control" id="title" />
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea class="form-control" id="content" rows="3"></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goListPage = () => router.push({ name: 'PostList', params: { id } });
</script>

<style lang="scss" scoped></style>
