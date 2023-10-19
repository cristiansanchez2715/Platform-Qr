import React from 'react'
import imagenQR from './assets/publicidad.png'
import imagenStores from './assets/ilustracion-de-los-establecimientos-comerciales-ken3gx.jpg'
import imagenMoney from './assets/digitalImg.jpeg'
import dudingImg from './assets/duding.avif'
import including from './assets/inclusing.jpg'
import imgSistem from './assets/imgsistem.jpg'

function Home() {
  return (
    <div>

<h1>Thera Qr-Menu</h1>
<div className='container-presentation'>
<img src={imagenQR} className='img-home' alt='presentation-qr-business' />
<p className='page-presentation'>
  <h1>Presentatión</h1>
  This single Page Aplicattion is a product with finalitty is easing the function of your bussines make qr code ussing the menu of you bussines with reference. <br></br>
  For do use this aplicattion you can register and pay a little money to 25$USD to start of it, your can use the platform all of you want, and generate all code qr of your want
</p>
</div>

<div className='container-presentation'>
  <img src={imagenStores} className='img-home' alt='business-variety' />
<p className='page-presentation'>
  <h1>Uses</h1>
  <p>The Thera QR dont is limited to little stores, also is a greath tool for the created of restaurants static menu to instant.  <br>
  </br> so watching from most wide perspective this aplicattion hace the posibilitie of help any type of estableshment commercial when be sold big variety of products, for example:
  <ul>
    <li>varietis store</li>
    <li>carpentry</li>
    <li>hardware store</li>
    <li>decanter</li>
    <li>Between others</li>
    </ul> </p>
</p>
    </div>


    

<div className='container-presentation'>
<img src={imagenMoney} className='img-home' alt='presentation-qr-business' />
<div className='page-presentation'>
  <h1>What costs keep this QR code?.</h1>
Well it is a good answer, each QR code needs a space in we page for your correct functioning, the QR code needs a page online for can be shown to public.<br></br>

</div>
</div>


<div className='container-presentation'>
<img src={dudingImg} className='img-home' alt='presentation-qr-business' />
<div className='page-presentation'>
  <h1>In than it benefits the client with this service?</h1>
  First than nothing, know when you goint to a store and you dont know what do you sell there, you have to question to ATM or people in charge during a amount considerable of time, time lost for people in charge and time lost for client. <br></br>
This sistem have with aim ease the live so much the client with the store personnal, which now dont was of reply questions for the products than do you sell in it estableshment.

</div>
</div>



<div className='container-presentation'>
<img src={including} className='img-home' alt='presentation-qr-business' />
<div className='page-presentation'>
  <h1>being this so, so how much do Qr Online?</h1>
other of the things good of this proyect, is than his objective is are accesibble for the public, your cost will hover betwen the 7.5usd to 10usd month to month for the user

</div>
</div>


<div className='container-presentation'>
<img src={imgSistem} className='img-home' alt='presentation-qr-business' />
<div className='page-presentation'>
  <h1>With functioned this sistem?</h1>

  The reply is very easy, the clients simply going to estableshment watch a QR code position in the entrance, alone was take a photo with your phone and inmediately this carry to client to the page menu of this estableshment <br></br>
the which was a search input in the which the client can searching the product than this was searching

</div>
</div>


<h1></h1>
</div>
  )
}

export default Home