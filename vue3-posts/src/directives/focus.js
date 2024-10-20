// 커스텀 디렉티브
export default {
	mounted: el => {
		el.focus();
		// v-focus를 추가하면 HTML의 autofocus는 작동하지 않음
		// v-focus와 autofocus의 차이: autofocus는 첫 렌더링시 한번만 작동하지만, v-focus는 컴포넌트가 동적으로 변화해도 작동함
	},
};
