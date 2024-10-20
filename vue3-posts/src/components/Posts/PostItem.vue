<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">
			{{ content }}
		</p>
		<p class="text-muted">
			{{ createDate }}
		</p>
		<template #footer>
			<div class="d-flex flex-row-reverse">
				<!--.stop으로 이벤트 전파 방지-->
				<button class="btn p-0" @click.stop="$emit('modal')">
					<i class="bi bi-chat"></i>
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
defineEmits(['modal']);
</script>

<style lang="scss" scoped></style>
