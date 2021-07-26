import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { ENDPOINT } from '../index';

export default function AddEmployee() {
  let history = useHistory();
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    salary: '',
    email: '',
    phone: ''
  });

  const { name, designation, salary, email, phone } = employee;
  const onInputChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const re = await axios.post(`${ENDPOINT}/employees`, employee);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-3">
        <h2 className="text-center mb-4">Add Employee</h2>
        <hr />
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="designation">Designation:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Designation"
              name="designation"
              value={designation}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="salary">Salary:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Salary"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="email">Email Address:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="phone">Phone Number:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block mt-3">Add Employee</button>
        </form>
      </div>
    </div>
  );
};