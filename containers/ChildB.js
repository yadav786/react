import React,{Component,Fragment} from 'react'; 
import ChildC from './ChildC'; 

class  ChildB extends Component {     
	
	constructor(props){     
		  super(props);    
		  this.state = {
			    nationality : 'Indian',
			    data:""
			  } 
	      this.buttonClicked = this.buttonClicked.bind(this)
	}            
 
    static getDerivedStateFromProps(props, state){  // new props setState forceUpdate 
	    //  console.log(props);     
	    //  console.log(state);  
	    //  console.log("getDerivedStateFromProps is called before rendering and subsequent updates");
	      return null;    
	}         
	 
 
	 buttonClicked(){
		   //alert("hello")  
		   this.setState({nationality:"Canadian"})
		 // this.forceUpdate(() => { // after rendering it will get called
			//      console.warn("forceUpdate is called");
			//  })  
		 }   
	    
	  componentDidMount(){
		 
		 console.log("componentDidMount=======B")    
		    
		 fetch("https://jsonplaceholder.typicode.com/todos/1")
		 .then(response => response.json())
		 .then(json => {
			  //console.log(json)     
			  this.setState({data:json}) 
		  })          
		  
		 this.myTimeout = setTimeout(() => {
			    this.setState({nationality:"American"}) 
			 },1000)       
	  }        
	  
	  componentWillUnmount(){
		  console.log("componentWillUnmount called") 
		  clearInterval(this.myTimeout)   
	  } 
	    	
	  shouldComponentUpdate(nextProps, nextState){
		     //console.log("shouldComponentUpdate nextProps",nextProps) 
		     //console.log("shouldComponentUpdate nextState", nextState) 
		     if(nextState.nationality == this.state.nationality){
		         return false   
		     }
		     { 
				 //console.log("shouldComponentUpdate rendered")
		         return true    
		     }   
	  }      	   
	    
	    
	    	 
   render(){  
	   
	   console.log("render is called");
	        
      return( 
         <Fragment>     
         {this.state.data.id && <p> All are same </p>} 
         {!this.state.data.id && <p> All are not same </p>} 
         <p> This is the Child B! {this.state.nationality} </p>
         <button onClick={this.buttonClicked}> BUyttton</button>
         <ChildC></ChildC>            
         </Fragment>
      )             
   }     
}
 
export default ChildB;
