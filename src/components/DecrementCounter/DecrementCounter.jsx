import React, { useState } from 'react'

function DecrementCounter() {
	const [count, setCount] = useState(5);
	const [error,setError] = useState(false);
  return (
	<>
	<div data-test='decrement-counter-display' style={{ textAlign: "center",fontSize:"30px",color:"green",fontWeight:"bold", margin: '5% 0%'}}>The value of decrement counter is <span data-test="decrement-count">{count}</span></div>
	{error && <span data-test="error_message">The counter can not go below zero</span>}
	<br/>
	<button data-test="decrement-button" onClick={() => {
		if(count>0){
			setCount(count-1);
		} else{
			setError(true);
		}
	}}>Decrement</button>
	</>
  )
}

export default DecrementCounter