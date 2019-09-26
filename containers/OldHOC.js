import React, {Component} from "react"
import HOC from "../containers/HOC"

const UserList =  [{
	   name:"Pankaj",
	   age:"25"
	  },{
		 name:"Piyush",
		 age:"27"  
		}] 
   
class OldHOC extends Component {
	   
	        constructor(props){
			super(props)
			console.log(this.props)
			} 
        render(){    
		  return(<div> This is the Old Component</div>)	
		}    
}    

OldHOC = HOC(OldHOC, UserList)
export default OldHOC 
