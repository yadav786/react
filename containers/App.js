import React, {Component,Fragment} from 'react';
import ChildA from '../containers/ChildA';     
export default class App extends Component {
       render(){         
		return <Fragment><p>This is the first paragraph</p><ChildA></ChildA></Fragment>  
       }        
} 
