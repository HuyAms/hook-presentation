// customHook
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




