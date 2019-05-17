<template>
	<section class="child_page">
		<div class="details">
			<div class="details_li">
				<div class="details_left">
					<img :src="infor.headurl" alt="">
				</div>
				<div class="details_right">
					<div class="details_right_top">
						<span>{{infor.remarks ? infor.remarks : infor.petname}}</span>
						
					</div>
					<div class="details_right_obt"><!--昵称-->
						昵称:&nbsp{{infor.wxid}}
					</div>
					<div class="details_right_obt">
						微信号：{{infor.wxid}}
					</div>
					<div class="details_right_obt">
						地区:&nbsp{{infor.district}}
					</div>
				</div>
			</div>
			<div class="details_li">
				<router-link to='' class="setnote">
					设置备注和标签
				</router-link>
			</div>
			<div class="details_person">
				<div class="details_person_top">
					<router-link to='' class="details_person_a">
						<div class="person_photo_left">
							朋友圈
						</div>
						<div class="person_photo_right clear">
							<img :src="value" alt="" v-for="value in gallery">
						</div>
					</router-link>
				</div>
				<div class="details_person_more">
					<router-link to='/addressbook/details/more' class="clickmore">
						更多信息
					</router-link>
				</div>
			</div> 
			<div class="sendmessage"><!--  -->
				<router-link to='/singlechat' class="send" @click.native="enterdDialogue">
					发消息
				</router-link>
			</div>
			<div class="video"><!-- 需要实现动画进入 -->
				<router-link to='/videocall' class="send" @click.native="enterdDialogue">
					语音视频通话
				</router-link>
			</div>
		</div>
	</section>
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		name:'Details',
		data(){
			return {
				gallery:[],//个人相册

			}
		},
		mounted(){
			this.gallery=this.infor.gallery;
		},
		computed:{
			...mapState([
			    "infor", "contactList", "conversine"
			]),
			
		},
		methods:{
			...mapMutations([
				"SAVE_DIALOGUE",
			]),
			enterdDialogue(){
				this.SAVE_DIALOGUE(this.infor);
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../../assets/css/public";
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}
	.child_page{
		position: fixed;
		padding:0 0 0 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.details{
		width:100%;
		padding-top:2.9226633rem;
		.details_li{
			padding:0.512rem 0.5973333333rem;
			background:#fff;
			margin-bottom:0.8533333333rem;
			@include justify(flex-start);
			.details_left{
				margin-right:1.024rem;
				img{
					display: block;
					@include widthHeight(2.7306666667rem,2.7306666667rem);
				}
			}
			.details_right{
				.details_right_top{
					@include justify(flex-start);
					 align-items: center;
					margin-top:0.256rem;
					margin-bottom:0.4266666667rem;
					span{
						display:block;
						@include sizeColor(0.64rem,#000);
						margin-right:0.4266666667rem;
					}
					.sexsvg{
						@include widthHeight(.64rem,.90rem);
						@include align(top);
						svg{
							@include widthHeight(100%,.64rem);
						}
					}
				}
				.details_right_obt{
					@include sizeColor(0.512rem,#666);
					text-align:left;
				}
			}
			.setnote{
				display:block;
				width:100%;
				text-align:left;
				@include sizeColor(0.64rem,#000);
			}
			
		}
		.details_person{
			padding:0.512rem 0.5973333333rem;
			background:#fff;
			.details_person_top{
				@include justify(flex-start);
				border-bottom:1px solid #e2e2e2;
				padding-bottom:0.6826666667rem;
				.area_details_left{
					@include sizeColor(0.64rem,#000);
				}
				.area_details_right{
					@include sizeColor(0.512rem,#666);
					margin-left:2.432rem;
					@include align(center);
				}
				
			}
			.details_person_more{
				.clickmore{
					display:block;
					width:100%;
					text-align:left;
					padding-top:0.7253333333rem;
					@include sizeColor(0.64rem,#666);
				}
			}
			.person_photo{
				border-bottom:1px solid #e2e2e2;
				.details_person_a{
					display:block;
					@include justify(flex-start);
					.person_photo_left{
						@include sizeColor(0.512rem,#666);
						@include align(center);
					}
					.person_photo_right{
						margin-left:1.0666666667rem;
						padding:0.3413333333rem 0;
						img{
							float:left;
							@include widthHeight(2.56rem,2.56rem);
							margin-right:16px;
						}
					}
				}
			}
		}
		.sendmessage{
			width:14.1653333333rem;
			margin:0 auto;
			margin-top:0.8533333333rem;
			.send{
				display:block;
				border-radius:5px;
				text-align:center;
				width:14.1226666667rem;
				border:1px solid #3e8d3e;
				background:#1aad16;
				@include sizeColor(0.7253333333rem,#fff);
				letter-spacing:4px;
				line-height:2.0053333333rem;
			}
		}
	}
</style>