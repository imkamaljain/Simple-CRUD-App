const Employee = require('../models/employeeModel');

class controller {
    getAllEmployees = async (req, res) => {
        try {
            const employees = await Employee.find();
            res.status(200).json(employees);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    };
    getEmployeeById = async (req, res) => {
        try {
            const employee = await Employee.findById(req.params.id);
            res.status(200).json(employee);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    };
    createEmployee = async (req, res) => {
        const employee = req.body;
        const newEmployee = new Employee(employee);
        try {
            await newEmployee.save();
            res.status(201).json(newEmployee);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    };
    updateEmployee = async (req, res) => {
        let employee = await Employee.findById(req.params.id);
        employee = req.body;
        const updated = new Employee(employee);
        try {
            await Employee.updateOne({ _id: req.params.id }, updated);
            res.status(201).json(updated);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    };
    deleteEmployee = async (req, res) => {
        try {
            await Employee.deleteOne({ _id: req.params.id });
            res.status(201).json("Employee deleted Successfully");
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    };
}

module.exports = controller;