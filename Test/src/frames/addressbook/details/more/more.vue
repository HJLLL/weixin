<template>
	<section class="child_page">
		<section class="more">
			<router-link tag="div" to="">
				<p>
					<span>我和</span><span v-if="sex">他</span><span v-if="!sex">她</span><span>的共同群聊</span>
				</p>
			</router-link>
			<div>
				<span>个性签名</span><span>{{infor.sdasd}}</span>
			</div>
			<div>
				<span>来源</span><span>{{infor.source}}</span>
			</div>
		</section>
	</section>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		name:'More',
		data(){
			return {
				sex:true
			}
		},
		mounted(){
			this.sex=this.infor.sex;
		},
		computed:{
			...mapState([
			    "infor"
			]),
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../../../assets/css/public";
	.child_page{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.more{
		padding-top:2.9226633rem;
		div{
			background:#fff;
			@include justify;
			padding:0 0.59rem;
			border-bottom:1px solid #e2e2e2;
			font-size:0;
			span{
				text-align:left;
				display:inline-block;
				display:inline;
				@include sizeColor(0.7rem,#333);
				line-height:2rem;
				@include sizeColor(0.58rem,#999);
			}
		}
		div:last-child{
			border:0;
		}
	}
</style>