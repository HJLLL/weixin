//获取图片地址
// const imgurl = 'http://cangdu.org/files/images/';
// let baseUrl;

// if (process.env.NODE_ENV == 'development') {
// 	baseUrl = 'http://cangdu.org:8003'
// }else{
// 	baseUrl = 'http://cangdu.org:8003'
// }
// export {
// 	baseUrl,
// 	imgurl 
// }

const imgurl = '@/assets/img/';
let baseUrl;

if (process.env.NODE_ENV == 'development') {
	baseUrl = '@/assets/img/'
}else{
	baseUrl = '@/assets/img/'
}
export {
	baseUrl,
	imgurl 
}
