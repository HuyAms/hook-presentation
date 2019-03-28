// reuse logic
import React, {Component, useState} from 'react'
import {Button} from 'react-bootstrap';

class Counter extends Component {

  render() {

    const {incrementCount, count, name} = this.props;
    return (
        <Button onClick={incrementCount}>Counter {name}: {count}</Button>
    );
  }
}


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
          <div>
            <p>Counter1</p>
            <Counter incrementCount={this.incrementCount1} count={this.state.counter1} name="Counter 1"/>
          </div>
          <div>Difference: {this.state.counter1 - this.state.counter2}</div>
          <div>
            <p>Counter2</p>
            <Counter incrementCount={this.incrementCount2}  count={this.state.counter2} name="Counter 2"/>
          </div>
        </div>
    )
  }
}

export default CounterDifference
