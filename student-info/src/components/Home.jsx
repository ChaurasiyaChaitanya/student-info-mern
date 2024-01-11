import Register from "./Register";

function Home() {
    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#studentModal">Add Student Data</button>
                </div>
                <Register />
            </div>
        </>
    );
}


export default Home;