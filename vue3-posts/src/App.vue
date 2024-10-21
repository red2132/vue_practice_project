<script setup>
import AppAlert from './components/app/AppAlert.vue';
import { useAlert } from './composables/alert';
import HeaderComponent from './layouts/HeaderComponent.vue';
import ViewComponent from './layouts/ViewComponent.vue';
const { alerts } = useAlert();
</script>

<template>
	<HeaderComponent />
	<ViewComponent />
	<AppAlert :items="alerts" />
</template>
