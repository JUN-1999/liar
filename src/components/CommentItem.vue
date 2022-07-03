<template>
	<div class="commentItem">
		<div class="comment_info">
			<div class="comment_img">
				<img src="@/assets/1.png" alt="" />
			</div>
			<div class="comment_time">
				<span>2022-06-22 16:00</span>
			</div>
		</div>
		<div class="comment_text">
			<div>这个事情是这样子的，因为是这样子所以这样子，总结就是是这样子的，因为是这样子所以这样子，总结就是这样子</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	index: Number, //undefined
});
// console.log(props);
</script>

<style lang="scss" scoped>
.commentItem {
	padding: 0.3rem 0;
	box-shadow: 0 0 1px 0 saddlebrown;
	margin-bottom: .3rem;
}
.comment_info {
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	font-size: 0.4rem;
	margin-left: 0.4rem;

	.comment_img {
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid black;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 0.3rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
.comment_text {
	font-size: 0.4rem;
	padding: 0.2667rem;
}
</style>
