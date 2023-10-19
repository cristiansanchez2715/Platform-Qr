import './App.css';
import { ShopCreateMenu } from './components/ShopCreateMenu';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import UserConfir from './components/UserConfir'
import BarNav from './components/BarNav'
import Home from './components/Home';
import minichipsImg from './components/assets/products-img/minichips.jpeg'
import festivalImg from './components/assets/products-img/galletasFestival.jpeg'
import canastaHuevosImg from './components/assets/products-img/panaldeHuevos.jpeg'
import bubalosImg from './components/assets/products-img/bubalo.jpeg'
import platanitosImg from './components/assets/products-img/platanitos.jpeg'
import quesoColantaImg from './components/assets/products-img/queso-colanta.jpeg'
import bocadilloImg from './components/assets/products-img/bocadillo.jpeg'
import gelatinaImg from './components/assets/products-img/gelatina.jpeg'
import cervezaImg from './components/assets/products-img/cerveza.png'
import jabonReyImg from './components/assets/products-img/jabon-rey.jpg'
import cloroImg from './components/assets/products-img/cloro.jpg'
import cremaColgateImg from './components/assets/products-img/crema.jpg'
import SearchBar from './components/SearchBar';
import ExportComponent from './components/ExportComponent';
import { NavLink } from 'react-router-dom';
import NewComponent from './components/NewComponent';
import SignUp from './components/SignUp';
import  User  from './components/User';













function App({useNavigate}) {

// logica de la lista

  const [idNavBar, setIdNavBar] = useState("")
  const [optionToCreate, setOptionToCreate] = useState([])
  let [visibilitySearch, setVisibilitySearch] = useState(false)

  

  const options = [
    {key: 0, Nombre: "", Description: "", Price: 0},
    { key: 1, Nombre: "MiniChips", Description: "Minichips Colombia (24 pack) Festival Mini Chocolate Chips Chocolate Cookies, Colombian Snacks, Colombian Sweets, Colombian Sweets, Colombian Mecato, Colombian Food", Price: 2000, img: minichipsImg  },
    { key: 2, Nombre: "Galletas Festival", Description: " Soft texture, with all the strawberry flavor, the perfect mix between a creamy filling and a crunchy sweet cookie wrapper, the Strawberry Festival Cookie, the favorite for Colombians, is the perfect dessert for you to take wherever you want.", Price: 1500, img: festivalImg },
    { key: 3, Nombre: "Canasta de Huevos", Description: "It is a structure designed to transport eggs so that it can absorb a certain amount of energy in a possible impact and so that the shell is not affected by transport. It can be made up of a single piece or a bottom of molded cellulose or plastic and a lid of the same or different material.", Price: 8000, img: canastaHuevosImg },
    { key: 4, Nombre: "Bubalo", Description: "It is considered the first chewing gum with a liquid center. The name Bubbaloo was created from the play on the words Bubblegum (bubble gum, in English) with the Cuban expression Babalu, used in the form of a greeting.", Price: 500, img: bubalosImg },
    { key: 5, Nombre: "Platanitos", Description: "Platanitos are thin slices of fried green banana. They are seasoned with salt to taste and can also be prepared with ripe bananas. They can be elongated or round in shape.", Price: 1500, img: platanitosImg },
    { key: 6, Nombre: "Queso Colanta", Description: "Cheese is a solid food that is obtained by maturing the curds of animal milk once the whey has been removed; Its different varieties depend on the origin of the milk used, the production methods followed and the degree of maturity reached. It can be produced from curdled cow's milk,...", Price: 4000, img: quesoColantaImg },
    { key: 7, Nombre: "Bocadillo", Description: "Pieza de pan abierta, o conjunto de dos rebanadas, en cuyo interior se coloca o se unta algún alimento. 2. m. Refrigerio que los trabajadores y estudiantes suelen tomar entre el desayuno y la comida.", Price: 2000, img: bocadilloImg },
    { key: 8, Nombre: "Gelatina", Description: "Gelatin is a protein made from animal collagen, usually from cows and pigs. It is commonly used to make capsrules, cosmetics, ointments and foods. Collagen is one of the materials that make up cartilage, bone and skin.", Price: 2000, img: gelatinaImg },
    { key: 9, Nombre: "Cerveza", Description: "Beer is a sweet or fermented malt liquid flavored with hops, manufactured naturally. Its main ingredients are barley, hops, yeast and water, and the water with which it is prepared must be pure, sterile and drinkable", Price: 1500, img: cervezaImg },
    { key: 10, Nombre: "Jabon Rey", Description: "KING SOAP is made with the highest quality vegetable and animal fats. It has high performance when washing clothes of different colors and guarantees the best cost-benefit ratio in the Colombian market.", Price: 2500, img: jabonReyImg },
    { key: 11, Nombre: "Cloro", Description: "How to describe chlorine?  What is it? Chlorine is a chemical element with atomic number 17, located in the halogen group (group VII A) of the periodic table of elements and its symbol is Cl. Under normal conditions and in its pure state, it is a yellow-green gas. formed by diatomic molecules of chlorine (Cl2", Price: 3000, img: cloroImg },
    { key: 12, Nombre: "Crema Colgate", Description: "Creates a protective barrier throughout the mouth. Helps reduce plaque, gingivitis, calculus and bad breath. Provides relief from sensitivity. Strengthens enamel.", Price: 500, img: cremaColgateImg }
  ];

  // logica para crear nuevo route

let [newRoutes, setNewRoutes] = useState([])
let [newNavLink, setNewNavLink] = useState([])
let [routerCreated, setRouterCreated] = useState(false)



// 

let [selectOptionData, setSelectOptionData] = useState([])

// logica data registro de usuario

let [data, setData] = useState([{nombre: "", email: "", contraseña: "", telefono: ""}])
let [visibilityQr, setVisibilityQr] = useState(false)
 
  return (
    <div className="App">
  <Router>
    <div style={{display: "flex", flexDirection: "row", gap: "50px", backgroundColor: "#111", position: "fixed", width: "100vw", top: "0px", zIndex: "3"}}>
      <BarNav data={data} setData={setData} visibilityQr={visibilityQr}  visibilitySearch={visibilitySearch} setVisibilitySearch={setVisibilitySearch}/>
      {visibilitySearch && <SearchBar  selectOptionData={selectOptionData} className="search-container" />}
      {visibilitySearch && <ExportComponent />}
      </div>
      <div className='welcome-card'>
        <h1 style={{color: "blue"}}>Welcome to Generator Qr Platform</h1>
        <img></img>
        <p>Select the up options for navigate between the Platform</p>
      </div>      
  <Routes>
<Route path="/home" element={<Home />}></Route>
<Route path="/register" element={<UserConfir />}></Route>
<Route path='/register/SignUp' element={<SignUp setVisibilityQr={setVisibilityQr} data={data} />}></Route>
<Route path='/register/LogIn' element={<User data={data} setData={setData} />}></Route>
<Route path="/create-you-menu" element={ <ShopCreateMenu newNavLink={newNavLink} options={options} selectOptionData={selectOptionData} setSelectOptionData={setSelectOptionData}/>}></Route>
<Route path='/new-menu' element={<ExportComponent newRoutes={newRoutes} setNewRoutes={setNewRoutes} setRouterCreated={setRouterCreated}  setNewNavLink={setNewNavLink} selectOptionData={selectOptionData} />}></Route>
{
 newRoutes ? (newRoutes.map((route, index) => (
    <Route key={index} element={<NewComponent  selectOptionData={selectOptionData}/>} />
  )
  ))
  :
  (alert("Error"))
}

  </Routes>



  



  </Router>

    </div>
  );
}

export default App;
