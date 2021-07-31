const Employee = require('../models/employeeModel');
const emloyee = new Employee();

class controller {
    createEmployee(req, res) {
        const new_employee = new Employee(req.body);
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).send({ error: true, message: 'Please provide all required fields.' });
        } else {
            emloyee.create(new_employee, function (err, employee) {
                if (err) res.send(err);
                res.json({ error: false, message: "Employee added successfully!", data: employee });
            });
        }
    };
    getEmployeeById(req, res) {
        emloyee.getEmployeeById(req.params.id, function (err, employee) {
            if (err) res.send(err);
            res.json(employee);
        });
    };
    getAllEmployees(req, res) {
        emloyee.getAllEmployees(function (err, employee) {
            if (err) res.send(err);
            res.send(employee);
        });
    };
    updateEmployee(req, res) {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).send({ error: true, message: 'Please provide all required fields.' });
        } else {
            emloyee.update(req.params.id, new Employee(req.body), function (err, employee) {
                if (err) res.send(err);
                res.json({ error: false, message: 'Employee updated successfully!' });
            });
        }

    };
    deleteEmployee(req, res) {
        emloyee.delete(req.params.id, function (err, employee) {
            if (err) res.send(err);
            res.json({ error: false, message: 'Employee deleted successfully!' });
        });
    };
}

module.exports = controller;