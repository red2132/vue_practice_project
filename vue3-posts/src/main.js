import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// use()를 이용해 하위 자식 컴포넌트는 router 객체 사용 가능
// 또한 해당 router 객체는 페이지 이동, 현재 활성 라우트 정보에 접근하는데 사용할 수 있음
createApp(App).use(router).mount('#app');
