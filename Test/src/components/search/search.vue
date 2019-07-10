<template>
	<div class="searchfor">
		<section class="searchpartto">
			<section class="goback" v-on:click="goback">
				<svg t="1562122389541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976" width="1.224rem" height="1.224rem">
					<path d="M719.3 959.9L271.4 512 719.3 64.1l33.3 33.2L337.9 512l414.7 414.7z" p-id="1977"></path>
				</svg>
			</section>
			<section>
				<input class="covers_name" type="text" v-model='inputText' :placeholder="conver" 
					style="background-color:#EDEDED;width:100%" autofocus="autofocus"
					@keyup="get($event)" @keydown.down.prevent="changeDown()"  @keydown.up.prevent="changeUp()">
					<!--@keyup='show($event)' @keydown.down='down()' @keydown.up.prevent='up()'-->
			</section>
		</section>
		<section ref="wrapper">
			<div class="search_result">
				<ul>
					<li v-for="(item, index) in result" :kay="index">
						<div class="dd">
							<div class="img">
								<img src="">
							</div>
		                	<div class="txt_name">{{item}}</div>
						</div>
		            </li>
				</ul>
			</div>
		</section>
		<section class="search_choose" v-if="flag">
			<section class="search_top">搜索指定内容</section>
			<section class="choose">
				<ul class="choose_ul">
					<li @click="changescope($event)">朋友圈</li>
					<li @click="changescope($event)">文章</li>
					<li @click="changescope($event)">公众号</li>
					<li @click="changescope($event)">小程序</li>
					<li @click="changescope($event)">音乐</li>
					<li @click="changescope($event)">表情</li>
				</ul>
			</section>
		</section>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Search',
		data(){
			return{
				conver:'搜索',
				inputText: '',
				flag:true,
				result: [],
                text: '',
                nowIndex: -1,
                url:'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=90117853_hao_pg&wd=',
                urljsonp:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=',
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper, {click: true})
		},
		methods:{
			changescope(ev){
				this.flag=false;
				this.conver='搜索'+ev.target.innerHTML;
				//url和urljsonp有问题
				if(this.conver='搜索朋友圈'){
					/*this.url='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';
					this.urljsonp='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';*/
				}else if(this.conver='搜索文章'){
					/*this.url='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';
					this.urljsonp='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';*/
				}else if(this.conver='搜索公众号'){
					/*this.url='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';
					this.urljsonp='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';*/
				}else if(this.conver='搜索小程序'){
					/*this.url='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';
					this.urljsonp='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';*/
				}else if(this.conver='搜索音乐'){
					/*this.url='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';
					this.urljsonp='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';*/
				}else{
					/*this.url='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';
					this.urljsonp='https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=';*/
				}
			},
			goback(){
				this.$router.go(-1);
			},
			get: function(ev){
				if(ev.keyCode == 38 || ev.keyCode == 40){
					return false;
				}
				if(ev.keyCode == 13){
					window.open(this.url + this.inputText);
				}
				// jsonp获取百度的搜索关键字
				this.$http.jsonp(this.urljsonp + this.inputText + "",{
					jsonp:"cb"          // callback函数名
				}).then(function(res){
					this.result = res.data.s;       // 存入搜索数据
				}, /*function(){
					console.log(res.status)
				}*/)},
		        // 键盘下拉事件
		        changeDown: function(){
		            this.now++;
		            if(this.now == this.result.length){
		                this.now = -1;
		            }
		            this.inputText = this.result[this.now];       // 赋值是文本框
		        },
		        // 键盘上拉事件
		        changeUp: function(){
		            this.now--;
		            if(this.now == -1){
		                this.now = this.result.length-1;
		            }
		            this.inputText = this.result[this.now];       // 赋值是文本框
		        },
		},
		watch:{
			inputText(){
				if(this.inputText !=''||this.inputText === 'undefined'){
					this.flag=false;
				}else{
					this.flag=true;
				}
			}
		}
		
	}
</script>
<style lang="scss" scoped>
	@import "../../assets/css/public";
	@import "../../assets/css/iconfont";
	.searchfor{
		background-color:#EDEDED;
		.searchpartto{
			@include widthHeight(100%,2.06933rem);
			z-index:800;
			position: fixed;
			display:flex;
			align-items:center;
			.goback{
				margin-left:0.3rem;
				@include widthHeight(1rem,1rem);
				svg{
					@include widthHeight(100%,100%);
				}
			}
			.covers_name{
				margin-left:0.3rem;
				span{
					width:100%;
					@include sizeColor(1.1rem,#EDEDED);
					display:block;
					background-color:#EDEDED;
					text-align:left;
				}
			}
		}
		.search_result{
			padding-top:2rem;
			margin-left:0.3rem;
			.dd{
				margin-left:0.3rem;
				display:flex;
				align-items:center;
				.img{
					img{
						width:100%;
				    	height:100%;
				    	border-radius:5px;
				    	width: 2.5786666667rem;
					    height: 2.5786666667rem;
					}
				}
				.txt_name{
					margin-left:1rem;
					width:100%;
				    height: 3.6786666667rem;
				    line-height:3.6786666667rem;
	    			@include sizeColor(1.2rem,#2a2a2a);
					border-bottom:1px solid #CCCCCC;top: 50%;
				}
			}
		}
		.search_choose{
			@include widthHeight(100%,2.06933rem);
			.search_top{
				padding-top:3rem;
				@include sizeColor(1rem,#AFAFAF);
				padding-bottom:2rem;
			}
			.choose{
				.choose_ul{
					li{
						list-style: none;
						float:left;
						width:30%;
						padding:1rem 0rem;
						@include sizeColor(0.8rem,#6E7B99);
					}
				}
			}
		}
	}
</style>