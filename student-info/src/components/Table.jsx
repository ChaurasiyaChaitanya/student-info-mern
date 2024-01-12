import Icon from 'react-crud-icons';
import "../../node_modules/react-crud-icons/dist/css/react-crud-icons.css"
import Register from './Register';

function Table(props) {
    return(
        <>
              <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope='col'>Sr. No.</th>
                        <th scope='col'>Roll Number</th>
                        <th scope='col'>Student Name</th>
                        <th scope='col'>Marks: Subject 1</th>
                        <th scope='col'>Marks: Subject 2</th>
                        <th scope='col'>Marks: Subject 3</th>
                        <th scope='col'>Total Marks</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.length === 0 && <tr><td colSpan='9'><center>No Records Found.</center></td></tr>}
                    {props.data.length > 0 && props.data.map((stu, i) => {
                        return (
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{stu.roll_number}</td>
                            <td>{stu.student_name}</td>
                            <td>{stu.sub1_marks}</td>
                            <td>{stu.sub2_marks}</td>
                            <td>{stu.sub3_marks}</td>
                            <td>{stu.total_marks}</td>
                            <td>{stu.status}</td>
                            <td>
                            <button className='btnc border-0 bg-transparent' data-toggle="modal" data-target="#studentModal" onClick={() => props.handleGetDataForUpdate(stu._id)}><Icon className="bg-primary" name="edit" tooltip="Edit" theme="dark" size="small" /></button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <Register />
        </>
    )
}

export default Table;