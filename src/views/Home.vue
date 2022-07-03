<template>
	<div id="homeBox">
		<div class="sticky-top">
			<header-components>
				<template v-slot:center>
					<div class="search">
						<van-icon name="search" />
						<input v-model="inputValue" type="text" placeholder="请输入搜索关键词" />
						<button @click="cancelBtn">取消</button>
					</div>
				</template>
			</header-components>
			<div class="tabs">
				<div
					class="tabItem"
					@click="changTab(0)"
					:class="0 == activeIndex ? 'tabActive' : ''"
				>
					最近上传
				</div>
				<div
					class="tabItem"
					@click="changTab(1)"
					:class="1 == activeIndex ? 'tabActive' : ''"
				>
					已经实锤
				</div>
				<div
					class="tabItem"
					@click="changTab(2)"
					:class="2 == activeIndex ? 'tabActive' : ''"
				>
					存在争议
				</div>
			</div>
		</div>

		<div class="newsInfo">
			<info-item @click="infoDetail(index)" v-for="index in 6"></info-item>
		</div>
	</div>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import { Icon, Tabbar, TabbarItem } from "vant";
import InfoItem from "@/components/InfoItem.vue";
import HeaderComponents from "@/components/HeaderComponents.vue";
let inputValue = ref("");

function cancelBtn() {
	console.log(inputValue.value);
}

let activeIndex = ref(0);
function changTab(num) {
	activeIndex.value = num;
	// 请求不同的数据，改变内容
}

const router = useRouter();
function infoDetail(id) {
	router.push(`/infodetail/${id}`);
}
</script>
<style lang="scss" scoped>
.sticky-top {
	position: sticky;
	top: 0;
}
.search {
	background-color: #f7f8fa;
	font-size: 0.4rem;
	padding: 0.2667rem;
	input {
		border: none;
		background-color: #f7f8fa;
		width: 80%;
	}
	button {
		border: none;
		background-color: #fff;
	}
}

.tabs {
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	background-color: #ffffff;
	font-size: 0.4rem;
	.tabItem {
		padding-bottom: 0.2667rem;
	}
}
.tabActive {
	border-bottom: 2px solid #1989fa;
}
.newsInfo {
	margin-bottom: 1.6rem;
}

@media screen and (min-width: 950px) {
}
</style>
