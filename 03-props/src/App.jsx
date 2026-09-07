import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user='siddharth'/>
      <Card user='sonu'/>
      <Card user='sumit'/>
      <Card user='shreyansh'/>
    </div>
  )
}

export default App