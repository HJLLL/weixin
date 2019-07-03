import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foot from '@/components/footer/foot'
import Head from '@/components/header/head'
import FindAndMe from '@/components/findandme/findandme'
import AddressBook from '@/frames/addressbook/addressbook'
import Details from '@/frames/addressbook/details/details'
import More from '@/frames/addressbook/details/more/more'
import Search from '@/components/search/search'
//import Alphabet from '@/frames/addressbook/details/alphabet'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [{
		path: '/',
		name: 'Foot',
		component: Foot
	},{
		path: '/Head',
		name: 'Head',
		component: Head
	},{
		path: '/HelloWorld',
		name: 'HelloWorld',
		component: HelloWorld
	},{
		path: '/FindAndMe',
		name: 'FindAndMe',
		component: FindAndMe
	},{
		path: '/AddressBook',
		name: 'AddressBook',
		component: AddressBook
	},{
		path: '/Details',
		name: 'Details',
		component: Details
	},{
		path: '/More',
		name: 'More',
		component: More
	}
	,{
		path: '/Search',
		name: 'Search',
		component: Search
	}
	]
})
