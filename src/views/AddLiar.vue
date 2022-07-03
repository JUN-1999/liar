<template>
	<div class="liarBox">
		<p>标题</p>
		<div>
			<input
				maxlength="20"
				placeholder="请输入内容"
				type="text"
				v-model="titleText"
			/>
		</div>
		<p>正文</p>
		<div>
			<QuillEditor
				:toolbar="toolbar"
				theme="snow"
				ref="quill"
				v-model:content="quillContent"
				contentType="html"
				placeholder="请输入内容"
				@ready="ready"
				@textChange="textChange"
			/>
		</div>
		<div>
			<button class="btn">提交</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const quill = ref(null);
let titleText = ref(""); //标题文本
let quillContent = ref(""); //正文文本
let quillHTML = ""; //HTMl格式的 正文文本
const toolbar = ["bold", "italic", "underline", "strike", "image"];

const ready = (quill) => {
	console.log("ready", quill);
};
const textChange = ({ delta, oldContents, source }) => {
	console.log({ delta, oldContents, source });
	quillHTML = quill.value.getHTML();
	console.log(quillContent.value);
};
</script>

<style lang="scss" scoped>
.ql-editor {
	height: 10.6667rem !important;
}
.ql-container {
	font-size: 0.4rem !important;
	color: red;
}
p {
	font-size: 0.4rem;
}
input {
	font-size: 0.35rem;
}

.liarBox {
	width: 95%;
	margin: 0 auto;
  padding-bottom:1.6rem;
}
.btn {
	width: 1.9rem;
	height: 0.8rem;
	font-size: 0.5rem;
	margin: .2667rem auto;
	border: none;
	color: #1989fa;
	display: block;
}
</style>
