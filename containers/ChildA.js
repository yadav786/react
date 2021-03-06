import React,{Component,Fragment} from 'react';
import ChildB from './ChildB'; 
import ErrorBoundary from "./ErrorBoundary" 
import ReactDOM from "react-dom"
import { connect } from "react-redux";
import { addArticleAction, getData } from '../addArticleAction'; 
    
class  ChildA extends Component {     
      
   constructor(props){ 
	    super(props) 
	    this.state = {valid:false, data:[{title:'Hello', id:4}]}   
	    this.myRef = React.createRef()    
		this.btnClick = this.btnClick.bind(this)  
		//console.log(this);
		//console.log('articles==',this.props.articles);  
		   
	}         
 
    btnClick(){
	   console.log(this) 
	  
	   this.myRef.current.focus()
	   this.setState({valid:!this.state.valid})  
   }        
  
   componentDidMount(){    
	        //addArticleAction(articles Object);
	        //this.props.addArticleAction({title:'Hello', id:4});
			//console.log("findDOMNode=====",ReactDOM.findDOMNode(this))
			 
			 this.props.getData();
			 console.log('childA===',this);         
			//this.props.dispatch(addArticleAction({title:'Hello', id:4}));    
		    //console.log('articles in componentDidMount==',this.props.articles);
	   }         
    
   render(){ 
	   	      //console.log(this.props.articles)   
	  // this.setState({nationality:"Chinese"})  maximum update exceeded componentWillMount and componentDidMount 
	  const AnElement = React.createElement("h2", {className:"blue", style:{color:"blue"}}, "This is the CreatedElement Div")
	  console.log(AnElement)   
      return(            
         <><p> This is the Child A!  </p>
         {AnElement}    
         <div>
         {  this.props.remoteArticles.map(value => {
			    return (<h4 key={value.id}>{value.title}</h4>)    
	      }) }      
		 </div>    
         <input type="text" name="myName" defaultValue="hello" ref={this.myRef} />     
         { this.state.valid &&    
          <ErrorBoundary>      
           <ChildB data="Hoolaa"></ChildB>
          </ErrorBoundary>
	    } 
         <button onClick={this.btnClick}>BTN</button> 
         
         </>    
         
      )     
   }
 
}
 
 const mapStateToProps = (state) => {
  	 return state;
 }          
  
 
 const mapDispatchToProps = (dispatch) => {
       	return {
			 addArticleAction : (article) => {
				        dispatch(addArticleAction(article));
			   },
			   getData :() => {
			          dispatch(getData());
			   } 
		    } 
 }     
 
  
 export default connect(mapStateToProps, mapDispatchToProps)(ChildA);   
     



