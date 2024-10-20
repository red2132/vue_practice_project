export default {
	install(app, options) {
		const person = {
			name: 'happy',
			say() {
				alert(this.name);
			},
			...options,
		};
		app.config.globalProperties.$person = person;
		app.provide('person', person); // setup에서 사용하기 위해 provide 사용
	},
};
