import './ImageList.css'
import React from "react"
const ImageList = (props) => {

   const images = props.images.map((image) => {
        return (
            <div key={Math.random()}>
                <img src={image.urls.regular} alt={image.description}/>
            </div>
        )
    } )
    return (
        <div className='image-list'>
            <div className='box'>
            {images}
            </div>
        </div>
    )
}
export default ImageList