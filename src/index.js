
import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainrender from './Mainrender';
// import App from './Store/Store/App.js';
// import { Provider } from 'react-redux';
// import Counter from './Reduxfiles/Counter.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
{/* 
<Provider store={App}>
  
<Counter/>             
</Provider> */} 

<Mainrender/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

