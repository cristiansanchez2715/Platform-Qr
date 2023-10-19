import React from 'react'
import { NavLink } from 'react-router-dom'
import homeImg from './assets/icons/home.png'
import registerImg from './assets/icons/register.png'
import qrImg from './assets/icons/sin-fondo/3658773-removebg-preview.png'


function BarNav({visibilitySearch, setVisibilitySearch, visibilityQr}) {


  let activateSearch = () => {
  setVisibilitySearch(!visibilitySearch)
}
  
  let desactivateSearch = () => {
  setVisibilitySearch(false)
}


  return (
    <div className='barnav-container'>
<NavLink className="barnav-button" to="/home" onClick={() => {
  desactivateSearch()
}} > <img title='home' className='icon' src={homeImg}></img> </NavLink>
 
<NavLink className="barnav-button" to="/register" onClick={() => {
  desactivateSearch()
}}  > <img title='register' className='icon' src={registerImg} ></img></NavLink>


{visibilityQr && <NavLink className="barnav-button" to="/create-you-menu" onClick={() => {
  activateSearch()
}}  > <img title='create your menu' className='icon' src={qrImg} ></img></NavLink>}
    </div>
  
  )
}

export default BarNav