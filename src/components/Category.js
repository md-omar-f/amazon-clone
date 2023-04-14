import React from "react";


function Category(props) {
     let url = "http://www.amazon.com";
     return(
          <a className="cat-link" href="#"><div className="category">
               <h1 className="category-header">{props.catHeader}</h1>
               <img className="cat-img" src={require(`../images/${props.image}`)} alt="category" />
               <a href={url}>Explore now</a>
          </div></a>
     )
}

export default Category;