import React, {Component} from "react"

export default function HOC(OldHOC, UserList){
 return class extends Component {
	   
	    constructor(props){
			super(props)
			//console.log(this.props)
			//console.log(UserList)
			this.state = {
				  data:UserList
				}
			}  
	              
        render(){      
		  return(<div> New HOC <table><thead><tr><td>Name</td><td>Age</td></tr></thead> 
		          <tbody>{ this.state.data.map((value, index) =><tr key={index}><td key={value.name}>{value.name}</td><td key={value.age}>{value.age}</td></tr> ) }</tbody>  
		        </table> <OldHOC></OldHOC></div>)                          
		}         
 }   
}       
