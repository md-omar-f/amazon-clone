import React from "react";
import Photo from "../images/slider1.jpg"

function Carousel() {
     return(
          <div className="carousel">
               <img className="slider-photo" src={Photo} alt="slider" />
          </div>
     )
}

export default Carousel;