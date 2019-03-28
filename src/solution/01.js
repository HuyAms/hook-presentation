import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

const Counter = () => {

  const [count, setCount] = useState(0) // Initial value

  const incrementCount = () => setCount(count + 1)

  return (
      <div>
        <h1>UseState</h1>
        <Button onClick={incrementCount}>Counter: {count}</Button>
      </div>
  )
}

export default Counter
