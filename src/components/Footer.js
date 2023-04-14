import React from "react";
import FooterLogo from "../images/footer-logo2.png";
import FlagUSA from "../images/flag-USA.png";

function Footer() {
     let url = "http://www.amazon.com";
     return(
          <footer>
               <div className="footer-upper"><a href="#top">Back to top</a></div>
               <div className="footer-middle">
                    <div>
                         <h1>Get to Know Us</h1>
                         <a href={url}>Careers</a>
                         <a href={url}>Blog</a>
                         <a href={url}>About Amazon</a>
                         <a href={url}>Investor Relations</a>
                         <a href={url}>Amazon Devices</a>
                         <a href={url}>Amazon Science</a>
                    </div>
                    <div>
                         <h1>Make Money with Us</h1>
                         <a href={url}>Sell products on Amazon</a>
                         <a href={url}>Sell on Amazon Business</a>
                         <a href={url}>Sell apps on Amazon</a>
                         <a href={url}>Become an Affiliate</a>
                         <a href={url}>Advertise Your Products</a>
                         <a href={url}>Self-Publish with Us</a>
                         <a href={url}>Host an Amazon Hub</a>
                         <a href={url}>See More Make Money with Us</a>
                    </div>
                    <div>
                         <h1>Amazon Payment Products</h1>
                         <a href={url}>Amazon Business Card</a>
                         <a href={url}>Shop with Points</a>
                         <a href={url}>Reload Your Balance</a>
                         <a href={url}>Amazon Currency Converter</a>
                    </div>
                    <div>
                         <h1>Let Us Help You</h1>
                         <a href={url}>Amazon and COVID-19</a>
                         <a href={url}>Your Account</a>
                         <a href={url}>Your Orders</a>
                         <a href={url}>Shipping Rates & Policies</a>
                         <a href={url}>Returns & Replacements</a>
                         <a href={url}>Manage Your Content and Devices</a>
                         <a href={url}>Amazon Assistant</a>
                         <a href={url}>Help</a>
                    </div>
               </div>
               <div className="footer-lower">
                    <div className="footer-logo border-none">
                         <img src={FooterLogo} alt="footerlogo" />
                    </div>
                    <div>
                         <p><i class="fas fa-globe"></i> English <i class="fas fa-sort-circle"></i></p>
                    </div>
                    <div>
                         <p><i class="fas fa-dollar-sign"></i> USD - U.S. Dollar</p>
                    </div>
                    <div>
                         <img className="footer-location-flag" src={FlagUSA} alt="flagusa" />
                         <p>&nbsp; &nbsp; United States</p>
                    </div>
               </div>
               <div className="useful-links">
                    <div>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                         <a href="http://www.example.com"><span>Amazon Business</span><br /> Everything For Your Business</a>
                         <a href="http://www.example.com"><span>Box Office Mojo</span><br /> Find Movie Box Office Data</a>
                         <a href="http://www.example.com"><span>Kindle Direct Publishing</span><br /> Indie Digital & Print Publishing Made Easy</a>
                    </div>
                    <div>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                         <a href="http://www.example.com"><span>Amazon Business</span><br /> Everything For Your Business</a>
                         <a href="http://www.example.com"><span>Box Office Mojo</span><br /> Find Movie Box Office Data</a>
                         <a href="http://www.example.com"><span>Kindle Direct Publishing</span><br /> Indie Digital & Print Publishing Made Easy</a>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                    </div>
                    <div>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                         <a href="http://www.example.com"><span>Amazon Business</span><br /> Everything For Your Business</a>
                         <a href="http://www.example.com"><span>Box Office Mojo</span><br /> Find Movie Box Office Data</a>
                         <a href="http://www.example.com"><span>Kindle Direct Publishing</span><br /> Indie Digital & Print Publishing Made Easy</a>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                    </div>
                    <div>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                         <a href="http://www.example.com"><span>Amazon Business</span><br /> Everything For Your Business</a>
                         <a href="http://www.example.com"><span>Box Office Mojo</span><br /> Find Movie Box Office Data</a>
                         <a href="http://www.example.com"><span>Kindle Direct Publishing</span><br /> Indie Digital & Print Publishing Made Easy</a>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                    </div>
                    <div>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                         <a href="http://www.example.com"><span>Amazon Business</span><br /> Everything For Your Business</a>
                         <a href="http://www.example.com"><span>Box Office Mojo</span><br /> Find Movie Box Office Data</a>
                         <a href="http://www.example.com"><span>Kindle Direct Publishing</span><br /> Indie Digital & Print Publishing Made Easy</a>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                    </div>
                    <div>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                         <a href="http://www.example.com"><span>Amazon Business</span><br /> Everything For Your Business</a>
                         <a href="http://www.example.com"><span>Box Office Mojo</span><br /> Find Movie Box Office Data</a>
                         <a href="http://www.example.com"><span>Kindle Direct Publishing</span><br /> Indie Digital & Print Publishing Made Easy</a>
                    </div>
                    <div>
                         <a href="http://www.example.com"><span>Amazon Music</span><br />Stream millions of songs</a>
                         <a href="http://www.example.com"><span>Amazon Business</span><br /> Everything For Your Business</a>
                         <a href="http://www.example.com"><span>Box Office Mojo</span><br /> Find Movie Box Office Data</a>
                         <a href="http://www.example.com"><span>Kindle Direct Publishing</span><br /> Indie Digital & Print Publishing Made Easy</a>
                    </div>
               </div>
               <div className="copyright">
                    <div>
                         <span>Conditions of Use</span>
                         <span>Pricacy Notice</span>
                         <span>Interest-Based Adds</span>
                    </div>
                    <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
               </div>
          </footer>
     )
}

export default Footer;