<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="(item,index) of letters" 
			:key="index"
			:ref="item"
			@click="handleLetterClick"
			@touchstart.prevent="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
		>
		<!--.prevent事件修饰符可以阻止touchstart的默认行为-->
			{{item}}
		</li>
	</ul>

</template>

<script>
export default {
	name: 'Alphabet',
	props: {
		rolls: Array
	},
	data () {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated () {
		/*初始化的时候就将A到上面的距离算出来*/
		this.startY = this.$refs['A'][0].offsetTop;
		console.log(this.$refs['A']);
		console.log("距离"+this.startY);
	},
	computed: {
		letters () {
			const letters = []
			/*for(let i in this.rolls) {
				console.log(rolls[i]);
				letters.push(rolls[i]);
				
			}*/
			return this.rolls
		}
	},
	methods: {
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			if(this.touchStatus) {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				/*延迟16毫秒的时间{函数节流的 方式大大的节省被调用的频率而提高性能}*/
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 64.78
					const index = Math.floor((touchY - this.startY) / 17)
					if(index >= 0 && index < this.letters.length) {
						this.$emit('change',this.letters[index])					
					}
				},16)
			}
		},
		handleTouchEnd () {
			this.touchStatus = false
		},
		handleLetterClick (e) {
			console.log('世道');
			console.log(e.target.innerText);
			this.$emit('change',e.target.innerText);
		}
	}
}
</script>
<style lang="stylus" scoped>
	/*@import '~styles/varibles.styl';*/
	/*统一大概是2.5倍的算*/
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 4.0rem
		right: 0
		bottom: 0
		width: 1.5rem
		.item
			line-height: 1.1rem
			text-align: center
			color: $bgColor
</style>