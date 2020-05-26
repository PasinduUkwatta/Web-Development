import React from 'react';
import logo from './logo.svg';
import './App.css';

//we can define css attributes and add them separatly to them
var style ={color :'yellow'}

var style2 ={color: 'blue'}
function App() {
  return (
//in the return function we can only use one div
      //so we need to put them together in one div tag
      <div style={style}>
        <h1 style={style2}>Hello world</h1>
        <h3>React Programming</h3>
        <h4>{6+9}
        </h4>

          <script src="EventScript.jsx" type="text/babel"> </script>

      </div>

  );
}

export default App;
