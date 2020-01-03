import React, { useEffect } from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {  test } from './store/reducer';
function App() {
  const counter = useSelector(state=>state.data);
  const dipatch = useDispatch();
  useEffect(()=>{
      test().then(e=>{
        dipatch ({
          type:'show',
          payload:e,
      });
      
    });
  },[dipatch]);
  return (
    <div className="App">
      <ul>
      { counter.map((v)=>{
        return (<li key={v.id}>{v.title}</li>)
      })}
      </ul>
     
    </div>
  );
}

export default App;
