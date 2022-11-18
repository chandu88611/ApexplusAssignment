import React, { useEffect, useState } from 'react'
import {AiFillDelete ,AiOutlineFolderAdd} from "react-icons/ai";
import {FiEdit2 } from "react-icons/fi";
import "./AllScenario.css"
import './Scenario.css'
function AllScenarios() {

    const [state,setState]=useState([])
    // let state=[]
    useEffect(()=>{
    
  setState(JSON.parse( localStorage.getItem('scenario')))
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('time'))
console.log(state[0])


    },[])
  return (
    <div  className='all'>
    <div style={{display:'flex',flexDirecton:'row'}}>
    <h3>All Scenario</h3>
<button className='but2'>Delete all</button>
    </div>
    


    <table className='table'>
    <tr className='th'>
    <th >Scenario Id</th>
    <th> Scenario Name</th>
    <th>Scenario Time</th>
    <th>Add Vehicle</th>
    <th>Edit</th>
    <th>Delete</th>

    </tr>
    {state.map((data,i)=>(
    
<tr className='tr'>
<td>{i}</td>
<td>{data.name}</td>
<td>{data.time}</td>
<td>{<AiOutlineFolderAdd color={"brown"} />}</td>
<td>{<FiEdit2 color={"blue"}/>}</td>
<td>{<AiFillDelete color={"red"}/>}</td>



</tr>

    
  ))
    

  }

    </table>
  



    </div>
  )
}

export default AllScenarios