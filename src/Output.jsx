import React from 'react'

function Output({billValue, userASelection, userBSelection}) {
const average = (parseInt(userASelection) + parseInt(userBSelection)) / 2;
const total = parseFloat(billValue || 0) + average;

 return (
    <div>
{/* <p>{total ? total.toFixed(2) : "aaaaaa"} </p> */}
<h2> {`You pay $${total} ($${userASelection}+ $${userBSelection} tip)`} </h2>
    </div>
  )
}

export default Output