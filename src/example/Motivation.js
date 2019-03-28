import React, {Component} from 'react';

// JavaScript: Not beginner friendly
class Foo extends React.Component {

  constructor() {
    super()
    this.state = {count: this.props.initialCount}
  }

  increment() {
    this.setState((count) => ({count: count + 1}))
  }

  render() {
    return (
        <button onClick={this.increment}>
          Count: {this.state.count}
        </button>
    )
  }
}

const ChatAPI = 'foo';

// Lifecycle
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   this.subcribeToFeed(this.props.id)
    // this.subcribeToStatus()
    // this.setDocumentTitle()
  }

  componentDidUpdate(prevProps, prevState) {
    // ... compare props and re-subcribe...
  }

  componentWillUnmount() {
    this.unsubcribeToFeed(this.props.id)
    // this.unsubcribeToStatus
    // this.restoreDocumentTitle()
  }

  subcribeToFeed = (id) => {
    console.log('subcribeToFeed: ', id);
  }

  unsubcribeToFeed = (id) => {
    console.log('unsubcribeToFeed: ', id);
  }

  render() {
    return (
        <div>Foo</div>
    )
  }
}

// Reuse Stateful Logic (HOC, render props, ...)
/*
<Wrapper1>
  <Wrapper2>
    <Wrapper3>
      <Wrapper4>
        <Component></Component>
      </Wrapper4>
    </Wrapper3>
  </Wrapper2>
</Wrapper1>
 */