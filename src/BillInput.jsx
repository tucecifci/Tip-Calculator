import React, { useState } from 'react'

function BillInput({billValue, setBillValue}) {
const handleChange = (event) =>{
setBillValue(event.target.value);
}
  return (
    <>
    <div>
        <h3>How much was the bill?</h3>
        <input 
        type="number"
        id='billInput'
        value={billValue}
        onChange={handleChange}
        />
    </div>
    </>
  )
}

export default BillInput