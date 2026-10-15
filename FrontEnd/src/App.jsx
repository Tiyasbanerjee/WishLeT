import { useState } from 'react'

import './App.css'

import CardConFig from './components/CardConFig'
import Edit from './components/edit'
import Letter from './components/Letter'

function App() {
  const [count, setCount] = useState(3)

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


  {/*Letter page*/}

  {
    count===3 && (
      
      <div className='Letter'>
        
        <Letter/>
      
      </div>
    
  )
  }

  {/*end*/}

</>
);

}

export default App
