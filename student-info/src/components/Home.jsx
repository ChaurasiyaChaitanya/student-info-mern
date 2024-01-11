import { useState, useEffect } from "react";

import Register from "./Register";
import Table from "./Table";
import axios from "axios";

function Home() {

    const [stuData, setStuData] = useState([]);

    const handleGetData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/students`);
            setStuData(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        handleGetData();
    }, []);



    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#studentModal">Add Student Data</button>
                </div>
                <Register handleGetData={handleGetData}/>
                <Table data={stuData}/>
            </div>
        </>
    );
}


export default Home;