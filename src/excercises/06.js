import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";

// === Component =====

const UseEffect = (props) => {

  const [count, setCount] = useState(0)
  const [id, setId] = useState(1)

  useEffect(() => {
    subcribeToFeed(id)

    return () => unscribeToFeed(id)
  }, [id])

  const incrementCount = () => setCount(count + 1)

  const changeId = () => setId(id + 1)

  return (
      <div>
        <h1>CustomHook - UseEffect</h1>
        <Button onClick={incrementCount}>Counter: {count}</Button>
        <br/>
        <Button onClick={changeId}>ChangeID: {id}</Button>
      </div>
  );
}

export default UseEffect

// === Helper =====

const subcribeToFeed = (id) => {
  console.log('Subscribe: ', id)
}

const unscribeToFeed = (id) => {
  console.log('Unsubscribe: ', id)
}
