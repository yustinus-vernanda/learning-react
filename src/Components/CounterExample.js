import React,{useState} from 'react'

function CounterExample(props){
  const [count,setCount] = useState(0)
  console.log(useState(0))
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick= {()=>{setCount(count + 1)}}>
        Plus
      </button>
      <br/>
      <button onClick= {()=>{setCount(count - 1)}}>
        Minus
      </button>
    </div>
  )
}

export default CounterExample
