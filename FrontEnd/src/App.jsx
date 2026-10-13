import { useState } from 'react'

import './App.css'

import CardConFig from './components/CardConFig'

function App() {
  const [count, setCount] = useState(1)

  return (
  
    count===1 && (
    <div className='config'>

      <CardConFig/>
    
    </div>
  )

);

}

export default App
