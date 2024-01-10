import {NavLink} from 'react-router-dom'

function Navbar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to='/home'>Student Gallary</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-">
                <li className="nav-item"><NavLink className="nav-link" to='/home'>Home</NavLink></li>    
            </ul>
            </div>
        </nav>
        </>
    );
}


export default Navbar;