import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

// === Counter =====

const useCount = (initialValue) => {

  const [count, setCount] = useState(initialValue) // Initial value'

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


// === CounterDifference =====

const CounterDifference = () => {

  const [counter1, incrementCount1] = useCount(0)
  const [counter2, incrementCount2] = useCount(0)

  return (
      <div>
        <h1>Lift state</h1>
        <div>
          <Counter incrementCount={incrementCount1} count={counter1} name="1"/>
        </div>
        <div>Difference: {counter1 - counter2}</div>
        <div>
          <Counter incrementCount={incrementCount2}  count={counter2} name="2"/>
        </div>
      </div>
  )
}

export default CounterDifference
