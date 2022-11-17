import React from 'react'
import './Header.css'

const Kliknuto = ()=> {
  const changetext1 = document.getElementById ('klik1').innerHTML = 'NAVIGACIJA';
  const changetext2 = document.getElementById ('klik2').innerHTML = 'SIDE MENI';
  const changetext3 = document.getElementById ('klik3').innerHTML = 'KUTIJA 1';
  const changetext4 = document.getElementById ('klik4').innerHTML = 'NEKE INFORMACIJE';
}
const Header = () => {
  return (
    <div className="container">
      <button onClick={Kliknuto}>Izmijeniti</button>
      <nav className='navbar' id='klik1'>Navbar</nav>
      
      <div className="sidebar" id='klik2'>Sidebar</div>
      <div className="box" id='klik3'>Box1</div>
      
      <div className="footer" id='klik4'>Footer</div>



    </div>
  )
}

export default Header