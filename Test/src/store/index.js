import Vue from 'vue'
import vuex from 'vuex'
//import {userInfo, dialog, userWord} from 'src/assets/js/getData'

Vue.use(vuex);
const state = {
	mute: false,			//是否静音
	computershow: true,		//是否电脑登录
	infor: {},				//联系人信息
	contactList: [],		//对话列表
	userInfo: {},			//用户信息
	newImg: '',				//主题图片地址
	imagestatus: false,
	firendwarn: true,		//朋友圈提示红色按钮
	consumerthing: false,	//登录弹窗显隐
	allgroup:[],			//所有群聊的人
}
const mutations = {
	//记录是否电脑静音
	RECORD_MUTE(state,mutestatus){
		state.mute=mutestatus;
	},
	//是否电脑登录
	COMPUTER_SHOW(state, computerstatus){
		state.computershow=computerstatus;
	},
	//保存联系人信息
	SAVE_MESSAGE(state, infor){
		state.infor={};
		state.infor=infor;
	},
	//获取的数据先保存
	SAVE_BEGINDIALOGUE(state, arrayData){
		state.contactList = arrayData;
	},
	//增加对话人列表
	SAVE_DIALOGUE(state, obj){
		state.contactList=[obj, ...state.contactList];
		
		//数组去重
		const newArr = new Set(state.contactList);
		state.contactList = [...newArr];	
	},
	//获取用户信息
	GET_USERINFO(state,userInfo){
		state.userInfo=userInfo
	},
	//上传主题图片
	SAVE_THEMIMG(state,{
		newImg,
		imagestatus
	}){
		state.newImg=newImg;
		state.imagestatus=imagestatus
	},
	//改变朋友圈红色提醒显隐
	CHANGE_RED(state,firendwarn){
		state.firendwarn=firendwarn;
	},
	LOGIN_COVER(state,consumerthing){
		state.consumerthing=consumerthing;
	},
	//获取所有群聊人信息
	GET_ALLGROUP(state,allgroup){
		state.allgroup=allgroup
	}
}
const actions = {
	// getUserInfo({
	// 	commit,
	// 	state
	// }){
	// 	const user_id = localStorage.getItem('user_id')
	// 	let res = await userInfo(user_id)
	// 	commit(GET_USERINFO,res.user_info)
	// },
	//  getDialog({
	//  	commit,
	//  	state
	//  }){
	//  	if(state.contactList.length > 0) return;
	//  	let res=await dialog();
	//  	commit(SAVE_BEGINDIALOGUE,res)
	//  }
}


export default new vuex.Store({
	state,
    actions,
    mutations
})

























// export default new vuex.Store({
// 	state:{
// 		mute: false,			//是否静音
// 		computershow: true,		//是否电脑登录
// 		infor: {},				//联系人信息
// 		contactList: [],		//对话列表
// 		userInfo: {},			//用户信息
// 		newImg: '',				//主题图片地址
// 		imagestatus: false,
// 		firendwarn: true,		//朋友圈提示红色按钮
// 		consumerthing: false,	//登录弹窗显隐
// 		allgroup:[],			//所有群聊的人
// 	},
// 	mutations:{
// 		//记录是否电脑静音
// 		RECORD_MUTE(state,mutestatus){
// 			state.mute=mutestatus;
// 		},
// 		//是否电脑登录
// 		COMPUTER_SHOW(state, computerstatus){
// 			state.computershow=computerstatus;
// 		},
// 		//保存联系人信息
// 		SAVE_MESSAGE(state, infor){
// 			state.infor={};
// 			state.infor=infor;
// 		},
// 		//获取的数据先保存
// 		SAVE_BEGINDIALOGUE(state, arrayData){
// 			state.contactList = arrayData;
// 		},
// 		//增加对话人列表
// 		SAVE_DIALOGUE(state, obj){
// 			state.contactList=[obj, ...state.contactList];
			
// 			//数组去重
// 			const newArr = new Set(state.contactList);
// 			state.contactList = [...newArr];	
// 		},
// 		//获取用户信息
// 		GET_USERINFO(state,userInfo){
// 			state.userInfo=userInfo
// 		},
// 		//上传主题图片
// 		SAVE_THEMIMG(state,{
// 			newImg,
// 			imagestatus
// 		}){
// 			state.newImg=newImg;
// 			state.imagestatus=imagestatus
// 		},
// 		//改变朋友圈红色提醒显隐
// 		CHANGE_RED(state,firendwarn){
// 			state.firendwarn=firendwarn;
// 		},
// 		LOGIN_COVER(state,consumerthing){
// 			state.consumerthing=consumerthing;
// 		},
// 		//获取所有群聊人信息
// 		GET_ALLGROUP(state,allgroup){
// 			state.allgroup=allgroup
// 		}
// 	},
// 	actions:{
// 		// getUserInfo({
// 		// 	commit,
// 		// 	state
// 		// }){
// 		// 	const user_id = localStorage.getItem('user_id')
// 		// 	let res = await userInfo(user_id)
// 		// 	commit(GET_USERINFO,res.user_info)
// 		// },
// 		//  getDialog({
// 		//  	commit,
// 		//  	state
// 		//  }){
// 		//  	if(state.contactList.length > 0) return;
// 		//  	let res=await dialog();
// 		//  	commit(SAVE_BEGINDIALOGUE,res)
// 		//  }
// 	}

// })
