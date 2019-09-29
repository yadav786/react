import React from 'react';
import ReactDOM from 'react-dom';  
import App from './containers/App';   
import './index.css';
 
import {createStore, applyMiddleware, compose} from 'redux';  
import {Provider} from 'react-redux';       
import rootReducer from './rootReducer';
import {addArticleAction, getData} from './addArticleAction';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//import ReduxPromise from "redux-promise";
//console.log(createStore);              
//const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const storeEnhancer = composeEnhancers(
  //applyMiddleware()
  // other store enhancers if any 
//);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
//console.log('store',store);             
//store.subscribe(() => {                            
	  // console.log('subscribe====',store.getState());    
	  // console.log("changing logs subscription Action"); 
	//})             
//store.dispatch(getData()); 	    
//store.dispatch(addArticleAction({title:'Node Js',id:2}));
ReactDOM.render(<Provider store = {store}><App/></Provider>,document.getElementById('app'));  

