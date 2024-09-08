import React, { useState } from 'react'
import {Navbar} from '../navbar/Navbar'

 const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(count)
 

    const handleNavbar = () =>{
         setCount(a => a+1 )
    }
    const reset = () =>{
        setCount(0)
    }


  return (
    <div>
        <Navbar qiymat = {count}/>
        <h1>changer</h1>
        <button onClick={reset}>change</button>
    </div>
  )
}

export default Counter