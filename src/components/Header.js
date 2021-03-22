import React from 'react'
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div>
      <h1>Note-maker</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/create'>Add Note</NavLink>
    </div>
  )
}

export default Header
