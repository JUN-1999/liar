import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/mine",
		name: "Mine",
		component: () => import(/* webpackChunkName: "mine" */ "../views/Mine.vue"),
	},
	{
		path: "/infodetail/:id",
		name: "InfoDetail",
		component: () =>
			import(/* webpackChunkName: "infodetail" */ "../views/InfoDetail.vue"),
	},
	{
		path: "/addLiar",
		name: "AddLiar",
		component: () =>
			import(/* webpackChunkName: "addLiar" */ "../views/AddLiar.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		let showTabPath = ["/", "/home", "/mine", "/addLiar"];
		if (showTabPath.includes(to.path)) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
		// 始终滚动到顶部
	},
});

router.beforeEach((to, from) => {
	let showTabPath = ["/", "/home", "/mine", "/addLiar"];
	if (showTabPath.includes(to.path)) {
		localStorage.setItem("tabShow", true);
		store.commit("SETTABSHOW", true);
	} else {
		store.commit("SETTABSHOW", false);
		localStorage.setItem("tabShow", false);
	}
	return true;
});

export default router;
