import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp({setVisibilityQr, setData, data}) {
  // const userDataJSON = localStorage.getItem('userData')
  // const userData = JSON.parse(userDataJSON);
const navigate = useNavigate()

  const comprobacion1 = (correo, contraseña) => {


      if (data){
        let usuarioEncontrado = data.find(
          (usuario) => {
           return usuario.email === correo && usuario.contraseña === contraseña
            
          }
      

        )
        if(usuarioEncontrado){
          setVisibilityQr(true)
          navigate("/create-you-menu")  
              }

      }  

  }

  let [correoUsuario, setCorreousuario] = useState()
  let [contraseñaUsuario, setContraseñaUsuario] = useState()
  let[contraseñaComprobada, setContraseñaComprobada] = useState()


  return (
    <form>
        <label>Correo Electronico</label>
        <input type='email' onChange={(e) => {
setCorreousuario(e.target.value)
        }} ></input>
        

        <label>Contraseña</label>
        <input type='password' onChange={(e) => {
setContraseñaUsuario(e.target.value)
        }}></input>
        <button onClick={() => {
          setContraseñaComprobada(contraseñaUsuario)
          
        }}>Ingresar</button>


<button style={{visibility: "hidden"}}  onClick={ comprobacion1(correoUsuario, contraseñaComprobada)}>Ingresar</button>
    </form>
  )
}

export default SignUp