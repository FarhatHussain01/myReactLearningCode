import React, { createContext } from 'react';
import Component1 from './Component1';
import Component2 from './Component2'
import { MyInfoContext } from './Component1';
import Component2 from './Component2';



const App = ({children}) => {
  
  return (
    <div>
       <Component1>
        <Component2/>
       </Component1>
    </div>
  );
};

export default App;

