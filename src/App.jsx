import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './redux/slice';
const App=()=>{
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.value);

  const incrementValue=()=>{
    dispatch(increment())
  }
  const decrementValue=()=>{
    dispatch(decrement())
  }
  console.log("Hello World");
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      gap:"10px"
    }}>
    <h1>Counter App </h1>
    <h3>Current counter value : {count}</h3>
    <button onClick={incrementValue}>Increment</button>
    <button onClick={decrementValue}>Decrement</button>
    </div>
  )
}
export default App
