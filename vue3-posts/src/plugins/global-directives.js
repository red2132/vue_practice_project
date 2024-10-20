import color from '@/directives/color';
import focus from '@/directives/focus';
export default {
	install(app) {
		app.directive('focus', focus); // 커스텀 디렉티브 등록
		app.directive('color', color);
	},
};
