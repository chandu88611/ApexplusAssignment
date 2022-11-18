import React, { useState } from 'react'
import "./Scenario.css"
function Vehicle() {

    const[state,setState]=useState({
        scenarioList:'',
        vehicleName:'',
        speed:'',
        positionX:'',
        positionY:'',
        direction:''
    })

    const[items1,setItems1]=useState([])
    const handleItems=()=>{
        setItems1([...items1,state])
        // setItems1([...items1,inputs1])

        //   if(items1){
      localStorage.setItem("vehicle",JSON.stringify(items1))
      // localStorage.setItem("time",JSON.stringify(items1))
// }
   }
    const handleChange=(e)=>{
        setState((prev)=>({
          ...prev,[e.target.name]:e.target.value
        }));
      }
      const handleSubmit=(e)=>{
        e.preventDefault()
      
        //   request().then(data=>console.log(data))
          console.log(state) 
      }
  return (
    <form action="submit" onSubmit={handleSubmit}>
    <div className='scene'>
<p className='p'>Scenario/Add</p>
<h3>Add Scenario</h3>
<div className="color">
<div className='add' style={{width:'70vw'}}>
<div className="input1">
<label htmlFor="Scenario Timme">Scenario List</label>
    <select type="text" className='input' name='scenarioList' onChange={handleChange}
    value={state.scenarioList}
     >
<option value="Downwards">slect scenario</option>

    <option value="Test scenario">Test scenario</option>

<option value="My scenario">My scenario</option>
    </select>

</div>
<div className="input1">
    <label htmlFor="Scenario Name">Vehicle Name</label>
    <input type="text" className='input' onChange={handleChange}  name="vehicleName"
        value={state.vehicleName}
    />
</div>
<div className="input1">
<label htmlFor="Scenario Timme">Speed</label>
    <input type="text" className='input' onChange={handleChange}
          name="speed" value={state.speed}
    />

</div>


</div>
<div className='add' style={{width:'70vw'}}>
<div className="input1">
    <label htmlFor="Scenario Name">Position X</label>
    <input type="text" className='input' onChange={handleChange}
      name='positionX' value={state.positionX}
    />
</div>
<div className="input1">
<label htmlFor="Scenario Timme">Position Y</label>
    <input type="text" className='input' onChange={handleChange}
name='positionY' value={state.positionY}
    />

</div>
<div className="input1">
<label htmlFor="Scenario Timme">Direction</label>
    <select type="text" className='input' onChange={handleChange}
name='direction' value={state.direction} >
<option value="Downwards">select direction</option>

<option value="Downwards">Downwards</option>
<option value="Upwards">Upwards</option>
<option value="Backwards">Backwards</option>
<option value="Towards">Towards</option>


    </select>

</div>

</div></div>
<div className="buttons">
    <button className="but1" type='submit' onClick={handleItems}>Add</button>
    <button className="but2" type='button' onClick={()=>setState({
         scenarioList:'',
        vehicleName:'',
        speed:'',
        positionX:'',
        positionY:'',
        direction:''
    })} >Reset</button>
    <button className="but3" type='button'> Go Back</button>


</div>

    </div></form>
  )
}

export default Vehicle