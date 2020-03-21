const express = require('express')
const router = express.Router()
const EmployeeController = require('../controllers/employeeController')

router.get('/', EmployeeController.listEmpl)
router.post('/show', EmployeeController.showEmp)
router.post('/store', EmployeeController.storeEmp)
router.post('/update', EmployeeController.updEmp)
router.post('/delete', EmployeeController.delEmp)


module.exports = router