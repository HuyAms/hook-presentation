import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

const useCount = (initialValue) => {

  const [count, setCount] = useState(initialValue) // Initial value'

  const incrementCount = () => setCount(count + 1)

  return [count, incrementCount]
}

const Counter = () => {

  const [count, incrementCount] = useCount(0)

  return (
      <div>
        <h1>UseState</h1>
        <Button onClick={incrementCount}>Counter: {count}</Button>
      </div>
  )
}

export default Counter
