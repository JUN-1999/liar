<template>
	<div>我的</div>
	<button @click="show">显示</button>
	<ul id="img">
		<li>
			<img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" alt="" />
		</li>
		<li>
			<img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" alt="" />
		</li>
	</ul>

	<div v-for="(item, index) of imglist">
		<img
			style="width: 100px; height: 100px"
			:src="item"
			alt=""
			@click="open(imglist, index)"
		/>
	</div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Viewer from "viewerjs";
// import { ImagePreview } from "vant";
// import 'vant/es/image-preview/style';
let gallery;
onMounted(() => {
	gallery = new Viewer(document.getElementById("img"));
});

// function show() {
// 	ImagePreview({
// 		images: [
// 			"https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
// 			"https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
// 		],
// 		startPosition: 0,
// 		closeable: true,
// 	});
// }

// let imglist = [
// 	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
// 	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
// ];

// function open(png, index) {
// 	ImagePreview({ images: png, startPosition: index, closeable: true });
// }
</script>

<style lang="scss" scoped>
#img {
	margin-top: 200px;
}
</style>
