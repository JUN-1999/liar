import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import 'vant/lib/index.css'
import "viewerjs/dist/viewer.css";

createApp(App)
	.use(store)
	.use(router)
	.mount("#app");
