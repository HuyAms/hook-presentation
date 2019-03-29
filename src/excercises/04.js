// Reuse logic, renderprops
import React, {Component} from 'react'
import {Button} from 'react-bootstrap';

// === Counter =====

class Counter extends Component {

  state = {count: 0}

  incrementCount = () => this.setState((prevState) => {
    return { count: prevState.count + 1 }
  })

  render() {

    const {children, name} = this.props;

    return (
        <div>
          <Button onClick={this.incrementCount}>Counter {name}: {this.state.count}</Button>
          {children(this.state.count, this.incrementCount)}
        </div>
    );
  }
}

// === SuperCounter - Render props =====

class SuperCounter extends Component {

  render() {

    return (
        <div>
          <h1>Pattern 2</h1>
          <div>
            <Counter name="1">
              {(count, incrementCount) => (
                  <div style={{backgroundColor: '#cbfcff', marginTop: '30px', padding: '20px'}}>
                    <h2 style={{color: '#f58a03'}}>I am NOT part of the Counter component</h2>
                    <p>Double counter: {count * 2}</p>
                    <p>Tripple counter: {count * 3}</p>
                    <p>Quadruple counter: {count * 4}</p>
                    <Button variant="warning" onClick={incrementCount}>Click me. I am not the Counter</Button>
                  </div>
              )}
            </Counter>
          </div>
        </div>
    )
  }
}

export default SuperCounter


