// import React from 'react';
// import { myInfoContext } from './App';

// const Component3 = () => {
//   return (
//     <div>
//       <myInfoContext.Consumer>
//          {/* In consumer provide a callback function to consume the 
//             function which is provided by provider */}
//         {myInfo => {
//           return (
//             <>
//               <h2>{myInfo.firstName}</h2>
//               <h3>{myInfo.lastName}</h3>
//             </>
//           );
//         }}
//       </myInfoContext.Consumer>
//     </div>
//   );
// };

// export default Component3;


// Easy way to do is :

import React, { useContext } from 'react';
import { MyInfoContext } from './App';

const Component3 = () => {
  // Consume the context value using useContext
  const { firstName, lastName } = useContext(MyInfoContext);

  return (
    <div>
      <h2>{myInfo.firstname}</h2>
      <h3>{myInfo.lastName}</h3>
    </div>
  );
};

export default Component3;

