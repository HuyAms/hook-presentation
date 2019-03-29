// reuse logic
import React, {Component, useState} from 'react'
import {Button} from 'react-bootstrap';

// === Counter =====

class Counter extends Component {

  render() {

    const {incrementCount, count, name} = this.props;
    return (
        <Button onClick={incrementCount}>Counter {name}: {count}</Button>
    );
  }
}

// === CounterDifference - Lift State =====

class CounterDifference extends Component {

  state = {
    counter1: 0,
    counter2: 0
  }

  incrementCount1 = () => this.setState((prevState) => {
    return { counter1: prevState.counter1 + 1 }
  })

  incrementCount2 = () => this.setState((prevState) => {
    return { counter2: prevState.counter2 + 1 }
  })

  render() {

    return (
        <div>
          <h1>Pattern 1</h1>
          <div>
            <Counter incrementCount={this.incrementCount1} count={this.state.counter1} name="1"/>
          </div>
          <div>Difference: {this.state.counter1 - this.state.counter2}</div>
          <div>
            <Counter incrementCount={this.incrementCount2}  count={this.state.counter2} name="2"/>
          </div>
        </div>
    )
  }
}

export default CounterDifference




// const useCount = (initialValue) => {
//
//   const [count, setCount] = useState(initialValue) // Initial value'
//
//   const incrementCount = () => setCount(count + 1)
//
//   return [count, incrementCount]
// }
//
// const Counter = () => {
//
//   const [count, incrementCount] = useCount(0)
//
//   return (
//       <div>
//         <h1>UseState</h1>
//         <Button onClick={incrementCount}>Counter: {count}</Button>
//       </div>
//   )
// }
//
// export default Counter
