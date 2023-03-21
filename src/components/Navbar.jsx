import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <div>Dog Pets</div>
      <div className='navbar-right'>
        <p><NavLink className={({isActive})=> isActive ? 'activo' : ''} to="/">Home</NavLink></p>
        <p><NavLink className={({isActive})=> isActive ? 'activo' : ''} to="service">Servicios</NavLink></p>
        <p><NavLink className={({isActive})=> isActive ? 'activo' : ''} to="contact">Contacto</NavLink></p>
      </div>
    </div>
  )
}

export default Navbar
