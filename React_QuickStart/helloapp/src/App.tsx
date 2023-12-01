import React from 'react';

const App = () => {
  let msg = '<i>World</i>';

  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    );
  };
  return (
    <div className="container">
      <h1>Hello {msg}!</h1>
      <hr className="dash-style" />
      {addResult(4, 3)}
    </div>
  );
};

export default App;
