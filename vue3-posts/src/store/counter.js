import { defineStore } from 'pinia';

// defineStore의 첫 파라미터는 고유한 아이디, 그다음은 옵션
export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 1,
	}),
	getters: {
		doubleCount: state => state.counter * 2,
	},
	actions: {
		// 화살표함수는 this가 상위 스코프를 가리키기 때문에 함수 형식 사용
		increment() {
			this.counter++;
		},
	},
});
