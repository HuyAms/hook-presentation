// Reuse logic, renderprops
import React, {Component, PureComponent} from 'react'
import {Button} from 'react-bootstrap';

class Counter extends PureComponent {

  state = {count: 0}

  incrementCount = () => this.setState((prevState) => {
    return { count: prevState.count + 1 }
  })

  render() {
    return (
        <div>
          <Button onClick={this.incrementCount}>{this.state.count}</Button>
          {this.props.children(this.state.count)}
        </div>
    );
  }
}

class CounterDifference extends Component {

  render() {

    return (
        <div>
          <h2>Render prop</h2>
          <div>
            <Counter name="Counter 1">
              {count => (
                  <div>Double counter: {count * 2}</div>
              )}
            </Counter>
          </div>
        </div>
    )
  }
}

export default CounterDifference


