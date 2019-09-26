import React,{useState, useEffect} from 'react';
        
  function StateWithoutClass() { 
	          console.log(useState(0));
	          const [count, setCount] = useState(0); 
	         // const [name,setName] = useState("Pankaj"); 
	         
	         useEffect(() => {    
				   document.title =`clicked times ${count}`;        
			  });   
	         
	          return(     
	            <React.Fragment> 
	            <p>You clicked {count} times </p>  
	            <button onClick={() => setCount(count + 1) }>Click</button> 
	            </React.Fragment>    
	           );                
	          //return 'hello';
			  // return(<Component>Hello</Component>)
			    	 
  }

   export default StateWithoutClass;    
 
