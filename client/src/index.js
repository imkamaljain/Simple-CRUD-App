import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export { default as Navbar } from './components/Navbar';
export { default as Home } from './components/Home';
export { default as AddEmployee } from './components/AddEmployee';
export { default as ShowEmployee } from './components/ShowEmployee';
export { default as EditEmployee } from './components/EditEmployee';
export { default as NotFound } from './components/NotFound';
export const ENDPOINT = 'http://localhost:5000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);