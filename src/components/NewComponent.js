import React from 'react'

function NewComponent({selectOptionData}) {

    
 
    return (
        <div className='menu-QRreally-container'>
    {
        selectOptionData.map((opt, index) => {
            return(
                <div key={index} className='card-new-menu-qrReally'>
    <div className='img-product-container'>
                <h1>{opt.Nombre}</h1>
                <div className='container-img'>
                <img src={opt.img} className='img-product'></img>
                </div>
                </div>
                <p>{opt.Price}</p>
                </div>
            )
        })
    }
    
        </div>
      )
}

export default NewComponent