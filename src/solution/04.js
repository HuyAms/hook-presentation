// Reuse logic, renderprops
import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

// === Counter =====

const useCount = (initialValue) => {

  const [count, setCount] = useState(initialValue)
  const incrementCount = () => setCount(count + 1)

  return [count, incrementCount]
}

const Counter = ({count, incrementCount}) => {

  return (
      <div>
        <Button onClick={incrementCount}>Counter: {count}</Button>
      </div>
  )
}


// === SuperCounter =====

const SuperCounter = () => {

  const [count, incrementCount] = useCount(0)

  return (
      <div>
        <h1>Render Props</h1>
        <div>
          <Counter count={count} incrementCount={incrementCount} name="1"/>
          <div>
            <div>Double counter: {count * 2}</div>
            <div>Tripple counter: {count * 3}</div>
            <div>Quadruple counter: {count * 4}</div>
          </div>
        </div>
      </div>
  )
}

export default SuperCounter


