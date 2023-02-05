import React, { Fragment } from "react";
import bag from "../../assets/images/shopping bag.svg";
import shop from "../../assets/images/shop 2.svg";
import like from "../../assets/images/heart.svg";
import user from "../../assets/images/user.svg";

const Header = () => {
    
    return (
        <Fragment>
            <div style={{height:"100px", width:"100%"}}></div>
            

        <nav class="navbar navbar-light navbar-expand-sm bg-light fixed-top">
            <div class="container my-2">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a href="/" class="navbar-brand">
            <i class="fas fa-blog"></i> &nbsp;
            SHOP
            </a>
            
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-3 ">
                        <div className="notification">
                        <img src={shop} />
                        <span class="badge">3</span>
                        </div>
                        
                    </li>
                    <li class="nav-item mx-3 ">
                    <div className="notification">
                        <img src={user} />
                        <span class="badge">3</span>
                        </div>
                    </li>
                    <li class="nav-item mx-3 ">
                    <div className="notification">
                        <img src={like} />
                        <span class="badge">3</span>
                        </div>
                    </li>
                    <li class="nav-item mx-3 ">
                    <div className="notification">
                        <img src={bag} />
                        <span class="badge">3</span>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
  </nav>
  

    

        </Fragment>
        
    )
}

export default Header;