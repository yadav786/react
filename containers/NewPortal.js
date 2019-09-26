import React,{Component} from "react"
import ReactDOM from "react-dom"
 
/* 
const NewPortal = () => {
       
        return(
            ReactDOM.createPortal(<h4>Hi4</h4>,document.getElementById("appChild"))        
        )    
}

*/
class NewPortal extends Component {
       render(){  
        return(    
            ReactDOM.createPortal(<h4>Hi create Portal</h4>,document.getElementById("appChild"))        
        )    
	} 
} 


export default NewPortal   
