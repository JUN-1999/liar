<template>
	<router-view />
	<van-tabbar v-show="tabShow" v-model="active">
		<van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
		<van-tabbar-item replace to="/addLiar" icon="add-o">新增</van-tabbar-item>
		<van-tabbar-item replace to="/mine" icon="user-circle-o">我的</van-tabbar-item>
	</van-tabbar>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { Tabbar, TabbarItem } from "vant";
import { useStore } from "vuex";
import { computed, onUpdated } from "vue";

const store = useStore();

let tabShow = computed(() => store.state.tabShow);

let active = ref(0);
</script>

<style lang="scss">
#app{
	overflow: hidden;
}
@media screen and (min-width: 950px) {
	#app {
		width: 40%;
		margin: 0 auto;
	}
	.van-tabbar {
		width: 40%;
	}
	.van-tabbar--fixed {
		left: auto;
	}
}
</style>
