const express = require('express');
const Student = require('../models/student')
 
const studentRouter = express.Router();

studentRouter.get('/', async (req, res) => {
    res.status(200).json("Welcome to Student info system")
});

studentRouter.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        const data = await student.save();
        res.status(201).json({data, message: "Student Data Registered Successfully!"})
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = studentRouter;