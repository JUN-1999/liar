import { createStore } from "vuex";

export default createStore({
	state: {
		tabShow: true,
	},
	mutations: {
		SETTABSHOW(state, payloda) {
			state.tabShow = payloda;
		},
	},
	actions: {},
	modules: {},
});
