import React, { useState } from 'react';

function BodyHooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>BodyHooks</h1>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
}

export default BodyHooks;
