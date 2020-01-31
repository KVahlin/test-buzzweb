<template>
	<div id="main" class="height-100">
		<!-- Main: начало -->
			<div class="intro">
				<a @click="$router.push('/edit')" class="text">Мега Лендинг Мейкер »</a>
			</div>
		<!-- Main: конец -->
	</div>
</template>

<script>

	//
	//	Главный экран
	//	
	
	export default {
		
		//
		//	Компоненты
		//
		
		components:{
			
		},
		
		//
		//	Данные
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

	.height-100 {
		height: 100%
	}

	.intro {
		background: #5433FF;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #A5FECB, #20BDFF, #5433FF);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #A5FECB, #20BDFF, #5433FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		width: 100%;
		height: 100%;
		text-align: center;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: baseline;
		align-content: space-around;
	}

		.intro .text {
			color: #fff;
			font-size: 62px;
			display: inline-block;
			text-decoration: underline;
			cursor: pointer;
		}
</style>
