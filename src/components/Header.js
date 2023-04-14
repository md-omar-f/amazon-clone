import React from "react";
import Logo from "../images/amazon-logo.png";
import FlagUSA from "../images/flag-USA.png";

function Header() {
     return(
          <header className="header" id="top">
               <div className="header-logo">
                    <img className="logo-image" src={Logo} alt="logo"/>
               </div>
               <div className="deliver-to">
                    <p>&nbsp; &nbsp;Deliver to <br /><span className="bold"><i class="fas fa-map-marker-alt"></i> Bangladesh</span></p>
               </div>
               <div className="search">
                    <div className="all-items">
                         <p>All</p>
                         <i class="fas fa-sort-down"></i>
                    </div>
                    {/* <div className="search-box"></div> */}
                    <input type="text" className="search-box" />
                    <div className="search-icon">
                         <i class="fas fa-search"></i>
                    </div>
               </div>
               <div className="country-flag">
                    <img className="flag" src={FlagUSA} alt="flag" />
                    <span> &nbsp;<i class="fas fa-sort-down"></i></span>
               </div>
               <div className="sign-in">
                    <p>Hello, sign in <br /><span className="bold">Accounts & Lists</span> <i class="fas fa-sort-down"></i></p>
               </div>
               <div className="returns-orders">
                    <p>Returns <br /><span className="bold">& Orders</span></p>
               </div>
               <div className="busket-icon">
                    <i class="fas fa-cart-arrow-down"></i>
               </div>
          </header>
     )
}

export default Header;