const mongoose = require('../config/dbConfig');
const autoIncrement = require('mongoose-auto-increment');

const employeeSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    designation: String,
    salary: Number
});

employeeSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

autoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(autoIncrement.plugin, 'employees');

module.exports = mongoose.model('employees', employeeSchema);