const pool = require('../config/dbConfig')();

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
        var con = pool.getConnection((err, con) => {
            con.query("INSERT INTO employees set ?", newEmp, (err, res) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, res.insertId);
                }
                con.release();
            });
        });
    }
    getEmployeeById(id, result) {
        var con = pool.getConnection((err, con) => {
            con.query("Select * from employees where id = ? ", id, (err, res) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, res);
                }
                con.release();
            });
        });
    };
    getAllEmployees(result) {
        var con = pool.getConnection((err, con) => {
            con.query("Select * from employees", (err, res) => {
                if (err) {
                    result(null, err);
                } else {
                    result(null, res);
                }
                con.release();
            });
        });
    };
    update(id, employee, result) {
        var con = pool.getConnection((err, con) => {
            con.query("UPDATE employees SET name=?,email=?,phone=?,designation=?,salary=? WHERE id = ?", [employee.name, employee.email, employee.phone, employee.designation, employee.salary, id], (err, res) => {
                if (err) {
                    result(null, err);
                } else {
                    result(null, res);
                }
                con.release();
            });
        });
    };
    delete(id, result) {
        var con = pool.getConnection((err, con) => {
            con.query("DELETE FROM employees WHERE id = ?", [id], (err, res) => {
                if (err) {
                    result(null, err);
                } else {
                    result(null, res);
                }
                con.release();
            });
        });
    }
}

module.exports = Employee;