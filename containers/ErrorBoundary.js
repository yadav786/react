import React, {Component} from "react"  
   
class ErrorBoundary extends Component {

     constructor(props){
		 super(props)
		 console.log(this)
		 this.state = {
			  hasError : false
			   } 
	 }     
  
  	static getDerivedStateFromError(error){
		console.log("getDerivedStateFromError===",error)
		return {hasError:true}
    }                
    /*
    componentDidCatch(error, info){
		console.log("componentDidCatch===")
		console.log(error) 
		console.log(info)
		this.state.errorMessage
		this.setState({errorMessage:info.componentStack})
	      	    
	}   
	*/
	
	render(){
		  
		  if(this.state.hasError){
			    return "some we wonrr"
			  }  
		    return this.props.children      
		} 
       
}

 
export default ErrorBoundary
