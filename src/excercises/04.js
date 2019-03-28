// Reuse logic, renderprops
import React, {Component, PureComponent} from 'react'
import {Button} from 'react-bootstrap';

// === Counter =====

class Counter extends PureComponent {

  state = {count: 0}

  incrementCount = () => this.setState((prevState) => {
    return { count: prevState.count + 1 }
  })

  render() {

    const {children, name} = this.props;

    return (
        <div>
          <Button onClick={this.incrementCount}>Counter {name}: {this.state.count}</Button>
          {children(this.state.count)}
        </div>
    );
  }
}

// === SuperCounter =====

class SuperCounter extends Component {

  render() {

    return (
        <div>
          <h1>Pattern 2</h1>
          <div>
            <Counter name="1">
              {count => (
                  <div>
                    <div>Double counter: {count * 2}</div>
                    <div>Tripple counter: {count * 3}</div>
                    <div>Quadruple counter: {count * 4}</div>
                  </div>
              )}
            </Counter>
          </div>
        </div>
    )
  }
}

export default SuperCounter


