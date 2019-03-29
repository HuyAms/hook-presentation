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

        <Counter count={count} incrementCount={incrementCount} name="1"/>

        <div style={{backgroundColor: '#cbfcff', marginTop: '30px', padding: '20px'}}>
          <h2 style={{color: '#f58a03'}}>I am NOT part of the Counter component</h2>
          <div>
            <p>Double counter: {count * 2}</p>
            <p>Tripple counter: {count * 3}</p>
            <p>Quadruple counter: {count * 4}</p>
            <Button variant="warning" onClick={incrementCount}>Click me. I am not the Counter</Button>
          </div>
        </div>
      </div>
  )
}

export default SuperCounter



// === Counter =====

// const useCount = (initialValue) => {
//
//   const [count, setCount] = useState(initialValue) // Initial value'
//
//   const incrementCount = () => setCount(count + 1)
//
//   return [count, incrementCount]
// }
//
// const Counter = ({count, incrementCount}) => {
//
//   return (
//       <div>
//         <Button onClick={incrementCount}>Counter: {count}</Button>
//       </div>
//   )
// }
