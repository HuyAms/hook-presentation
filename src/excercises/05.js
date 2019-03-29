import React, {Component} from 'react';
import {Button} from "react-bootstrap";

// === Component =====

//TODO: Subcribe Feed with ID

class UseEffect extends Component {

  state = {
    count: 0,
    id: 1
  }

  componentDidMount() {
    subcribeToFeed(this.state.id)
  }

  componentWillUnmount() {
    unscribeToFeed(this.state.id)
  }

  incrementCount = () => this.setState((prevState) => {
    return { count: prevState.count + 1 }
  })

  changeId = () => this.setState((prevState) => {
    return { id: prevState.id + 1 }
  })


  render() {
    return (
        <div>
          <h1>UseEffect</h1>
          <Button onClick={this.incrementCount}>Counter: {this.state.count}</Button>
          <br/>
          <Button onClick={this.changeId}>ChangeID: {this.state.id}</Button>
        </div>
    );
  }
}

// === Helper =====

const subcribeToFeed = (id) => {
  console.log('Subscribe: ', id)
}

const unscribeToFeed = (id) => {
  console.log('Unsubscribe: ', id)
}


export default UseEffect





//
// componentDidUpdate(_prevProp, prevState) {
//
//   // Resubcribe
//
//   if (prevState.id !== this.state.id) {
//
//     unscribeToFeed(prevState.id)
//
//     subcribeToFeed(this.state.id)
//   }
// }



// const UseEffect = (props) => {
//
//   const [count, setCount] = useState(0)
//   const [id, setId] = useState(1)
//
//   const incrementCount = () => setCount(count + 1)
//
//   const changeId = () => setId(id + 1)
//
//   return (
//       <div>
//         <h1>UseEffect</h1>
//         <Button onClick={incrementCount}>Counter: {count}</Button>
//         <br/>
//         <Button onClick={changeId}>ChangeID: {id}</Button>
//       </div>
//   );
// }
//
// export default UseEffect






