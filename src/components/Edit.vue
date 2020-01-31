<template>
	<div id="edit" >
		<!-- Edit: начало -->
		 <div class="top">
			<input class="input-flat" maxlength="15" v-model="name" type="text" />
		</div>
		<div class="bricks">
			<!-- Редактируемые блоки: начало -->
			<template>
				<div v-for="(brick,index) in bricks" :key="++index" :class="['brick','type-'+brick.type]">
					<div :class="['brick-inside', 'degree-'+brick.degree]">
						<div class="title">
							<input maxlength="15" class="input-flat title" v-model="brick.title" type="text" />
						</div>
						<div class="subtitle">
							<input maxlength="15" class="input-flat subtitle" v-model="brick.subtitle" type="text" />
						</div>
					</div>
					<!-- Управление блоком: начало -->
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
						<el-button type="r" @click="removeBrick(index)">Удалить</el-button>
					</div>
					<!-- Управление блоком: конец -->
				</div>
			</template>
			<!-- Редактируемые блоки: конец -->
		</div>
		<div class="float-menu">
			<el-button  icon="el-icon-plus" type="primary" round @click="addBrick">Добавить блок</el-button>
 			<el-button v-if="bricks.length>0"  type="success" icon="el-icon-check" round @click="$router.push('/view/')">Посмотреть</el-button>
		</div>
		<!-- Edit: конец -->
	</div>
</template>

<script>

	//
	//	Редактирование сайта:
	//	- изменение заголовка
	//	- создание, редактирование и удаление блоков
	//	
	
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
				name: '',
				bricks: [],
				types: [
					{
						label: 'Синий',
						value: '1'
					},
					{
						label: 'Зелёный',
						value: '2'
					},
					{
						label: 'Красный',
						value: '3'
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
			addBrick(){
				this.bricks.push({
					type: "1",
					title: "Заголовок",
					subtitle: "Подзаголовок",
					degree: 3,
				})
			},

			/*
			*	Удаляем блок
			*/
			removeBrick(index){
				this.bricks.splice(index-1,1)
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

</style>
