import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, AddEmployee, ShowEmployee, EditEmployee, NotFound } from './index';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees/add" component={AddEmployee} />
          <Route exact path="/employees/:id" component={ShowEmployee} />
          <Route exact path="/employees/edit/:id" component={EditEmployee} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};