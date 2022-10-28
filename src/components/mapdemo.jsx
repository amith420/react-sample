import React from 'react'

function mapdemo() {
    const arr= [1,0,1,1]
    const map1= arr.map(x=>x*2+" ")
  return (
   <h3 className='year'>{map1} runs update</h3> 
  )
}

export default mapdemo