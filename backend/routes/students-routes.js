const express = require('express');
const Student = require('../models/student')
 
const studentRouter = express.Router();


studentRouter.get('/', async (req, res) => {
 
    let data;
    let search = req.query.search;
    let sortBy = req.query.sortBy;
    let sortType = req.query.sortType;
 
    let ord = 1;
    if(sortType && sortType.charAt(0) === "d") {
        ord = -1;
    }
 
    try {
        if(sortBy && sortBy.includes('Roll')) {
            data = await Student.find().sort({roll_number: ord});
            console.log(data);
        } else if (sortBy && sortBy.includes('Name')) {
            data = await Student.find().sort({student_name: ord});
            console.log(data);
        } else {
            data = await Student.find();
        }
        if(search) {
            data = await Student.find({$or : [{student_name : {$regex : search , $options : 'i'}}, {roll_number : {$regex : search , $options : 'i'}}]})
            // data = data.filter((d) => d.roll_number.toLowerCase().includes(search.toLowerCase())
            // || d.student_name.toLowerCase().includes(search.toLowerCase()));
 
            // starts with '^'+search
            // ends with search+'$'
            console.log(data);
        }
 
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