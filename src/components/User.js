import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function User({data, setData}) {
  let [nombre, setNombre] = useState()
  let [email, setEmail] = useState()
  let [contraseña, setConstraseña] = useState()
  let [telefono, setTelefono] = useState()
  
  let changeNombre = (e) =>  setNombre(e.target.value)
  let changeEmail = (e) => setEmail(e.target.value)
  let changeContraseña = (e) => setConstraseña(e.target.value)
  let changeTelefono = (e) => setTelefono(e.target.value)
  


  const datos = []
  
// const guardarDatos = () => {
//   localStorage.setItem('userData', JSON.stringify(data));
// }
  

  return (
    <div>
    <h1>Do you want know most of the proyect?</h1>
    <p className='parrafo-form'>To continued we give you dates, this alone is for send most information about the Qr Proyect</p>
    <form className='form-container'  onSubmit={(e) => {
e.preventDefault();
    
       let nombreInput = document.getElementById("input-name").value
       let emailInput = document.getElementById("input-email").value
       let contraseñaInput = document.getElementById("input-contraseña").value
       let telefonoInput = document.getElementById("input-telefono").value


      //  let newData = [...data, {nombre, email}]
       setData([...data, {nombre, email, contraseña, telefono}])
       setNombre ("") 
       setEmail ("")
       setConstraseña("")
       setTelefono("")
nombreInput = ""
emailInput = ""
contraseñaInput = ""
telefonoInput = ""
       console.log({data})
      //  guardarDatos()
    }}>


      <label style={{marginTop: "10px"}}>Nombre:</label>
      <input id='input-name' type='text' placeholder='nombre' onChange={changeNombre}></input>


      <label style={{marginTop: "10px"}}>Correo Electronico:</label>
      <input id='input-email' type='email' placeholder='email' onChange={changeEmail}></input>
      
      
      <label style={{marginTop: "10px"}}>Contraseña:</label>
      <input id='input-contraseña' type='password' placeholder='****' onChange={changeContraseña}></input>
      
      
      <label style={{marginTop: "10px"}}>Telefono:</label>
      <input id='input-telefono' type='number' placeholder='###' onChange={changeTelefono}></input>
      

      <button type='submit' style={{marginTop: "10px"}}>Enviar</button>
      </form >
      </div>
  )
}

export default User