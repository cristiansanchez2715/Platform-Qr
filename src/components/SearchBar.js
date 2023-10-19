import React from 'react'
import { useState, useEffect } from 'react'
import searchImg from './assets/icons/sin-fondo/search-removebg-preview.png'

function SearchBar({selectOptionData}) {
let [searchState, setSearchState] = useState("")
let [visibilitySearch, setVisibilitySearch] = useState(false)


useEffect(()=>{
    console.log(selectOptionData)
},[selectOptionData])

let functionSearch = (data) => {
 

 return(
<ul  style={{ height: "100px", overflow: "scroll"}}>
    {

// fil.Nombre &&
   data.filter((fil) => fil.Nombre.toLowerCase().includes(searchState)).map((filteredItem, key ) => {
    return(
        
            <li style={{width: "200px"}} key={key}>{filteredItem.Nombre}</li>
            
        ) 
    })
    } 

</ul>
)
}
//  const functionVisibility = () => {setVisibilitySearch(true)}

const functionVisibilitySearch = () => {
    return(
<div className='search-bar-container'>
        <div>
            <input style={{width: "300px"}} type='text' placeholder='search' onChange={(e) => {
                setSearchState(e.target.value)
            }}></input>
           <button onClick={() => {setVisibilitySearch(true)
        }}><img title='search' className='icon-search' src={searchImg}></img> </button>
        </div>

        <div style={{backgroundColor: "white", position: "absolute", left: "59%", top: "25px"}}>
            {visibilitySearch && functionSearch(selectOptionData)}
        </div>
        </div>   

    )
}



  return (
    <div className='search-container' style={{marginLeft: "200px"}}>
<div>
    <button className='btn-active-search' style={{backgroundColor: "blue"}} onClick={() => {
        setVisibilitySearch(!visibilitySearch)
    }}>Search</button>
</div>

<div>
    {visibilitySearch && functionVisibilitySearch()}
</div>

    </div>
  )
}

export default SearchBar