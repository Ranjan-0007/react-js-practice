import React, { useState } from 'react'

function Counter() {
    const [count,setcount]=useState(0);

  return (
    <div className='gap-2 grid items-center bg-green-100 p-4 m-4 rounded-lg '>
        <h2 className='text-center p-2'>Practicing the useState hook using count</h2>
        <p className='text-center p-2'>Count: {count}</p>
        <button className=' bg-blue-200 text-black-800 hover:bg-blue-300 rounded p-2' onClick={() => setcount(count + 1)}>
            click to increament (+1)
        </button>
            <button className=' bg-blue-200 text-black-800 hover:bg-blue-300 rounded p-2' onClick={() => setcount(count - 1)}>
                click to decrement (-1)
            </button>
    </div>
  )
}

export default Counter