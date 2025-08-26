import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CounterApp from './counterApp';
import TodoList from './toDoApp'
import reportWebVitals from './reportWebVitals';
import HeaderApp from './Header';
import Developer from './developer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderApp />
      <CounterApp />
      <TodoList />

      {/* Push Developer to bottom */}
      <div style={{ marginTop: "auto"}}>
        <Developer />
      </div>
    </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 