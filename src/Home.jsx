import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Home = ({ value }) => {

  const dispatch = useDispatch();
  const {c}=useSelector(state=>state.custom);

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const subBtn=()=>{
    dispatch({
      type: "decrement",
    })
  };

  const incrementBtn25=()=>{
    dispatch({
      type: "incrementByValue",
      payload:25,
    })
  }


  return (
    <div>
      <h2>{c}</h2>

      <button onClick={addBtn}>Increment</button>
      <button onClick={incrementBtn25}>IncrementBy25</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home
