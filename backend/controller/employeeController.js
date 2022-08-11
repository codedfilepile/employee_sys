const asyncHandler = require('express-async-handler')
const Employee = require('../models/employeeModel')


//GET api/employees
const getEmployee = asyncHandler( async (req, res ) => {

    const employee = await Employee.find()

    res.status(200).json(employee)
})


//POST api/employees
const setEmployee = asyncHandler( async (req, res ) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'set employee'})
})



//UPDATE api/employees/:id
const updateEmployee = asyncHandler( async (req, res ) => {
    res.status(200).json({message: `update employee ${req.params.id}`})
})


//DELETE api/employees/:id
const deleteEmployee = asyncHandler( async (req, res ) => {
    res.status(200).json({message: `delete employee ${req.params.id}`})
})

module.exports ={getEmployee, setEmployee, updateEmployee, deleteEmployee}