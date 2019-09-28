const ADD_ARTICLE = "ADD_ARTICLE";
const initialState = {
	articles:[]
}  

const rootReducer = (state = initialState, action)=> {
     if(action.type==ADD_ARTICLE){ 
		 return Object.assign({}, state, { articles : state.articles.concat(action.payload)})  
	 }   	       
     return state;
     
} 

export default rootReducer;
