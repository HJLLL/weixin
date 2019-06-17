<template>
	<section>
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
						<!-- <div class="contacts_img">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#accounts"></use>
							</svg>
						</div> -->
						<div class="contacts_text">
							公众号
						</div>
					</router-link>
				</ul>
			</div>
			<div class="contacts_middle">
				<ul class="contacts_middle_ul">
						<div class="contacts_middle_tile">我的企业</div>
						<route-link to="/addressbook/details" tag="li" class="contacts_li" v-for="(item,index) in myCompany" @click.native='detailMessage(item)' :key="index">
							<div class="personlist_img">
								<img :src="item.headurl" alt="">
							</div>
							<div class="personlist_name ellipsis">
								{{item.remarks ? item.remarks : item.petname}}
							</div>
						</route-link>
						<div class="contacts_middle_tile">星标朋友</div>
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
			<div class="content_bottom">
				<ul class="contacts_bottom_ul" ref="addlist">
					<li v-for="(value, key, index) in manageaddress" :key="key" class="addlistLi">
						<h1>{{key}}</h1>
						<ul>
							<router-link to="/addressbook/details" tag="li" v-for="(item,index) in value" @click.native='detailMessage(item)' :key="index">
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
				<!-- <section class="list_guide">
					<dl>
						<dd v-for="(value, index) in sortlist" :key="index" @click="getHear(value)">{{value}}</dd>
					</dl>
					<p>#</p>
				</section> -->
			</div>
		</section>
		<transition name="router-show">
			<router-view></router-view>
		</transition>
	</section>
</template>
<script>
	import {mapMutations} from 'vuex'
	import {animate} from '@/assets/js/config/mUtils'
	import {contactList} from '@/assets/js/getData'
	export default{
		name:'AddressBook',
		data(){
			return {
				contactList:{},		//所有通讯录列表
				myCompany:[],       //我所在的公司
				starFriend:[],      //星标朋友
				peoplenum:null,		//通讯录人数
			}
		},
		mounted(){
			contactList().then((res) => {
				this.contactList=res;
			})
		},
		methods:{
			...mapMutations([
			    'SAVE_MESSAGE'
			]),
			detailMessage(item){
				this.SAVE_MESSAGE(item);
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
				for(let i=65; i <= 90; i++){
					if(this.contactList[String.fromCharCode(i)]){
						if(this.contactList[String.fromCharCode(i)].length>0){
							addresslist[String.fromCharCode(i)]=this.contactList[String.fromCharCode(i)];
							for(let j=0;j<this.contactList[String.fromCharCode(i)].length;j++){
								console.log(this.contactList[String.fromCharCode(i)][j].headurl);
							}
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
		text-align:left;
		width:100%;
		background:#fff;
		padding-top:2.06933rem;
		.contact_top{
			ul{
				padding-left:0.5973333333rem;
				margin:0 auto;
				-webkit-overflow-scrolling: touch; 
				.contacts_li{
					width:100%;
					padding:0.5413333333rem 0;
					.contacts_img{
					
					}
					.contacts_text{
						
					}
				}
				.contacts_li:last-child{
					border:0;
				}
			}
		}
		.contacts_middle{
			.contacts_middle_ul{
				.contacts_middle_tile{
					
					padding:0.3413333333rem 0;
					@include sizeColor(0.64rem,#2a2a2a);
					display:block;
					background:#ebebeb;
					line-height:0.9813333333rem;
					text-align:left;
					padding-left:0.5973333333rem;
				}
				li{
					width:100%;
					ul{
						li{
							div{
								float:left;
							}
						}
						
					}
				}
			}
			.list_guide{
				position: fixed;
				top:50%;
				transform:translateY(-50%);
				right:0.2986666667rem;
				dl{
					dd{
						text-align:center;
					}
				}
				p{
				}
			}
		}
		.content_bottom{
			.contacts_bottom_ul{
				.addlistLi{
					h1{
						color:#CCCCCC;
						font-size:1rem;
					}
					ul{
						li{
							list-style: none;
							.personlist_img,personlist_name{
								float:left;
							}
							.personlist_img{
								width: 1.5786666667rem;
							    height: 1.5786666667rem;
							    img{
							    	width:100%;
							    	height:100%;
							    }
							}
							.personlist_name{
								margin-left:1.5333333333rem;
							    height: 1.6786666667rem;
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
	}

</style>