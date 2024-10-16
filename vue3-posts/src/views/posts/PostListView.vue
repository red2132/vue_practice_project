<template>
	<div>
		<h2>Post List</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		/>
		<hr class="my-4" />
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
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import { computed } from 'vue';
import AppPagination from '@/components/app/AppPagination.vue';
import AppGrid from '@/components/app/AppGrid.vue';
import PostFilter from './PostFilter.vue';
import PostModal from '@/components/Posts/PostModal.vue';

const posts = ref([]);
const router = useRouter();
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});
//pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);
const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (error) {
		console.error(error);
	}
};

watchEffect(fetchPosts);

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

fetchPosts();

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
