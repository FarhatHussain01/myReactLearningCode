import React, { Children } from 'react'
import { createContext } from 'react';


const MyInfoContext = createContext(); // Create the context
const Component1 = ({children}) => {
    const myInfo = {
        firstName: "Syed Farhat",
        lastName: "Hussain Kazmi",
        contact: "03448083207"
    };
    return (
        <div>
            <>
             <MyInfoContext.Provider value={myInfo}>
                    {Children}
             </MyInfoContext.Provider>
            </>
        </div>
    )
}

export default Component1
export { MyInfoContext }; // Export the context