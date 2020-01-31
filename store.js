export default {
	
	//
	//	--state
	//
	
	state: {
		name: 'Название сайта',
		bricks: []
	},
	
	//
	//	--getters
	//
	
	getters: {
		
		name: state => {
			return state.name
		},

		bricks: state => {
			return state.bricks
        },

	},

	//
	//	--mutations
	//
	
	mutations: {
		
		//
		//	Сохранить название сайта
		//
		
		SET_NAME : (state, name) => {
			if(name!==null) {
				state.name = name
			}
		},

		//
		//	Сохранить блоки
		//
		
		SET_BRICKS : (state, bricks) => {
			if(bricks!==null) {
				state.bricks = bricks
				console.log("Bricks saved to store")
			}
		},

	},
	
	//
	//	--actions
	//
	
	actions: {
		
	}
}