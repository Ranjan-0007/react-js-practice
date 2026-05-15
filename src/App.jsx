import React from 'react'
import Header from './components/header/header'
import Button from './components/button/button'
import Usestate from './Usestate'
import Counter from './Counter'
import Object from './Object'
import Form from './Form'

function App() {
  return (
    <div>

      <Header name="my app" />
      <Button />
      <Usestate />
      <Form />
      <Counter />
      <Object />
    

    </div>
  )
}

export default App