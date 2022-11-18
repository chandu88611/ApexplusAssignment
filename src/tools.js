

 export const draw = (ctx,text,X,Y) =>{
    // ctx.fillStyle = 'red'
    // ctx.beginPath()
    // ctx.arc(50, 100, 20, 0, 2*Math.PI)
    // ctx.fill()
    ctx.translate(X,Y)
  let x=30
  let y=0
  let newX=0;
  let newY=0;
  let angle=0;

  ctx.strokeStyle='royalblue';  
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.font='30px Arial'
  ctx.textAlign='center'
  ctx.fillStyle='red'
// document.createElement('button')
  if(text){
      ctx.fillText(text,0,0)
  }
  ctx.moveTo(x,y)
  for (let i = 0; i < 6; i++){
angle+=Math.PI/3;
newX=x*Math.cos(angle)-y*Math.sin(angle)
newY=x*Math.sin(angle)+y*Math.cos(angle)
ctx.lineTo(newX,newY)
ctx.stroke()
    
// if(i==4){
//   ctx.closePath();
// }
    
  }
  
  }
    