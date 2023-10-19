import React from 'react'
import { useState, useEffect } from 'react'
import iconAdd from './assets/icons/sin-fondo/iconadd-removebg-preview.png'


function ShopCreateMenu({options, selectOptionData, setSelectOptionData, newNavLink}) {
let [selectOption, setSelectOption] = useState([])
// let [visibilityWindowProduct, setVisibilityWindowProduct] = useState(false)
const [cardVisibility, setCardVisibility] = useState(options.map(() => true));
let [selectProductIndex, setSelectProductIndex] = useState(-1)

const functionMenuAdd = () => {
let data = options[selectOption];

// if (!selectOptionData.some(item => item.key == selectOption.key)) {
//   // Agregar el elemento a selectOptionData si no está en la lista.
//   setSelectOptionData(prevData => [...prevData, data]);
//   console.log(selectOption);
//   console.log(selectOptionData);
// } else {
//   alert("Esta opción ya ha sido seleccionada");
// }
// }







if(selectOptionData.includes(data.Nombre)){
 alert("this option already exist") 
}
else{
setSelectOptionData(prevData => [...prevData, data])
console.log(selectOption)
console.log(selectOptionData)
}

}



let showDetails = (obj) => {
  return(
  <div>
    <p>{obj.Description}</p>
  </div>
  )
}




// ${visibilityWindowProduct ? '' : 'hidden'}

let newContainerMenu = (option) => {
    return (
        <div style={{marginLeft: "50px"}} className={`card-new-menu-option `}>
            
        <h1 style={{position: "absolute", left: "-0.25%", top: "-77.5px",color: "blue", backgroundColor: "#111", padding: "2.5px"}}>Create Your Own Menu Digital For You Shop!</h1>
        {option.map((opt, key) => (
          <div key={key} className='card-menu-option'>
            <button onClick={() => setSelectOptionData((key) => {
              let keyToDelete = opt.key;
              let updateData = selectOptionData.filter(item => item.key !== keyToDelete)
              setSelectOptionData(updateData)
            })}>X</button>
            <div className='img-product-container'>
            <h1>{opt.Nombre}</h1>
            <div className='container-img'>
            <img src={opt.img} className='img-product'></img>
            </div>
            </div>
            <p>{opt.Price}</p>
<button onClick={() => {
  setSelectProductIndex(key)
}}>Watch Details</button>
<div>
  {selectProductIndex === key && showDetails(opt)}
</div>
          </div>
        ))}
      </div>
    );
  }


    return (
    <div className='container-general-section-products'>

        <div className='select-option-seccion' >
        <label htmlFor="opciones">Selecciona una opción:</label>
    <select id="opciones" name="opciones" onChange={(e) => {
setSelectOption(e.target.value)
    }}>{Object.keys(options).map((key) => {
        return(
        <option key={key} value={key}>
            {options[key].Nombre}
</option>
)
    })}

        
            </select>
    <button title='Add'  className='btn-select-product' onClick={() => {
functionMenuAdd()
    }}><img className='icon'   src={iconAdd}></img> </button>
        </div>



    <div>



       <div className='container-renderized-products'>
      {selectOptionData  &&   newContainerMenu(selectOptionData)}

       </div>

    </div>
    </div>
    
  )
}

export { ShopCreateMenu }




// useEffect(() => {
// console.log(options)
// console.log(options[selectOption])
// }, [])



// let newContainerMenu = (option) => {
//     if (option) {
//       return (
//         <div className='card-new-menu-option'>
//           {option.map(function (opt, key) {
//             // Verificar si algún elemento en options tiene el mismo nombre
//             const isItemAlreadyPresent = options.some(item => item.nombre === opt.nombre);
  
//             if (isItemAlreadyPresent) {
//               alert("This product already exists");
//               return null; // No renderizar el elemento si ya está en la lista
//             } else {
//               return (
//                 <div key={key}>
//                   <h1>{opt.nombre}</h1>
//                   <p>{opt.Price}</p>
//                   <textarea>{opt.Description}</textarea>
//                 </div>
//               );
//             }
//           })}
//         </div>
//       )
//     }
//   }









//  const isItemAlreadyPresent = options.some(item => item.nombre === opt.nombre);
//     if (selectOptionData.includes(opt)) {
//       alert(`The item "${opt.nombre}" is already in the list.`);
//       return null; // No renderizar el elemento si ya está en la lista
//     } else {
