import React from 'react';

const UserContext = React.createContext();
console.log(UserContext);

const UserContextProvider = UserContext.Provider;
const UserContextConsumer = UserContext.Consumer;
      
export {UserContextConsumer,UserContextProvider };     

