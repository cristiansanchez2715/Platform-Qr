import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import exportQr from './assets/icons/sin-fondo/qr-removebg-preview.png'
import QRCode from 'react-qr-code';



function ExportComponent({selectOptionData, setNewRoutes, setNewNavLink, setRouterCreated, newNavLink}) {
let [visibilityExport, setVisibilityExport] = useState(false)
const navigate = useNavigate();


let funcionVisibility = () => {
  setVisibilityCreateQr(!visibilityCreateQr)
}



let [visibilityCreateQr, setVisibilityCreateQr] = useState(false)

  const functionQRCreate = () => {
    const content = document.body.innerHTML
    const menuCreate = document.querySelector(".container-renderized-products")  
    if(menuCreate){
      const content = menuCreate.innerHTML
      return(
        <div className='qr-result-container' style={{alignItems: "center" ,border: "solid black 3px", padding: '5px', width: "300px", height: "300px", position: 'fixed', left: '60.5%', top: '25%' }}>
          {visibilityCreateQr &&   <QRCode value="/create-you-menu" size="206" style={{marginTop: "50px", marginLeft: "5px"}} />}
            </div>
      )}
      else {
        return null
      }
    
    
    
  }

 return (
  <div>
    <button title='exportar QR' style={{position: "fixed", backgroundColor: "blue", left: "58.7%", top: "30.5px"}} onClick={() => {
    
      funcionVisibility()
    }}><img className='icon-qr' src={exportQr}></img> </button>
    <div>
  { functionQRCreate()}
  <h3 style={{padding: "2.5px",position: "absolute", left: '58%', top: '500px',color: "blue", backgroundColor: "#111"}}>Export Your Menu In the Code QR</h3>  
  
</div>
  </div>




 )
 
 
 
 
}

export default ExportComponent


// const functionCreateLinks = () => {
//   return(
//     <ul>
//       {newNavLink.map((nav, indx) => {
//   <li key={indx}>{nav}</li>
//       })}
//     </ul>
//   )
//   }
  
//   const addStateData = (state1, state2) => {
    
//     setNewRoutes(prevRoutes => [...prevRoutes, state1])
//     setNewNavLink(prevNavLink => [...prevNavLink, state2])
    
//   }
  



// 
  // const addRoute = () => {
  //   let newRouteId = Math.random().toString(36).substring(7);
  //   const newPath = `/ruta${newRouteId}`
  //   // const history = useNavigate()
    
  
  
  //   let newRoute = (
  // <Route key={newRouteId} path={newPath} element={<NewComponent selectOptionData={selectOptionData} />}>
  //   <div>ruta: {newRouteId}</div>
  // </Route>
  
  //   )
  
    
  
  //   let newNavLink = (
  //     <NavLink key={newRouteId} to={newPath} >
  //       <h1>EXPORTACIÓN N1</h1>
  //     </NavLink>
      
  //       )

  //       addStateData(newRoute, newNavLink)
  
  // navigate(newPath); 
  // setRouterCreated(true)
  // }