import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap'
import './button.css'

function Btn({children}) {
    const [color, setColor] = useState ("black")

    function handleClick(){
        setColor("lightgrey")
    }
    
  return (
    <div className='text-center'>
        <Button style={{backgroundColor: color}} variant='outline-secondary' size="sm" onClick={handleClick}>
            {children}
        </Button>
    </div>
  )
}

export default Btn