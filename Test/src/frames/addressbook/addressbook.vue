<template>
	<section>
		<alphabet :rolls="rolls" @change="handleLetterChange"></alphabet>
		<head-top :logopart="'addressbook'" :searchpart="false" :add="true" :search="true"></head-top>
		<!-- 联系人列表 -->
		<section class="contacts" ref="contactList" style="text-align: left;">
			<div class="contact_top">
				<ul>
					<router-link to="" tag="li" class="contacts_li">
						<!-- <div class="contacts_img">
							<svg> 
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#newfriend"></use>
							</svg>
						</div> -->
						<div class="contacts_text">
							新的朋友
						</div>
					</router-link>
					<router-link to="" tag="li" class="contacts_li">
						<!-- <div class="contacts_img">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#groupchat"></use>
							</svg>
						</div> -->
						<div class="contacts_text">
							群聊
						</div>
					</router-link>
					<router-link to="" tag="li" class="contacts_li">
						<!-- <div class="contacts_img">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#label"></use>
							</svg>
						</div> -->
						<div class="contacts_text">
							标签
						</div>
					</router-link>
					<router-link to="" tag="li" class="contacts_li">
						<!--<div class="contacts_img">
							<img src="@/../static/img/chuqiao.jpg">
						</div> -->
						<div class="contacts_text">
							公众号
						</div>
					</router-link>
				</ul>
			</div>
			<div class="contacts_middle">
				<ul class="contacts_middle_ul">
						<div class="contacts_middle_tile" v-if="myCompany.length>0">我的企业</div>
						<route-link to="/addressbook/details" tag="li" class="contacts_li" v-for="(item,index) in myCompany" @click.native='detailMessage(item)' :key="index">
							<div class="personlist_img">
								<img :src="item.headurl" alt="">
							</div>
							<div class="personlist_name ellipsis">
								{{item.remarks ? item.remarks : item.petname}}
							</div>
						</route-link>
						<div class="contacts_middle_tile" v-if="starFriend.length>0">星标朋友</div>
						<route-link to="/addressbook/details" tag="li" class="contacts_li" v-for="(item,index) in starFriend" @click.native='detailMessage(item)' :key="index">
							<div class="personlist_img">
								<img :src="item.headurl" alt="" />
							</div>
							<div class="personlist_name ellipsis">
								{{item.remarks ? item.remarks : item.petname}}
							</div>
						</route-link>
				</ul>
			</div>
			<div class="content_bottom" ref="wrapper">
				<ul class="contacts_bottom_ul">
					<li v-for="(value, key, index) in manageaddress" :key="key" class="addlistLi">
						<h1 :ref="key">{{key}}</h1>
						<ul>
							<router-link to="/addressbook/details" tag="li" v-for="(item,index) in value" 
										 @click.native='detailMessage(item)' :key="index"
										 >
								<div class="dd">
									<div class="personlist_img">
										<img :src="item.headurl" alt=""/>
									</div>
									<div class="personlist_name ellipsis">
										{{item.remarks ? item.remarks : item.petname}}
									</div>
								</div>
							</router-link>
						</ul>
					</li>
				</ul>
				<section class="peoplenum">{{peoplenum}}&nbsp;位联系人</section>
			</div>
		</section>
		<foot></foot>
		<transition name="router-show">
			<router-view></router-view>
		</transition>
	</section>
</template>
<script>
	import BScroll from 'better-scroll'
	import headTop from '@/components/header/head'
	import {mapMutations} from 'vuex'
	//import {animate} from '@/assets/js/config/mUtils'
	import {contactList} from '@/assets/js/getData'
	import Foot from '@/components/footer/foot'
	import Alphabet from './details/Alphabet'
	export default{
		name:'AddressBook',
		components: {
			Alphabet,
			Foot,
			headTop
		},
		data(){
			return {
				contactList:{},		//所有通讯录列表
				myCompany:[],       //我所在的公司
				starFriend:[],      //星标朋友
				peoplenum:null,		//通讯录人数
				rolls:[],			//滚动条数据
				roll:''				//当前定位
			}
		},
		mounted(){
			contactList().then((res) => {
				this.contactList=res;
			}),
			this.scroll = new BScroll(this.$refs.wrapper, {click: true})
		},
		watch: {
			roll () {/*监听roll的改变做的事*/
				if (this.roll) {
					/*通过this.$refs获取到this.roll这个字母对应class等于area的区域，
					 ref是通过循环输出的得到的是一个数组不是标准的dom元素，但是BScroll的
					 scrollToElement中需要是dom的元素或者是dom的选择器*/
					const element = this.$refs[this.roll][0];
					console.log("需要滚动到的位置："+this.roll);
					console.log(element);
					this.scroll.scrollToElement(element);
				}
			}
		},
		methods:{
			...mapMutations([
			    'SAVE_MESSAGE'
			]),
			detailMessage(item){
				this.SAVE_MESSAGE(item);
			},
			handleLetterChange(roll){
				console.log("handleLetterChange:"+roll);
				this.roll=roll;
			}
			// getHear(value){
			// 	this.atpresent=value;
			// 	this.$nextTick(() =>{ //滚动到通讯录分组的地方
			// 		const listArray = this.$refs.addlist.getElementsByClassName("addlistLi");
			// 		for(let i =0; i<listArray.length; i++){
			// 			if(listArray[i].getElementsByTagName("h1")[0].innerText == value){

			// 				const getBody = document.getElementsByTagName("body")[0];

			// 				animate(getBody,{scrollTop : listArray[i].offsetTop-50});

			// 			}
			// 		}
					
			// 	})
			// }
		},
		computed:{
			manageaddress(){
				let addresslist={};
				this.rolls.length=0;
				for(let i=65; i <= 90; i++){
					if(this.contactList[String.fromCharCode(i)]){
						if(this.contactList[String.fromCharCode(i)].length>0){
							this.rolls.push(String.fromCharCode(i));
							addresslist[String.fromCharCode(i)]=this.contactList[String.fromCharCode(i)];
							this.peoplenum += Number(this.contactList[String.fromCharCode(i)].length);
						}
					}
				}
				return addresslist;
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../assets/css/public";
	.contacts{
		background-color:$bgcolor;
		text-align:left;
		width:100%;
		padding-top:3.06933rem;
		.contact_top{
			background-color:white;
			ul{
				li{
					list-style: none;
					margin-left:0.3rem;
					display:flex;
					align-items:center;
					.contacts_img{
					    img{
					    	width:100%;
					    	height:100%;
					    	border-radius:5px;
					    	width: 2.5786666667rem;
						    height: 2.5786666667rem;
					    }
					}
					.contacts_text{
						margin-left:1rem;
						flex:none;
						width:100%;
					    height: 3.6786666667rem;
					    line-height:3.6786666667rem;
					    @include sizeColor(1.2rem,#2a2a2a);
						border-bottom:1px solid #CCCCCC;top: 50%;
					}
				}
			}
		}
		.contacts_middle{
			.contacts_middle_ul{
				.contacts_middle_tile{
					margin-left:0.3rem;
					@include sizeColor(1rem,#2a2a2a);
					width:100%;
				}
				li{
					background-color:white;
					list-style: none;
					margin-left:0.3rem;
					display:flex;
					align-items:center;
					.personlist_img{
					    img{
					    	width:100%;
					    	height:100%;
					    	border-radius:5px;
						    @include widthHeight(2.5786666667rem,2.5786666667rem);
					    }
					}
					.personlist_name{
						margin-left:1rem;
						flex:none;
						width:100%;
					    height: 3.6786666667rem;
					    line-height:3.6786666667rem;
					    @include sizeColor(1.2rem,#2a2a2a);
						border-bottom:1px solid #CCCCCC;top: 50%;
					}
				}
			}
		}
		
		.content_bottom{
			.contacts_bottom_ul{
				.addlistLi{
					h1{
						margin-left:0.3rem;
					    @include sizeColor(1rem,#2a2a2a);
						width:100%;
					}
					ul{
						li{
							background-color:white;
							list-style: none;
							.dd{/*flex布局水平垂直居中*/
								margin-left:0.3rem;
								display:flex;
								align-items:center;
								.personlist_img{
								    img{
								    	width:100%;
								    	height:100%;
								    	border-radius:5px;
								    	width: 2.5786666667rem;
									    height: 2.5786666667rem;
								    }
								}
								.personlist_name{
									margin-left:1rem;
									flex:none;
									width:100%;
								    height: 3.6786666667rem;
								    line-height:3.6786666667rem;
					    			@include sizeColor(1.2rem,#2a2a2a);
									border-bottom:1px solid #CCCCCC;top: 50%;
								}
							}
						}
					}
				}
			}
		}
	}
	.peoplenum{
		padding-bottom:3rem;
		text-align:center;
		margin-top:.5rem;
		background-color:#CCCCCC;
		text-align:center;
		line-height:3.6786666667rem;
	}

</style>