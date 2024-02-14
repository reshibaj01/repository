import React from 'react'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="container">
    <div className="pics">
    <img className="img" style={{width:"100vw",height:"30vh"}} src="/images/pic1.jpg" alt="" />
    <div className='topcontainer'>
    <text className="text" style={{fontSize:"15px"}}>HOME PAGE</text>
    <text>Build and manage your HubSpot </text>
    <text>Website without code.</text>
    
      <div className="btn">
      <button>Learn More</button>
      </div>
      </div>
    </div>
    
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav justify-content-center">
  <Link className="navbar-brand" to="#">atlassian</Link>
    <Link className="nav-link active" aria-current="page" to="#">locoste</Link>
   <Link className="nav-link" to="#">juniper</Link>
    <Link className="nav-link active" aria-current="page" to="#">Hubspot</Link>
   
   
    </div>
   
</div>

</div>


</nav>




 

</div>

  );
}

export default Header