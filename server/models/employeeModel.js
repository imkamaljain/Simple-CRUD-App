var con = require('../config/dbConfig');

class Employee {
    constructor(employee) {
        if (employee) {
            this.name = employee.name;
            this.email = employee.email;
            this.phone = employee.phone;
            this.designation = employee.designation;
            this.salary = employee.salary;
        }
    }
    create(newEmp, result) {
        con.query("INSERT INTO employees set ?", newEmp, function (err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
    }
    getEmployeeById(id, result) {
        con.query("Select * from employees where id = ? ", id, function (err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };
    getAllEmployees(result) {
        con.query("Select * from employees", function (err, res) {
            if (err) {
                result(null, err);
            } else {
                result(null, res);
            }
        });
    };
    update(id, employee, result) {
        con.query("UPDATE employees SET name=?,email=?,phone=?,designation=?,salary=? WHERE id = ?", [employee.name, employee.email, employee.phone, employee.designation, employee.salary, id], function (err, res) {
            if (err) {
                result(null, err);
            } else {
                result(null, res);
            }
        });
    };
    delete(id, result) {
        con.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
            if (err) {
                result(null, err);
            } else {
                result(null, res);
            }
        });
    };
}

module.exports = Employee;