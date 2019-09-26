import React, {Fragment} from "react"
   
const FirstComp = () => {
	  return [<div key="4">Hello firstComp div arr</div>,<div key="5">Hello firstComp div arr</div>]
	}

const SecondComp = () => {
	    return [<p key="1">Hello SecondComp p arr</p>,<p key="6">Hello SecondComp p arr</p>]      
	}  	   
  
const ArrayofComponentsRender = () => {
      
    return( 
		   [<FirstComp key="2"/>,<SecondComp key="3" />]      
       )     
} 

export default ArrayofComponentsRender  
