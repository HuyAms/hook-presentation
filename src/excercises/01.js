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
        <Button onClick={this.incrementCount}>{this.state.count}</Button>
    );
  }
}



export default Counter
























// function Counter() {
//   const [count, setCount] = useState(0)
//   const incrementCount = () => setCount(count + 1)
//   return <Button onClick={incrementCount}>{count}</button>
// }