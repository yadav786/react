import React,{Component,Fragment} from 'react';
import ChildB from './ChildB'; 
import ErrorBoundary from "./ErrorBoundary" 
import ReactDOM from "react-dom"
class  ChildA extends Component {    
      
   constructor(props){ 
	    super(props) 
	    this.state = {valid:false }   
	    this.myRef = React.createRef()  
		this.btnClick = this.btnClick.bind(this)  
		console.log(this) 
	}        
 
    btnClick(){
	   console.log(this)
	  
	   this.myRef.current.focus()
	   this.setState({valid:!this.state.valid})  
   }        
  
   componentDidMount(){
			console.log("findDOMNode=====",ReactDOM.findDOMNode(this))
	   }
  
   render(){
	   
	    
	  // this.setState({nationality:"Chinese"})  maximum update exceeded componentWillMount and componentDidMount 
	  const AnElement = React.createElement("h2", {className:"blue", style:{color:"blue"}}, "This is the CreatedElement Div")
	  console.log(AnElement)   
      return(            
         <><p> This is the Child A!  </p>
         {AnElement} 
         <input type="text" name="myName" defaultValue="hello" ref={this.myRef} />     
         { this.state.valid &&    
          <ErrorBoundary>      
           <ChildB data="Hoolaa"></ChildB>
          </ErrorBoundary>
	    } 
         <button onClick={this.btnClick}>BTN</button> 
         <div ref={this.props.innerRef}>
         Div has ref
         
         </div>   
         </>    
         
      )     
   }

}
       
//export default ChildA; 
export default React.forwardRef((props, ref) => <ChildA 
  innerRef={ref} {...props}
/>);    



