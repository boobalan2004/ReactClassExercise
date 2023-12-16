import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// var name="Boobalan"
// const display=<div><h1>Hi my name is {name}</h1> <p> hello hello</p></div>

// var display=<ol start={5} type='i'>
//   <li>Mango</li>
//   <li>Apple</li>
//   <li>Orange</li>
// </ol>

// const age=19;
// if(age>18) 
// {
//   var display=<h1>Eligible</h1> 
// }
// else 
// {
//   var display=<h1>Not Eligible</h1>
// }
// var display=<h1 style={{color: "blue"}}>{age>18 ? "Eligible" : "Not Eligible"}</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
