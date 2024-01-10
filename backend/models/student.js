const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const studentSchema = new Schema({
    roll_number: { type: String, required: true },
    student_name: { type: String, required: true },
    sub1_marks : { type: Number, required: true, max: [100, 'Max limit 100'] },
    sub2_marks : { type: Number, required: true, max: [100, 'Max limit 100'] },
    sub3_marks : { type: Number, required: true, max: [100, 'Max limit 100'] },
    total_marks : { type: Number, required: true, max: [300, 'Max limit 300'] },
    status : { type: String, required: true, enum: {values: ['Pass', 'Fail'], message: '{VALUE} is not allowed' }},
    remarks : { type: String }
});
 
 
module.exports = mongoose.model('Student', studentSchema);