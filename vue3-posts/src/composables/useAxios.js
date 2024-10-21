import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
const defaultConfig = {
	method: 'get',
};

const defaultOptions = {
	immediate: true,
};

export const useAxios = (url, config = {}, options = {}) => {
	const response = ref(null);
	const data = ref(null);
	const error = ref(null);
	const loading = ref(false);
	const { params } = config; // config 안에 있던 params를 꺼내 인자 자체를 반환
	const { onSuccess, onError, immediate } = {
		...defaultOptions,
		...options,
	};

	const execute = body => {
		// 데이터 초기화
		data.value = null;
		error.value = null;
		loading.value = true;

		// 데이터 받아오기
		axios(url, {
			...defaultConfig,
			...config,
			params: unref(params),
			data: typeof body === 'object' ? body : {},
		})
			.then(res => {
				// 연결 성공 시
				response.value = res;
				data.value = res.data;
				if (onSuccess) {
					onSuccess(res);
				}
			})
			.catch(err => {
				error.value = err;
				if (onError) {
					onError(err);
				}
			})
			.finally(() => {
				loading.value = false;
			});
	};
	if (isRef(params)) {
		watchEffect(execute);
	} else {
		if (immediate) {
			execute();
		}
	}
	return {
		response,
		data,
		error,
		loading,
		execute,
	};
};
