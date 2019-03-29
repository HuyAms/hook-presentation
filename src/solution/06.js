import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";

const useSubscribeToFeed = (initialId) => {

  const [id, setId] = useState(initialId)

  useEffect(() => {
    subcribeToFeed(id)

    return () => unscribeToFeed(id)
  }, [id])

  const changeId = () => setId(id + 1)

  return [id, changeId]
}

// === Component =====

const UseEffect = (props) => {

  const [count, setCount] = useState(0)

  const [id, changeId] = useSubscribeToFeed(1)

  const incrementCount = () => setCount(count + 1)

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
