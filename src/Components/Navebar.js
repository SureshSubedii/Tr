import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navebar(props) {
  
  return (
    <nav className='navbar navbar-expand-lg navbar-info bg-info'>
  <div className="container-fluid">
    <Link className="navbar-brand ff-timesNewRoman fs-1 text-success" to="/" style={{fontFamily:'fantasy'}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item mx-2">
          <Link className="nav-link " to="/about">{props.AboutUs}</Link>
        </li>
      </ul>
      
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="SEARCH" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      {/* <p className={`my-2 fs-3 fw-bold text-${props.mode==='black'?'light':'black'}`}> Background Color:</p>
      <button type="button" className="btn btn-success mx-3" onClick={handleGreen}>Green</button>
<button type="button" className="btn btn-danger mx-3" onClick={handleREd}>Red</button>
<button type="button" className="btn btn-warning mx-3 " onClick={handleYellow}>Yellow</button> */}
    </div>
    <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.modSuccess('success')}} ></div>
    <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.modSuccess('danger')}}></div>
    <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.modSuccess('warning')}}></div>

    <div className="form-check form-switch  border border-black">
  <input className="form-check-input" type="checkbox" onClick={props.modetoggler} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
</div>

  </div>
 
</nav>
  )
}
Navebar.propTypes={
  title:PropTypes.string.isRequired,
  AboutUs:PropTypes.string.isRequired

}
Navebar.defaultProps={
  title:'Set Title Here',
  AboutUs:'Set About Us'
}
