import React from 'react'
import "../../Assets/CSS/styles.css"
import "../../Assets/CSS/bootstrap.css"
import Search from "../../Assets/images/icons/search-icon-sm.png"
import Cart from "../../Assets/images/icons/cart-sm.png"
import Logo from "../../Assets/images/icons/logo-sm.png"
import "bootstrap/dist/css/bootstrap.min.css";

function AppleHeader(){
   return(
       <div>
           <header>
               <div className="nav-wrapper fixed-top">
                   <div className="container">
                       <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                           <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target=".navbar-collapse"> ☰

                           </button>
                           <a className="navbar-brand mx-auto" href="#"><img src={Logo}/></a>
                           <div className="navbar-collapse collapse">
                               <ul class="navbar-nav nav-justified w-100 nav-fill">
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="#">iphone</a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="#">ipad</a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="#">watch</a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="#">tv</a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="#">Music</a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="#">Support</a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="/search/"><img
                                        src={Search}/></a></li>
                                    <li className="nav-item"><a class="nav-link js-scroll-trigger" href="/cart/"><img
                                        src={Cart}/></a></li>

                               </ul>

                           </div>

                       </nav>

                   </div>

               </div>
           </header>
       </div>
   )
     
    

}
export default AppleHeader;