const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db.js');
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/employees',require('./routes/employeeRoutes.js'))

app.use(errorHandler)

app.listen(port, () => console.log(`server running on port number ${port}`))