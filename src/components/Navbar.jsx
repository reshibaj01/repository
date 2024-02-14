import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';






const Navbar =() =>{
    return(
        <div className="navbar">
            <p style={{fontStyle:"italic"}}>Accelerator</p>
            <ul>
                
                <li>
                    <Link className="nav-link" to="#"role="button">Home</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">pages</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">BlogTemplates</Link>
                </li>
          <button className="btn-btn " style={{backgroundColor:"white"}}>Install Theme</button>

                
            </ul>
           
        </div>
    );
}

export default Navbar