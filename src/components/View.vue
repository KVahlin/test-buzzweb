<template>
	<div id="view" >
		<!-- View: начало -->
        <div class="top">
			{{this.$store.getters.name}}
		</div>

		<div v-for="(brick,index) in bricks" :key="++index" :class="['brick','type-'+brick.type]">
			<div :class="['brick-inside', 'degree-'+brick.degree]">
				<div class="title">{{brick.title}}</div>
				<div class="subtitle">{{brick.subtitle}}</div>
			</div>
		</div>

		<div class="float-menu">
			
 			<el-button  type="success" icon="el-icon-back" round @click="$router.push('/edit/')">Назад к редактированию</el-button>
		</div>

		<!-- View: конец -->
	</div>
</template>

<script>

	//
	//	Редактирование сайта
	//	
	
	export default {
        
        props: ['id'],
        
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
				bricks: []
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
			this.bricks = this.$store.getters.bricks
		},
		
		//
		//	--methods
		//
		
		methods: {
			
		}
	
  }
</script>

<style>


</style>
