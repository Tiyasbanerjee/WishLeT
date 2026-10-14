import { useState } from 'react'

import './App.css'

import CardConFig from './components/CardConFig'
import Edit from './components/edit'

function App() {
  const [count, setCount] = useState(2)

  return (
  <>
  
  {/*config page*/}

  {
  count===1 && (
  
  <div className='config'>

      <CardConFig/>
    
  </div>
  
  )
  }
  
  {/*setting page*/}

  {  
  count===2 && (
    
  <div className='edit'>
    
    <Edit/>
  
  </div>
  
  )
  }


  {/*end*/}

</>
);

}

export default App
