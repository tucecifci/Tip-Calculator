import React, { useState } from 'react'

function BillInput() {
const [inputValue, SetInputValue] = useState("");

const handleChange = (event) =>{
SetInputValue(event.target.value);
}
  return (
    <>
    <div>
        <h3>How much was the bill?</h3>
        <input 
        type="number"
        id='billInput'
        value={inputValue}
        onChange={handleChange}
        />
        <p>{inputValue} </p>
    </div>
    </>
  )
}

export default BillInput