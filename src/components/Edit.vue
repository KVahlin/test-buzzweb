<template>
	<div id="edit" >
		<!-- Edit: начало -->
		 <div class="top">
			<input class="input-flat" v-model="name" type="text" />
		</div>

		<div class="bricks">
			<template>
				<div v-for="(brick,index) in bricks" :key="++index" :class="['brick','type-'+brick.type]">
					<div :class="['brick-inside', 'degree-'+brick.degree]">
						<div class="title">
							<input class="input-flat title" v-model="brick.title" type="text" />
						</div>
						<div class="subtitle">
							<input class="input-flat subtitle" v-model="brick.subtitle" type="text" />
						</div>
					</div>
					<div class="control">
						<el-radio-group v-model="brick.type">
							<el-radio-button v-for="type in types" :label="type.value" :key="type.value">{{type.value}}</el-radio-button>
						</el-radio-group>
						<h5>Угол наклона</h5>
						<el-slider
							v-model="brick.degree"
							:step="1"
							:min="1"
							:max="5"
							show-stops>
						</el-slider>
					</div>
				</div>
			</template>
		</div>

		<div class="float-menu">
			<el-button  icon="el-icon-plus" type="primary" round @click="addBlock">Добавить блок</el-button>
 			<el-button v-if="bricks.length>0"  type="success" icon="el-icon-check" round @click="$router.push('/view/')">Посмотреть</el-button>
		</div>

		<!-- Edit: конец -->
	</div>
</template>

<script>

	//
	//	Редактирование сайта
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
				name: '',
				bricks: [],
				types: [
					{
						label: 'Тип 1',
						value: "1"
					},
					{
						label: 'Тип 2',
						value: "2"
					},
					{
						label: 'Тип 3',
						value: "3"
					}
				]
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
			this.name = this.$store.getters.name
		},

		//
		//	--watch
		//
		
		watch: {
			name: function(newName){
				this.$store.commit('SET_NAME',newName)
			},
			bricks: {
				handler: function(modifiedBricks) {
					this.$store.commit('SET_BRICKS',modifiedBricks)
				},
				deep: true
			}
		},
		
		//
		//	--methods
		//
		
		methods: {

			/*
			*	Добавляем на сайт новый блок
			*/
			addBlock(){
				this.bricks.push({
					type: "1",
					title: "title",
					subtitle: "subtitle",
					degree: 3,
				})
			}
		}
	
  }
</script>

<style>
	.input-flat {
		background: none;
		text-align: center;
		color: #fff;
		border: none;
		width: auto;
		padding: 0px;
	}


	.control {
		position: absolute;
		top: 32px;
		right: 32px;
		width: 230px;
		padding: 32px;
		background: #fff
	}

	.el-slider {
		
	}

	

</style>
