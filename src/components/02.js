// customHook
import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

const Counter = () => {

  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1)

  return (
      <Button onClick={incrementCount}>{count}</Button>
  )
}

export default Counter




