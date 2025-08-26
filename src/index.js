import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CounterApp from './counterApp';
import TodoList from './toDoApp'
import reportWebVitals from './reportWebVitals';
import HeaderApp from './Header';
import Developer from './developer';
import Navigation from './navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div
      style={{display: "flex", minHeight: "100vh" }} >
     
      <div style={{ width: "300px", borderRight: "1px solid #ccc",backgroundColor:'silver', textAlign:"center", border: "3px solid black"}}>
        <Navigation />
      </div>

      {/* Right Side - Other Components in a column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,              // Take remaining space
        }}
      >
        <HeaderApp />
        <CounterApp />
        <TodoList />

        {/* Push Developer to bottom */}
        <div style={{ marginTop: "auto" }}>
          <Developer />
        </div>
      </div>
    </div>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 