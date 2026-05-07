import React, { useState } from 'react'

function Usestate() {
  const [num,setnum] = useState(10)
  const [name,setname] = useState("john")
  function changenum(){
    setnum(num+1);
  }
  function changename(){
    setname("doe");
  }
  return (
    <div className='grid items-center bg-blue-100 p-4 m-4 rounded-lg '>
      <h3 className='text-center p-2'>Practicing the useState hook</h3>
      <p className='text-center p-2'>Current value: {num}</p>
      <button className='bg-blue-500 text-white p-2 rounded hover:bg-red-600'onClick={changenum}>
        click for action
      </button>
      <p className='text-center p-2'>Current name: {name}</p>
      <button className=' items-center bg-blue-500 text-white p-2 rounded hover:bg-red-600'onClick={changename}>
        click for changing the name
      </button>
    </div>
  )
}

export default Usestate