import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reduxComponent/actions/index';

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h4>count : {count}</h4>
      <button onClick={() => { dispatch(increment(5)) }}>+</button>
      <button onClick={() => { dispatch(decrement(5)) }}>-</button>
    </div >
  );
}

export default App;
