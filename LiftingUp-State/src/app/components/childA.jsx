// ChildComponentA.jsx

import React from 'react';

const ChildA = ({ updateSharedState }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    updateSharedState(newValue);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ChildA;