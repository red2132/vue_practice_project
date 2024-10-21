<template>
	<div>
		<h2>Post List</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		/>
		<hr class="my-4" />
		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="error.message" />
		<template v-else>
			<AppGrid :items="posts">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:created-at="item.createdAt"
						@click="goDetailPage(item.id)"
						@modal="openModal(item)"
					/>
				</template>
			</AppGrid>
			<AppPagination
				:current-page="params._page"
				:page-count="pageCount"
				@page="page => (params._page = page)"
			/>
		</template>
	</div>
	<Teleport to="#modal">
		<PostModal
			v-model="show"
			:title="modalTitle"
			:content="modalContent"
			:created-at="modalCreatedAt"
		/>
	</Teleport>
</template>

<script setup>
import PostItem from '@/components/Posts/PostItem.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import PostFilter from './PostFilter.vue';
import PostModal from '@/components/Posts/PostModal.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/composables/useAxios';

const router = useRouter();
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});
const {
	response,
	data: posts,
	error,
	loading,
} = useAxios('/posts', { params });

//pagination
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const goDetailPage = id => {
	router.push({
		// router 객체의 name으로 경로를, params를 통해 넣을 수 있음
		// query나 hash로도 가능
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

//modal
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
const show = ref(false);

const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
