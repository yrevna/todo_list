import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  {id: "todo-0", name: "eat", completed: true},
  {id: "todo-1", name: "sleep", completed: false},
  {id: "todo-2", name: "repeat", completed: false},
]

const FilterButton = [
  {id: "all", name: "all"},
  {id: "active", name: "active"},
  {id: "completed", name: "completed"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} filter={FilterButton} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
