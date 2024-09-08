import React from 'react'
import logo from '../../cherry.png'

export const Navbar = ({qiymat}) => {
  return (
    <nav>
        <div>
            <img src={logo} alt="" />
            <div>
                <h1>Olcha</h1>

<p>download the {qiymat} Apps</p>  </div>
        </div>

<div><button>download</button></div>    </nav>
  )
}
