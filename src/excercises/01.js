// Counter: useState
import React, {Component} from 'react'
import {Button} from 'react-bootstrap';

class Counter extends Component {

  state = {count: 0}

  incrementCount = () => this.setState((prevState) => {
    return { count: prevState.count + 1 }
  })

  render() {
    return (
        <div>
          <h1>UseState</h1>
          <Button onClick={this.incrementCount}>Counter: {this.state.count}</Button>
        </div>
    );
  }
}



export default Counter
























// function Counter() {
//   const [count, setCount] = useState(0)
//   const incrementCount = () => setCount(count + 1)
//   return <Button onClick={incrementCount}>{count}</button>
// }
