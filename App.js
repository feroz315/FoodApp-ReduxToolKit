import React from 'react';
import { Provider } from 'react-redux';
import { mystore } from './ReduxFolder/Store';
import Main from './ReduxFolder/Main';


const App = () => {
   
  return (
      <Provider store={mystore}>   
       <Main />
        
      </Provider>
 
 )
};



export default App;
