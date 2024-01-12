import { useState, useEffect } from "react";

import Register from "./Register";
import Table from "./Table";
import axios from "axios";

function Home() {

    const [stuData, setStuData] = useState([]);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sortType, setSortType] = useState("");

    const [update, setUpdate] = useState(false);
    const [updateData, setUpdateData] = useState({});

    const handleGetData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/students?search=${search}&sortBy=${sortBy}&sortType=${sortType}`);
            setStuData(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleGetData();
    }, [search, sortBy, sortType]);

    const handleGetDataForUpdate = async (id) => {
        setUpdate(true);
        try {
            const res = await axios.get(`http://localhost:5000/students/${id}`);
            setUpdateData(res.data);
        } catch (err) {
            window.alert(err.message);
        }
    }
 
    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <div className="row g-3">
                        <div className="col-auto">
                            <input type="text" className="form-control" name="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-between">
                        <div className="form-check p-2">
                            <input className="form-check-input" type="radio" name="sortBy" value="sortRoll" onChange={(e) => setSortBy(e.target.value)} />
                            <label htmlFor="sortBy1" className="form-check-label">Roll Number</label>
                        </div>
                        <div className="form-check p-2">
                            <input className="form-check-input" type="radio" name="sortBy" value="sortName" onChange={(e) => setSortBy(e.target.value)} />
                            <label htmlFor="sortBy2" className="form-check-label">Student Name</label>
                        </div>
                    </div>
                    <select className="col-sm-2 form-select" onChange={(e) => setSortType(e.target.value)}>
                        <option value="">Select Sort Type</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#studentModal">Add Student Data</button>
                </div>
                <Register handleGetData={handleGetData} update={update} setUpdate={setUpdate} updateData={updateData}/>
                <Table data={stuData} handleGetDataForUpdate={handleGetDataForUpdate}/>
            </div>
        </>
    );
}


export default Home;