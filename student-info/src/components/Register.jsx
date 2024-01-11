import { useState } from "react";


function Register() {

    const [formData, setFormData] = useState({
        roll_number: "",
        student_name: "",
        sub1_marks: "",
        sub2_marks: "",
        sub3_marks: "",
        remarks: ""
    })

    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("");

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.type === "number" ? parseInt(e.target.value) : e.target.value})
    }

    return(
        <>
         <div className="modal fade" id="studentModal" tabIndex="-1" role="dialog" aria-labelledby="studentModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="studentModalLabel">Students Gallary : Registration</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="stu-form">
                            <div className="d-flex justify-content-around">
                                <div className="form-group">
                                    <label htmlFor="roll_number" className="col-form-label">Roll Number</label>
                                    <input type="text" className="form-control" id="roll_number" name="roll_number" onChange={handleOnChange} value={formData.roll_number} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="student_name" className="col-form-label">Student Name</label>
                                    <input type="text" className="form-control" id="student_name" name="student_name" onChange={handleOnChange} value={formData.student_name}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div className="form-group">
                                    <label htmlFor="sub1_marks" className="col-form-label">Subject 1 Marks</label>
                                    <input type="number" className="form-control" id="sub1_marks" name="sub1_marks" onChange={handleOnChange} value={formData.sub1_marks}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sub2_marks" className="col-form-label">Subject 2 Marks</label>
                                    <input type="number" className="form-control" id="sub2_marks" name="sub2_marks" onChange={handleOnChange} value={formData.sub2_marks}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div className="form-group">
                                    <label htmlFor="sub3_marks" className="col-form-label">Subject 3 Marks</label>
                                    <input type="number" className="form-control" id="sub3_marks" name="sub3_marks" onChange={handleOnChange} value={formData.sub3_marks}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="total_marks" className="col-form-label">Total Marks</label>
                                    <input type="number" className="form-control" id="total_marks" name="total_marks" value={total} readOnly/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div className="form-group">
                                    <label htmlFor="status" className="col-form-label">Status</label>
                                    <input type="text" className="form-control" id="status" name="status" value={status} readOnly/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remarks" className="col-form-label">Remarks</label>
                                    <input type="text" className="form-control" id="remarks" name="remarks" onChange={handleOnChange} value={formData.remarks}/>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" form="stu-form" className="btn btn-primary" data-dismiss="modal">Save</button>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;