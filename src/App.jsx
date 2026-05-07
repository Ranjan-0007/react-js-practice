import React from 'react'
import Header from './components/header/header'
import Button from './components/button/button'
import Usestate from './Usestate'
import Counter from './Counter'

function App() {
  return (
    <div>

      <Header name="my app" />
      <Button />
      <Usestate />
      <Counter />

    </div>
  )
}

export default App