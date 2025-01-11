import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import logo from '../img/logo.png'
const Nav = (props) => {
let navigate = useNavigate()
    const handleLogout =() =>{
       localStorage.removeItem('token')
       navigate('/login')
       props.showAlert("Log Out Successfully","success")
    }
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Notebook" className="img-fluid" style={{ maxHeight: '40px' }} /></Link>
                    {location.pathname !== '/signup' && location.pathname !== '/login' && ( <>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} to="/" > <b>Home</b> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/contact"? "active": ""}`} to="/contact" > <b>Contact</b> </Link>
                            </li>
                            <li><Link className={`nav-link ${location.pathname==="/about"? "active": ""}`}to="/about"><b>About</b></Link></li></ul>
                            <form className="d-flex">
                        <button className="btn btn-primary" onClick={handleLogout}>Log out</button></form>
                         </div> 
                    </>  )}
                </div>
            </nav>
        </>
    )
}

export default Nav
