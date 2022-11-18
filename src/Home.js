import React,{useEffect, useState,useRef} from 'react'
import "./AllScenario.css"

import {AiFillDelete } from "react-icons/ai";
import {FiEdit2 } from "react-icons/fi";
function Home() {
    const[state,setState]=useState([])
    const canvasRef = useRef(null)


    class Vehicle{
        constructor(X,Y){
            this.x=X;
            this.y=Y;
            // this.x=Math.random()*canvas.width;
            // this.y=Math.random()*canvas.height;
            this.size=5;
            this.speedX=state.speed;
            this.speedY=state.speed;
    
    
        }
        forward(){
            this.x+=this.speedX;
           
            if(this.size>0.2)this.size-=0.001
        }
        backward(){
            this.x-=this.speedX;
        }
        upwards(){
            this.y+=this.speedX
        }
        downwards(){
            this.y-=this.speedX
        }
        draw(){
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            ctx.beginPath()
    ctx.fillStyle='red'
    // ctx.lineWidth=10;
    // ctx.strokeStyle='hsl('+hue+',100%,50%)'
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill()
    // ctx.stroke()
        }
    }
   
    

    useEffect(()=>{
setState(JSON.parse(localStorage.getItem('vehicle')))

    },[])
    useEffect(()=>{ 
       state.map((data)=>(   
        new Vehicle(data.positionX,data.positionY).draw()
       ))
        },[state])

  return (
    <div className='home'>
 <select type="text" className='input' name='scenarioList' 
    value={state.scenarioList}
     >
<option value="Downwards">slect scenario</option>

    <option value="Test scenario">Test scenario</option>

<option value="My scenario">My scenario</option>
    </select>

<div>

<table className='table'>
    <tr className='th'>
    <th >Vehicle Id</th>
    <th>Vehicle Name</th>
    <th>Position X</th>
    <th>Position Y</th>
    <th>Speed</th>
    <th>Direction</th>

    <th>Edit</th>
    <th>Delete</th>

    </tr>
    {state.map((data,i)=>(
    
<tr className='tr'>
<td>{i}</td>
<td>{data.vehicleName}</td>
<td>{data.positionX}</td>
<td>{data.positionY}</td>
<td>{data.speed}</td>
<td>{data.direction}</td>

<td>{<FiEdit2 color={"blue"}/>}</td>
<td>{<AiFillDelete color={"red"}/>}</td>



</tr>

    
  ))
    

  }

    </table>
</div>

<canvas className='canva' ref={canvasRef }>


</canvas>
    </div>
  )
}

export default Home