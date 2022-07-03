<template>
	<div class="header">
		<div class="header-left">
			<slot name="left"></slot>
		</div>
		<div class="header-center">
			<slot name="center"></slot>
		</div>
		<div class="header-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
	height: 1.44rem;
	background-color: #ffffff;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	.header-center {
		flex: 1;
	}
}
</style>
