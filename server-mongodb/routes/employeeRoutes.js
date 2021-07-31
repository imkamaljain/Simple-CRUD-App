const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');
const employeeController = new EmployeeController();

router.get('/', employeeController.getAllEmployees);

router.post('/', employeeController.createEmployee);

router.get('/:id', employeeController.getEmployeeById);

router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;