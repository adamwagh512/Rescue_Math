import React, { useState } from 'react';

function NumberAdder() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangeNum1 = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleChangeNum2 = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  return (
    <div className=''>
      <label>
        Number 1:
        <br />
        <input className='border' type="text" value={num1} onChange={handleChangeNum1} />
      </label>
      <br />
      <label>
        Number 2:
        <br />
        <input className='border' type="text" value={num2} onChange={handleChangeNum2} />
      </label>
      <br />
      <button className='border rounded-full bg-red-400 px-4 mt-4' onClick={handleAdd}>Add</button>
      <br />
      Result: {result}
      <p>
        
      </p>
    </div>
  );
}

export default NumberAdder;

{/* <div className='bg-black'>
<label>
  Number 1:
  <input type="text" value={num1} onChange={handleChangeNum1} />
</label>
<br />
<label>
  Number 2:
  <input type="text" value={num2} onChange={handleChangeNum2} />
</label>
<br />
<button onClick={handleAdd}>Add</button>
<br />
Result: {result}
</div> */}