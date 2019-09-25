import React,{Component,Fragment} from 'react';
import ChildB from './ChildB'; 
class  ChildA extends Component {    
 
   render(){
      return(
         <Fragment><p> This is the Child Element!</p><ChildB></ChildB></Fragment>
      )    
   }

}
 
export default ChildA;
