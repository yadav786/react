import React, {Component} from 'react';
import '../index.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

const Home = () => {
	   return(
	    <h4>Home Page</h4>
	   )
	}

const About = () =>{
		return(
	    <h5>About Page</h5>
	   )
	}


const Contact = () =>{
		return(
	    <h6>Contact Page</h6>
	   )
	}   
	
const NotFound = () => {
	   return(
	   <h3>Not Found</h3> 
	   ) 
	}
	
class  AppRouter extends Component {
	
	  render(){
	  return(  
	        <Router>
	        <ul>
	        <li><NavLink className = "active" activeClassName="active" to="/">Home</NavLink></li>
	        <li><NavLink className = "active" activeClassName="active" to="/about/">About</NavLink></li>
	        <li><NavLink className = "active" activeClassName="active" to="/contact/">Contact</NavLink></li>
	        </ul>               
	        <Switch>     
	        <Route exact path="/" component={Home} />
	        <Route path="/about/" component={About} />
	        <Route path="/contact/" component={Contact}/>
	        <Route component={NotFound}/>
	        </Switch>
	        </Router>   
	     )     
	 }
	
	}  

export default AppRouter; 
