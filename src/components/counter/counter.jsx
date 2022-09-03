import React,{useState} from "react";

function Counter() {
  const [count, setcount] = useState(0);

  return (
    <>
      <div data-test="counter-display" style={{ textAlign: "center",fontSize:"30px",color:"green",fontWeight:"bold", margin:'0% 0% 5% 0%'}}>
          <br/>
        The value of count is : <span data-test="count">{count}</span>
      </div>
      <br/> 
      <button data-test="increment-button" onClick={() => setcount(count + 1)}>Increase Count</button>
    </>
  );
}

export default Counter;
