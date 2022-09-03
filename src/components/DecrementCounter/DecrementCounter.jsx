import React, { useState } from 'react'

function DecrementCounter() {
	const [count, setCount] = useState(0);
  return (
	<>
	<div data-test='decrement-counter-display' style={{ textAlign: "center",fontSize:"30px",color:"green",fontWeight:"bold", margin: '5% 0%'}}>The value of decrement counter is <span data-test="decrement-count">{count}</span></div>
	<button data-test="decrement-button" onClick={() => {
		setCount(count-1);
	}}>Decrement</button>
	</>
  )
}

export default DecrementCounter