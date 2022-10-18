import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import {liquid,gas,solid} from './store/actionsFunc'


function App() {

  const state=useSelector<any,any>(state=>state);
  
  const dispatch=useDispatch()
  
  return (
    <div className='App'>
        <h1>Change State</h1>
        <div className='btns'>
          <button onClick={()=>dispatch(liquid(1))}>Liquid</button>
          <button onClick={()=>dispatch(gas(2))}>Gas</button>
          <button onClick={()=>dispatch(solid(3))}>Solid</button>
        </div>
        <p>H2O is feeling:</p>
        <span>{state}</span>
    </div>
  );
}

export default App;
