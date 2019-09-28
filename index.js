import React from 'react';
import ReactDOM from 'react-dom';  
import App from './containers/App';   
import './index.css';
 
import {createStore,compose} from 'redux';  
import {Provider} from 'react-redux';      
import rootReducer from './rootReducer';
import {addArticleAction} from './addArticleAction';
//console.log(createStore);          
const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;     
const store = createStore(rootReducer, storeEnhancer);         
//store.subscribe(() => {              
	//   console.log('subscribe====',store.get State());    
	 //  console.log("changing logs subscription Action"); 
	//})            
//store.dispatch(addArticleAction({title:'React Redux', id:1}));	 
//store.dispatch(addArticleAction({title:'Node Js',id:2}));
ReactDOM.render(<Provider store = {store}><App/></Provider>,document.getElementById('app'));  

