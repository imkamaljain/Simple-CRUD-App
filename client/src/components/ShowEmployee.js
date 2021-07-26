
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from '../index';

export default function ShowEmployee() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  useEffect(() => {
    loadEmployee();
  }, []);
  const loadEmployee = async () => {
    const res = await axios.get(`${ENDPOINT}/employees/${id}`);
    setEmployee(res.data[0]);
  };

  return (
    <div className="container py-4 w-75 mx-auto shadow p-3">
      <h2 className="text-center">Employee Details</h2>
      <hr />
      <div className="d-flex justify-content-center">
        <ul className="list-group w-50">
          <li className="list-group-item">ID: {employee.id}</li>
          <li className="list-group-item">Name: {employee.name}</li>
          <li className="list-group-item">Designation: {employee.designation}</li>
          <li className="list-group-item">Salary: {employee.salary}</li>
          <li className="list-group-item">Email: {employee.email}</li>
          <li className="list-group-item">Phone: {employee.phone}</li>
        </ul>
      </div>
    </div>
  );
};