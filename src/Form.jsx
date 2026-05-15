//two way binding in react is a technique that allows you to synchronize the state of a component with the value of an input field. This means that when the user types something into the input field, the state of the component is updated, and when the state of the component changes, the value of the input field is also updated.
import React from 'react'
import { useState } from 'react'

function Form() {
    const [Title, setTitle] = useState('hello')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('form submitted')
        console.log(Title)
        setTitle('')

    }
  return (
    <div className='grid p-2 gap-2'>
            <h3 className='text-center p-2'>Practicing the hooks with forms</h3>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}className='text-center gap-2 '>
                <input type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} placeholder='enter your name' className='border-2' />
                <button className='bg-blue-500 text-white p-2 rounded hover:bg-red-600'>Submit</button>
            </form>
    </div>
  )
}

export default Form