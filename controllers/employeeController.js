const Employee = require('../models/employee')

//show the list of employees
const listEmpl = (req, res, next) => {
    Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured !'
            })
        })
}

//show  single Employee by id

const showEmp = (req, res, next) => {
        let employeID = req.body.employeID
        Employee.findById(employeID)
            .then(response => {
                res.json({
                    response
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error Occured !'
                })
            })
    }
    // add Employee to database
const storeEmp = (req, res, next) => {
    let employe = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    if (req.files) {
        let path = ''
        req.files.forEach(function(files, index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        employe.avatar = path
    }
    employe.save()
        .then(response => {
            res.json({
                message: 'employee added successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured !'
            })
        })
}

// update an employee by her Id
const updEmp = (req, res, next) => {
    let employeID = req.body.employeID
    let employeUpd = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeID, { $set: employeUpd })
        .then(response => {
            res.json({
                message: 'employee updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured !'
            })
        })
}

//delete an employee by Id

const delEmp = (req, res, next) => {
    let employeID = req.body.employeID
    Employee.findByIdAndRemove(employeID)
        .then(response => {
            res.json({
                message: 'employee deleted successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured !'
            })
        })
}
module.exports = {
    delEmp,
    showEmp,
    updEmp,
    storeEmp,
    listEmpl
}