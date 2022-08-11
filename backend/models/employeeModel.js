const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    firstName:{
        type: String,
        require:[true, `Please employee's First Name`]
    }
},//{
//     lastName:{
//         type: String,
//         require:[true, `Please enter employee's Last Name`]
//     }
// },{
//     email:{
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: 'Email address is required',
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     }
// },{
//     mobile:{
//         type: Number,
//         max:10
//     }
// },{
//     gender: {
//         type: String,
//         required: true,
//     }
// },{
//     designation: {
//         type: String,
//         require:[true, `Enter employee's designation`]
//     }
// },{
//     reportingManager:{
//         type: String,
//         require:[true, "Employee's reporting manager"]
//     }
// },{
//     salary:{
//         type:Number,
//         require:[true, "Employee's Salary"]
//     }
// },{
//     employeeCode:{
//         type:Number,
//         require:[true, "Employee Code"]
//     }
// },{
//     location:{
//         type: String,
//         require:[true, `Please enter employee's location`]
//     }
// },{
//     state:{
//         type: String,
//         require:[true, `Please enter employee's State`]
//     }
// },{
//     country:{
//         type: String,
//         require:[true, `Please enter employee's Country`]
//     }
// },{
//     department:{
//         type: String,
//         require:[true, `Please enter employee's Department`]
// }}
)

module.exports = mongoose.model('Employee',employeeSchema)