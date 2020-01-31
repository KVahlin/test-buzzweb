<template>
	<div id="app" >
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		
		//
		//	--components
		//	

		components:{
			
		},
		
		//
		//	--data
		//

		data: function(){
		  return {
			
		  }
		},
		
		
		//
		//	--mounted
		//
		
		mounted: function(){
			
		},

		//
		//
		//	

		beforeDestroy: function(){
			
		},
		
		//
		//	--created
		//
		
		created: function(){
			
		},
		
		//
		//	--computed
		//
		
		computed: {
			
		},

		//
		//	--watch
		//

		watch:{

		},

		
		//
		//	--beforeMount
		//
		
		beforeMount: function(){
			
		},
		
		//
		//	--methods
		//
		
		methods: {
			
		}

	}
</script>

<style>

	html, body {
		height: 100%
	}

	* {
		font-family: 'Fira Sans'
	}

	html,body,#app {
		height: 100%
	}

	body {
		overflow-y: scroll
	}

	#app {
		display: flex;
		flex-direction: column
	}

	a {
		color: #409EFF;
		font-size: 13px;
	}

	.wrapper {
		margin: 0 auto;
		width: 1180px;
	}

	

	/* Стили для управления навигацией */

	.float-menu {
		position: fixed;
		bottom: 64px;
		right: 64px
	}
	
	/* Стили сайта */

	.top {
		line-height: 120px;
		text-align: center;
		color: #fff;
		background: #552F7F;
		font-size: 62px;

	}

	/* Блоки из которых состоит сайт */

	.brick {
		
		padding: 60px;
		text-align: center;
		position: relative;
	}

		.brick-inside {
			width: 500px;
			padding: 40px;
			display: inline-block;
			border-radius: 12pxж
		}

			.brick-inside.degree-1 {
				transform: rotate(-8deg);
			}

			.brick-inside.degree-2 {
				transform: rotate(-4deg);
			}

			.brick-inside.degree-3 {
				transform: rotate(0deg);
			}

			.brick-inside.degree-4 {
				transform: rotate(4deg);
			}

			.brick-inside.degree-5 {
				transform: rotate(8deg);
			}
		
		/*	Блок тип 1 */

		.brick.type-1 {
			background: #00B0FF;
			
		}

			.brick.type-1 .brick-inside {
				
				background: #00B0FF;
				border: solid 10px #059DE1;
				box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
			}

			.brick.type-1 .title{
				color: #fff;
				font-size: 24px;
				font-weight: 700
			}

			.brick.type-1 .subtitle {
				color: #007CB5;
				font-size: 36px;
				font-weight: 700
			}

		/*	Блок тип 2 */

		.brick.type-2 {
			background: #7DCE94;
			
		}

			.brick.type-2 .brick-inside {
				background: #7DCE94;
				border: solid 10px #65B1A8;
				box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
			}

			.brick.type-2 .title {
				color: #fff;
				font-size: 22px;
				font-weight: 700
			}

			.brick.type-2 .subtitle {
				color: #A37E77;
				font-size: 30px;
				font-weight: 700
			}

		/*	Блок тип 3 */

		.brick.type-3 {
			background: #C94336;
			
		}

			.brick.type-3 .brick-inside {
				background: #C94336;
				border: solid 10px #EC4546;
				box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
			}

			.brick.type-3 .title {
				color: #fff;
				font-size: 24px;
				font-weight: 700
			}

			.brick.type-3 .subtitle {
				color: #3C2848;
				font-size: 36px;
				font-weight: 700
			}	

</style>
