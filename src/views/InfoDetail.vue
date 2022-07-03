<template>
	<div>
		<!-- 顶部返回 -->
		<div class="sticky-top">
			<div class="backBtn">
				<button @click="$router.go(-1)">返回</button>
			</div>
		</div>

		<!-- 楼主举报信息 -->
		<div class="info">
			<div class="user_info">
				<div class="user_img">
					<img src="@/assets/1.png" alt="" />
				</div>
				<div class="user_text">
					<div class="number">1173943332(2)</div>
					<div class="date">2022-06-21</div>
				</div>
			</div>
			<div class="short_info">
				<div v-html="'<span>简介内容</span>'"></div>
			</div>
			<div class="detail_info">
				<div><span>详细内容详细内容详细内容详细内容</span></div>
				<div><span>详细内容详细内容详细内容详细内容</span></div>
				<div><span>详细内容详细内容详细内容详细内容</span></div>
				<img src="@/assets/img_01.png" alt="" />
				<img src="@/assets/img_02.png" alt="" />
				<img src="@/assets/img_03.png" alt="" />
			</div>
		</div>
		<!-- 评论信息 -->
		<div class="comment">
			<div class="tabs">
				<div
					@click="changeTab('commentdisagree')"
					class="tab agree"
					:class="bigagreetext == 'agree' ? 'bigagree' : ''"
					:style="'width:' + agreeWidth + '%;'"
				>
					正方
				</div>
				<div
					@click="changeTab('commentagree')"
					class="tab disagree"
					:class="bigagreetext == 'disagree' ? 'disbigagree' : ''"
					:style="'width:' + disagreeWidth + '%;'"
				>
					反方
				</div>
			</div>
		</div>
		<!-- 评论循环 -->
		<div class="commentList">
			<!-- 同意评论 -->
			<div
				class="commentagree"
				:style="'width:' + (agreeWidth-1) + '%;'"
				:class="notshow == 'commentagree' ? 'notshow' : ''"
			>
				<comment-item :index="index" :key="index" v-for="index in 6"></comment-item>
			</div>
			<!-- 不同意评论 -->
			<div
				class="commentdisagree"
				:style="'width:' + (disagreeWidth-1)  + '%;'"
				:class="notshow == 'commentdisagree' ? 'notshow' : ''"
			>
				<comment-item :index="index" :key="index" v-for="index in 3"></comment-item>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import HeaderComponents from "@/components/HeaderComponents.vue";
import CommentItem from "@/components/CommentItem.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Viewer from "viewerjs";

// 获取窗口宽度
let winWidth = 0;
if (window.innerWidth) {
	winWidth = window.innerWidth;
} else if (document.body && document.body.clientWidth) {
	winWidth = document.body.clientWidth;
}

// 查看大图
let gallery;
onMounted(() => {
	// 插件查看图片
	gallery = new Viewer(document.querySelector(".detail_info"));
});

// 获取路由传递过来的值
const route = useRoute();
console.log("id:", route.params.id);

let ZF = 6; //正方评论
let FF = 3; //反方评论
// 哪边的评论多
let bigagreetext = ref("agree");
ZF > FF ? (bigagreetext.value = "agree") : (bigagreetext.value = "disagree");

if (Math.abs((ZF - FF) / (ZF + FF)) * 100 < 7) bigagreetext.value = "none";

// 不显示正方还是反方
let notshow = ref("commentdisagree");
if (winWidth > 950) {
	notshow.value = "allshow";
}
// 切换标签
function changeTab(text) {
	if (winWidth > 950) return;
	notshow.value = text;
}

let agreeWidth = 100;
let disagreeWidth = 100;
if (winWidth > 950) {
	agreeWidth = parseInt((ZF / (ZF + FF)) * 100);
	agreeWidth <= 40 ? (agreeWidth = 40) : agreeWidth;
	agreeWidth >= 60 ? (agreeWidth = 60) : agreeWidth;
	disagreeWidth = 100 - agreeWidth;
}
</script>

<style lang="scss" scoped>
.notshow {
	display: none;
}
.sticky-top {
	position: sticky;
	top: 0;
}

.backBtn {
	font-size: 0.4rem;
	height: 1.2rem;
	width: 1.8rem;
	background-color: pink;
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		width: 100%;
		height: 100%;
		border: none;
		background: #63a9fb;
		color: #fff;
	}
}

.comment {
	.tabs {
		display: flex;
		justify-content: space-around;
		border: 2px solid yellow;
		overflow: hidden;
		.tab {
			width: 50%;
			font-size: 0.8rem;
			text-align: center;
			color: #fff;
		}
		.agree {
			background-color: skyblue;
		}
		.disagree {
			background-color: orangered;
		}
		.bigagree {
			position: relative;
		}
		.bigagree::after {
			content: "";
			position: absolute;
			border-left: 0.9rem solid skyblue;

			border-top: 0.55rem solid transparent;
			border-bottom: 0.55rem solid transparent;
			width: 0;
			height: 0;
			top: 0;
			right: -0.9rem;
		}

		.disbigagree {
			position: relative;
		}
		.disbigagree::after {
			content: "";
			position: absolute;
			border-right: 0.9rem solid orangered;

			border-top: 0.55rem solid transparent;
			border-bottom: 0.55rem solid transparent;
			width: 0;
			height: 0;
			top: 0;
			left: -0.9rem;
		}
	}
}

.user_info {
	display: flex;
	justify-content: space-evenly;
	box-shadow: 0px 0px 1px 0px #7e7160;
	margin: 0.1333rem;
	padding: 0.1333rem;
	font-size: 0.4rem;
	.user_img {
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid black;
		border-radius: 50%;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.user_text {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		font-size: 0.5333rem;
	}
}

.short_info {
	box-shadow: 0px 0px 1px 0px #7e7160;
	margin: 0.1333rem;
	padding: 0.1333rem;
	font-size: 0.4rem;
}
.detail_info {
	box-shadow: 0px 0px 1px 0px #7e7160;
	margin: 0.1333rem;
	padding: 0.1333rem;
	font-size: 0.4rem;
}

@media screen and (min-width: 950px) {
	.commentList {
		display: flex;
		justify-content: space-between;
		.commentagree {
		}
		.commentdisagree {
		}
	}
}
</style>
