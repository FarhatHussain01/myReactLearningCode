// ChildComponentB.jsx

import React from 'react';

const ChildB = (props) => {
  return (
    <div>
      <p> {props.sharedState}</p>
    </div>
  );
};

export default ChildB;
