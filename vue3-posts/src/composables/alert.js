import { ref } from 'vue';

// 컴포저블 함수는 use로 시작하는 것이 관례
// 컴포지션 API를 이용해서 상태 저장 비즈니스 로직을 호출하고 재사용하는 것
const alerts = ref([]); // 전역적으로 관리하기 위해 바깥으로 뺌 -> 실무에서는 상태관리 로직 사용
export function useAlert() {
	const vAlert = (message, type = 'error') => {
		alerts.value.push({ message, type });
		setTimeout(() => {
			alerts.value.shift();
		}, 2000);
	};
	const vSuccess = message => vAlert(message, 'success');
	return {
		alerts,
		vAlert,
		vSuccess,
	};
}
