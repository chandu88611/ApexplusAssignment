import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
function Navbar() {
  return (
    <div style={{background:'grey',width:'13vw',display:'grid'}}>
     <ul style={{listStyle:'none'}}>

        <li style={{padding:'1vw',cursor:'pointer',width:'110%'
        ,marginLeft:'-3vw'}} className="list"> <Link className="link" to={'/'} > Home</Link></li>
        <li style={{padding:'1vw',cursor:'pointer',width:'110%'
        ,marginLeft:'-3vw'
        }} className="list"><Link to={"/addscene"} className="link">Add Scenario</Link></li>
        <li style={{padding:'1vw',cursor:'pointer',width:'110%'
        ,marginLeft:'-3vw'}} className="list"> <Link to={'/alls'} className="link">All Scenarios</Link></li>
        <li className='list' style={{padding:'1vw',cursor:'pointer',width:'110%'
        ,marginLeft:'-3vw'}}><Link to={"/addvehicle"} className="link">Add Vehicle</Link></li>
     </ul>
     

    </div>
  )
}

export default Navbar