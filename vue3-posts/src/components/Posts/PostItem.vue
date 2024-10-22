<template>
	<AppCard>
		<h5 class="card-title text-truncate">{{ title }}</h5>
		<p class="card-text text-truncate">
			{{ content }}
		</p>
		<p class="text-muted">
			{{ createDate }}
		</p>
		<template #footer>
			<div class="d-flex flex-row-reverse">
				<!--.stop으로 이벤트 전파 방지-->
				<button class="btn p-1" @click.stop="$emit('modal')">
					<i class="bi bi-chat"></i>
				</button>
				<button class="btn p-1" @click.stop="$emit('preview')">
					<i class="bi bi-app"></i>
				</button>
			</div>
		</template>
	</AppCard>
</template>

<script setup>
import { computed, inject } from 'vue';
import AppCard from '../app/AppCard.vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});
const dayFormat = inject('dayjs');
const createDate = computed(() =>
	dayFormat(props.createdAt).format('YYYY. MM. DD HH:mm:ss'),
);
defineEmits(['modal', 'preview']);
</script>

<style lang="scss" scoped></style>
