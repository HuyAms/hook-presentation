import React, {Component} from 'react';

//======== JavaScript: Not beginner friendly ===========

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

//======== Life cycle ==================

// TODO: Subcribe To Feed (REUSE)
// TODO: Subcribe To Status (REUSE)
// TODO: Set document title (REUSE)

class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.subcribeToFeed(this.props.id)
    this.subcribeToStatus(this.props.statusId)
    this.setDocumentTitle()
  }

  componentDidUpdate(prevProps, prevState) {
    // ... compare props and re-subcribe...

    if (prevProps.id !== this.props.id) {
      // resubcribe
    }

    if (prevProps.statusId !== this.props.statusId) {
      // resubcribe
    }
  }

  componentWillUnmount() {
    this.unsubcribeToFeed(this.props.statusId)
    this.unsubcribeToStatus
    this.restoreDocumentTitle()
  }

  render() {
    return (
        <div>Foo</div>
    )
  }
}


//======== Reuse Stateful Logic ==================


// TODO: with HOC or Render props

// TODO: Subcribe To Feed (REUSE)
// TODO: Subcribe To Status (REUSE)
// TODO: Set document title (REUSE)

// ======= HOC ======

const withSubcribeToFeed = WrappedComponent => {

   return class SubcribeToFeedComponent extend Component {

      componentDidMount() {

        subcribeToFeed(id)
      }

      componentDidUpdate() {

        reSubcribeToFeed(id)
      }

      componentWillUnmount() {

        unSubcribeToFeed()
      }

      render() {
        return <WrappedComponent {...this.props}/>
      }
   }
}

const withSubcribeToStatus = WrappedComponent => {}

const withSetTitle= WrappedComponent => {}


// ======= FriendStatus ======

class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>Foo</div>
    )
  }
}

// Wrapper Hell

/*

<withSubcribeToFeed>
  <withSubcribeToStatus>
    <withSetTitle>
      <FriendStatus/>
    </withSetTitle>
  </withSubcribeToStatus>
</withSubcribeToFeed>

*/


// ====Render prop=====

/*

<SubcribeToFeed>
  {() => {
    <withSubcribeToStatus>
      {() => {
          <withSetTitle>
            {() => {
              <FriendStatus/>
            }
        <SubcribeToFeed/>
      }
    <SubcribeToFeed/>
  }
<SubcribeToFeed/>

 */











// TODO: with Hook

// TODO: Subcribe To Feed (REUSE)
// TODO: Subcribe To Status (REUSE)
// TODO: Set document title (REUSE)

// ===== HOOK =====

const useSubscribeToFeed = () => {}

const useSubscribeToStatus = () => {}

const useSetTitle = () => {}


// ===== FriendStatus =====

const FriendStatus = () => {

  useSubscribeToFeed(id)

  useSubscribeToStatus(statusId)

  useSetTitle()

  return (
      <div>Foo</div>
  )
}
