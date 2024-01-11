const express = require('express');
const Student = require('../models/student')
 
const studentRouter = express.Router();


studentRouter.get('/', async (req, res) => {
 
    try {
        const data = await Student.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err)
    }
})

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