const express = require('express')
const { getEmployee, setEmployee, updateEmployee, deleteEmployee } = require('../controller/EmployeeController')
const router = express.Router()

router.get('/', getEmployee)

router.post('/', setEmployee)

router.put('/:id', updateEmployee)

router.delete('/:id', deleteEmployee)

module.exports = router