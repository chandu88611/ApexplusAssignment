import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Canvas.css"
import { draw } from './tools'
function Canvas() {
  const canvasRef = useRef(null)
  
  // const canvas = canvasRef.current
  // const context = canvas.getContext('2d')
  
    useEffect(()=>{ 
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    document.addEventListener('click',(e)=>{
      draw(context,'dc',e.clientY,e.clientX)
    })
    // draw(context,'chandan',100,100) 
    // draw(context,'samarth')
    },[draw])
  return (
    
    <div>
    <canvas  ref={canvasRef }  width={'1000vw'} height={'650vh'}
    onClick={()=>draw()}
    >
     
    
    </canvas>
    </div>
  )
}

export default Canvas