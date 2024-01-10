const express = require('express');
const Student = require('../models/student')
 
const studentRouter = express.Router();

studentRouter.get('/', async (req, res) => {
    res.status(200).json("Welcome to Student info system")
})


module.exports = studentRouter;