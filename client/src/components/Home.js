import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ENDPOINT } from '../index';

export default function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get(`${ENDPOINT}/employees`);
    setEmployees(result.data);
  };

  const deleteEmployee = async id => {
    await axios.delete(`${ENDPOINT}/employees/${id}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2 className="text-center">Employees Data</h2>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>
                  <Link className="btn btn-primary me-3" to={`/employees/${employee.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary me-3" to={`/employees/edit/${employee.id}`}>
                    Edit
                  </Link>
                  <Link className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};