<template>
	<div class="infoItemBox">
		<div class="user_info">
			<div class="user_img">
				<img src="@/assets/1.png" alt="" />
			</div>
			<div class="user_text">
				<div class="number">1173943332(2)</div>
				<div class="date">2022-06-21</div>
			</div>
		</div>
		<div class="text_info">
			<div class="text">
				举报简介巴拉巴拉巴拉巴拉举报举报简介巴拉巴拉巴拉巴拉举报举报简介巴拉巴拉巴拉巴拉举报举报简介巴拉巴拉巴拉巴拉举报简介举报简介巴拉巴拉巴拉巴拉举报简介巴拉巴拉巴拉巴拉
			</div>
			<div class="photos">
				<img src="@/assets/img_01.png" alt="" />
				<img src="@/assets/img_02.png" alt="" />
				<img src="@/assets/img_03.png" alt="" />
			</div>
		</div>
		<div class="pro_con_message">
			<div class="agree">支持1234</div>
			<div class="disagree">反对123</div>
		</div>
	</div>
</template>

<script setup>
import {} from "vant";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.infoItemBox {
	width: 100%;

	border-bottom: 1px solid blanchedalmond;
	display: flex;
	flex-direction: column;
	padding: 0.5333rem 0;
}
.user_info {
	display: flex;
	justify-content: space-evenly;

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

.text_info {
	display: flex;
	flex-direction: column;
	padding: 0.5333rem 0;
	.text {
		font-size: 0.4rem;
		color: #1a1b2e;
		padding: 0 0.5333rem;

		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		text-overflow: ellipsis;
	}
	.photos {
		display: flex;
		justify-content: space-around;
		img {
			width: 30%;
		}
	}
}
.pro_con_message {
	display: flex;
	justify-content: space-around;
	font-size: 0.5333rem;
	user-select: none;
}

@media screen and (min-width: 950px) {
	#infoItemBox {
		width: 30%;
	}
	.text_info {
		.photos {
			display: flex;
			justify-content: center;
			img {
				width: 15% !important;
			}
		}
	}
}
</style>
