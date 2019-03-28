// customHook
import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

const Counter = () => {

  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1)

  return (
      <div>
        <h1>Custom Hook</h1>
        <Button onClick={incrementCount}>Counter: {count}</Button>
      </div>
  )
}

export default Counter






















// The "use" prefix is a convention
// const useCounter = () => {
//   const [count, setCount] = useState(0);
//
//   const incrementCount = () => setCount(count + 1)
//
//   return [count, incrementCount];
// }
//
// const Counter = () => {
//
//   const [count, incrementCount] = useState(0);
//
//   return (
//       <Button onClick={incrementCount}>{count}</Button>
//   )
// }
//

