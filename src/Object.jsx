import React, { useState } from 'react'

function Object() {
    const [num, setnum] = useState({name:"ranjan",age:25})
    const buttonClicked =() =>{
      let newname={...num}
      newname.name="ram"
      newname.age=26
      setnum(newname)
    }

  return (
    <div className='bg-red-400'>
        <button className='bg-green-400 p-2 m-2' onClick={buttonClicked}>Change name</button>
        <h3 className='text-center p-2'>Practicing the useState hook with objects</h3>
        <p className='text-center p-2'>Current name: {num.name.toUpperCase()}</p>
        <p className='text-center p-2'>Current age: {num.age}</p>
    </div>
  )
}

export default Object