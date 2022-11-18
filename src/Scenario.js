import React from 'react'
import "./Scenario.css"
import { useState } from "react"
function Scenario() {
    const[inputs,setInputs]=useState({
      name:'',time:''
    })
    // const[inputs1,setInputs1]=useState('')
    const[items,setItems]=useState([])



         const handle=()=>{
              setItems([...items,inputs])
              // setItems1([...items1,inputs1])

                
            localStorage.setItem("scenario",JSON.stringify(items))
            // localStorage.setItem("time",JSON.stringify(items1))

         }
         const handleChange=(e)=>{
          setInputs((prev)=>({
            ...prev,[e.target.name]:e.target.value
          }));
        }
       
          const handleSubmit=(e)=>{
            e.preventDefault()
          // window.location.reload()
            //   request().then(data=>console.log(data))
              console.log(inputs) 
          }
  return (
    <form action="" onSubmit={handleSubmit}>
    <div className='scene'>
<p className='p'>Scenario/Add</p>
<h3>Add Scenario</h3>
<div className='add'>
<div className="input1">
    <label htmlFor="Scenario Name">Scenario Name</label>
    <input type="text" className='input' name="name" onChange={handleChange} value={inputs.name}/>
</div>
<div className="input1">
<label htmlFor="Scenario Timme">Scenario TIme</label>
    <input type="text" className='input'  name="time" onChange={handleChange} value={inputs.time} />

</div>

</div>
<div className="buttons">
    <button className="but1" type='submit'  onClick={handle}>Add</button>
    <button className="but2" type='button'
    onClick={()=>setInputs({
        name:"",time:''
    })} >Reset</button>

</div>

    </div></form>
  )
}

export default Scenario