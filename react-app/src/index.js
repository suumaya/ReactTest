import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// because Counter is default export, we dont need braces around it
import Counter from './components/counter'; 

// rendering simple h1 element:
// const element = <h1>here is an element</h1>;
// // console.log(element); // in the virtual dom only :)
//   ReactDOM.render( // render in a real dom
//     element, // what to render?
//     document.getElementById('root') // where to render it? (index.html)
//   ); 


// rendering the App root component:
// components as html elements <App/>,<Counter/> ...
ReactDOM.render( 
   <React.StrictMode>
    <Counter />
   </React.StrictMode>, 
  document.getElementById('root') 
  ); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
