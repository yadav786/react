import React, {Component,Fragment} from 'react';
import ChildA from '../containers/ChildA';  
import {UserContextProvider} from '../containers/userContext'; 
import StateWithoutClass from '../containers/stateWithoutClass';  
import ArrayofComponentsRender from "../containers/ArrayofComponentsRender"; 
import NewPortal from "../containers/NewPortal"; 
import OldHOC from "../containers/OldHOC";
import AppRouter from "../containers/AppRouter";
export default class App extends Component { 
       render(){                              
		return (           
		<Fragment>
		<AppRouter/>    
		<OldHOC data="Pankaj" /> 
		<NewPortal/>   	 
		<ArrayofComponentsRender/>
		<p>This is the first paragraph</p>
		<UserContextProvider value="Pankaj">
		<ChildA></ChildA> 
		</UserContextProvider>
		<StateWithoutClass> 
		</StateWithoutClass> 
		</Fragment>  
		)         
       }        
} 
