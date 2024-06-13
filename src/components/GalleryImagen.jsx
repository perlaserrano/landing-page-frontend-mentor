import React from 'react'
import  milks from '../images/desktop/image-gallery-milkbottles.jpg'
import  orange from '../images/desktop/image-gallery-orange.jpg'
import  cone from '../images/desktop/image-gallery-cone.jpg'
import  cubesSugar from '../images/desktop/image-gallery-sugarcubes.jpg'
import "../css/galleryImagen.css"


export const GalleryImagen = () => {
  return (
    <div className='container container-image-gallery'>
        <div className='imagen-gallery'>
        <img src={milks} alt="botles milks" />
        </div>
        <div className='imagen-gallery'>
        <img src={orange} alt="orange" />
        </div>
        <div className='imagen-gallery'>
        <img src={cone} alt="cone ice cream" />
        </div>
        <div className='imagen-gallery'> 
        <img src={cubesSugar} alt="sugar" />
        </div>
      </div>
  )
}
