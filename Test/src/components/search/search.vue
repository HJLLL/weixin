<template>
	<div class="searchfor">
		<section class="searchpartto">
			<router-link class="dd">aaaa</router-link>
			<section class="goback" v-on:click="goback">
				<svg t="1562122389541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976" width="1.224rem" height="1.224rem">
					<path d="M719.3 959.9L271.4 512 719.3 64.1l33.3 33.2L337.9 512l414.7 414.7z" p-id="1977"></path>
				</svg>
			</section>
			<div>
				<input class="covers_name" type="text" placeholder="搜索" v-model='inputText' style="background-color:#ebebeb" autofocus="autofocus"
					@keyup='show($event)' @keydown.down='down()' @keydown.up.prevent='up()'>
				<ul>
		            <li v-for="(item, index) in result" :class='{bg: index==nowIndex}'>
		                {{item}}
		            </li>
		        </ul>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				covers:'搜索',
				inputText: '',
				result: [],
                text: '',
                nowIndex: -1,
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			},
			show: function(ev) {
			    if (ev.keyCode == 38 || ev.keyCode == 40) {
			        if (this.nowIndex < -1){
			            return;
			        }
			        if (this.nowIndex != this.result.length && this.nowIndex != -1) {
			            this.inputText = this.result[this.nowIndex];
			        }
			        return;
			    }
			    if (ev.keyCode == 13) {
			        window.open('https://www.baidu.com/s?wd=' + this.inputText, '_blank');
			        this.inputText = '';
			    }
			    this.text = this.inputText;
			    this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
			        params: {
			            wd: this.inputText
			        },
			        jsonp: 'cb'
			    }).then(res => {
			        this.result = res.data.s;
			    })
			},
			down: function() {
			    this.nowIndex++;
			    if (this.nowIndex == this.result.length) {
			        this.nowIndex = -1;
			        this.inputText = this.text;
			    }
			},
			up: function() {
			    this.nowIndex--;
			    if (this.nowIndex < -1){
			        this.nowIndex = -1;
			        return;
			    }
			    if (this.nowIndex == -1) {
			        this.nowIndex = this.result.length;
			        this.inputText = this.text;
			    }
			}
		}
		
	}
</script>
<style lang="scss" scoped>
	@import "../../assets/css/public";
	@import "../../assets/css/iconfont";
	.searchfor{
		background-color:#C0C0C0;
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
				margin-left:0.30rem;
				span{
					@include sizeColor(1.1rem,#fff);
					display:block;
					background-color:#C0C0C0;
					width:9.5rem;
					text-align:left;
				}
			}
		}
	}
</style>