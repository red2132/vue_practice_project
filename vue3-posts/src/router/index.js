import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
		name: 'Home',
	},
	{
		path: '/about',
		component: AboutView,
		name: 'About',
	},
	{
		path: '/posts',
		component: PostListView,
		name: 'PostList',
	},
	{
		path: '/posts/create',
		component: PostCreateView,
		name: 'PostCreate',
	},
	{
		// ':' 동적 라우팅
		path: '/posts/:id',
		component: PostDetailView,
		name: 'PostDetail',
	},
	{
		path: '/posts/:id/edit',
		component: PostEditView,
		name: 'PostEdit',
	},
	{
		// 정규식 사용해 오류 화면 출력
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			// path는 절대경로로 취급 /안 써도 됨
			{ path: '', name: 'NestedHome', component: NestedHomeView },
			{ path: 'one', name: 'NestedOne', component: NestedOneView },
			{ path: 'two', name: 'NestedTwo', component: NestedTwoView },
		],
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
